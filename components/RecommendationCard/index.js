import { useEffect, useState } from "react"
import toTitleCase from "@gouch/to-title-case"
import FadeIn from "react-fade-in"
import ReactTextCollapse from "react-text-collapse"
import {
  BackgroundLayerOne,
  BackgroundLayerTwo,
  Container,
  HeadingContainer,
  LineSeparator,
  HeadingQuestion,
  ImageContainer,
  ItemImage,
  RightContainer,
  ItemTitle,
  Author,
  ItemTypeContainer,
  ItemType,
  ItemSynopsis,
  ButtonContainer,
  NoButton,
  YesButton,
  BookIcon,
  MovieIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "./RecommendationCardElements"

const RecommendationCard = () => {
  const [data, setData] = useState(null)
  const [thumbnail, setThumbnail] = useState("")
  const [type, setType] = useState(null)
  const [author, setAuthor] = useState(null)
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [itemId, setItemId] = useState(null)
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(true)

  async function fetchItem() {
    const response = await fetch("https://api.lib.byu.edu/leaflet/item")
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`
      throw new Error(message)
    }

    const data = await response.json()
    setData([data])
    setThumbnail(data.thumbnail)
    setType(data.type)
    setAuthor(data.author)
    setTitle(data.title)
    setDescription(data.description)
    setItemId(data.id)
  }

  const handleFetchItem = () => {
    fetchItem().catch((error) => {
      error.message
    })
  }

  async function postData(trueOrFalse) {
    const response = await fetch(
      "https://api.lib.byu.edu/leaflet/users/2/ratings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          itemId: itemId,
          rating: trueOrFalse,
        }),
      }
    )
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`
      throw new Error(message)
    }
    const data = await response.json()
    console.log(data)
    console.log(response)
  }

  const handleYes = () => {
    postData(true).catch((error) => {
      error.message
    })
    handleFetchItem()
    setVisible(!visible)
    setCount(count + 1)
  }

  const handleNo = () => {
    postData(false).catch((error) => {
      error.message
    })
    handleFetchItem()
    setVisible(!visible)
    setCount(count + 1)
  }

  const formatAuthorName = () => {
    /* 
      1) Splits string separated by space character
      2) creates an array of elements starting at first index up to third
      3) reverses order of that array so last name is first
      4) joins the two array elements into a string separated by a comma and a space. 
    */
    let formattedAuthorName = author.split(" ").slice(0, 2).reverse().join(", ")
    return formattedAuthorName
  }

  const TEXT_COLLAPSE_OPTIONS = {
    collapse: true,
    collapseText: "... show more",
    expandText: "show less",
    minHeight: 284,
    maxHeight: 400,
    textStyle: {
      color: "#4891a8",
      fontSize: "20px",
    },
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true)
    }, 700)

    return () => clearTimeout(timeout)
  }, [count])

  useEffect(() => {
    handleFetchItem()
  }, [])

  return (
    <>
      <BackgroundLayerOne>
        <BackgroundLayerTwo>
          {data && (
            <FadeIn visible={visible} transitionDuration={700}>
              <Container>
                <HeadingContainer>
                  {type === "FILM" && (
                    <HeadingQuestion>Would you watch this?</HeadingQuestion>
                  )}
                  {type === "BOOK" && (
                    <HeadingQuestion>Would you read this?</HeadingQuestion>
                  )}
                  <LineSeparator />
                </HeadingContainer>
                <ImageContainer>
                  {thumbnail && (
                    <FadeIn visible={visible} transitionDuration={50}>
                      <ItemImage
                        style={{ visibility: visible ? "visible" : "hidden" }}
                        src={thumbnail}
                        alt={`${title} cover art`}
                      ></ItemImage>
                    </FadeIn>
                  )}
                </ImageContainer>
                <RightContainer
                  style={{ visibility: visible ? "visible" : "hidden" }}
                >
                  {title && <ItemTitle>{title.toTitleCase()}</ItemTitle>}
                  {author && <Author>{formatAuthorName()}</Author>}
                  <ItemTypeContainer>
                    <ItemType>
                      {type === "BOOK" ? <BookIcon /> : <MovieIcon />}
                      {type && type.toLowerCase().toTitleCase()}
                    </ItemType>
                  </ItemTypeContainer>
                  {description?.length > 674 ? (
                    <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
                      <ItemSynopsis>{description}</ItemSynopsis>
                    </ReactTextCollapse>
                  ) : (
                    <ItemSynopsis>{description}</ItemSynopsis>
                  )}
                </RightContainer>
                <ButtonContainer>
                  <NoButton onClick={() => handleNo()}>
                    <ThumbsDownIcon />
                    No
                  </NoButton>
                  <YesButton onClick={() => handleYes()}>
                    <ThumbsUpIcon />
                    Yes
                  </YesButton>
                </ButtonContainer>
              </Container>
            </FadeIn>
          )}
        </BackgroundLayerTwo>
      </BackgroundLayerOne>
    </>
  )
}

export default RecommendationCard
