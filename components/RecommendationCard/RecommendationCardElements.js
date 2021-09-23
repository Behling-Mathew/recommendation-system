import styled from "styled-components"
import {
  FaBook as BIcon,
  FaThumbsDown as DownIcon,
  FaThumbsUp as UpIcon,
} from "react-icons/fa"
import { RiMovieFill as MIcon } from "react-icons/ri"

export const BackgroundLayerOne = styled.div`
  border: 1px solid #909a9d;
  position: absolute;
  max-width: 900px;
  width: 900px;
  top: 45%;
  left: 50%;
  margin-right: -50%;
  margin-top: 0;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: -1;
  box-shadow: 1px 1px 2px #909a9d;
  border-radius: 2px;

  @media screen and (max-width: 900px) {
    width: auto;
    max-width: 100%;
    border: none;
    box-shadow: unset;
    transform: unset;
    top: 50px;
    margin-top: 200px;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-height: 1080px) {
    transform: scale(0.8) translate(-60%, -70%);
    margin-top: 100px;
  }

  @media screen and (max-width: 900px) and (max-height: 1080px) {
    margin-top: 270px;
  }

  @media screen and (max-width: 600px) and (max-height: 1080px) {
    margin-top: 270px;
  }
`
export const BackgroundLayerTwo = styled.div`
  border: 1px solid #909a9d;
  position: relative;
  max-width: 900px;
  top: 45%;
  left: 50%;
  margin-right: -50%;
  margin-top: 0;
  background: #fff;
  transform: translate(-51.5%, -1.5%);
  box-shadow: 1px 1px 2px #909a9d;
  border-radius: 2px;

  @media screen and (max-width: 900px) {
    width: auto;
    max-width: 100%;
    border: none;
    box-shadow: unset;
    transform: translate(-50%, 0%);
  }
`
export const Container = styled.div`
  display: grid;
  position: relative;
  right: 1.5%;
  bottom: 13.5px;
  grid-template-columns: 1fr 2fr;
  justify-items: center;
  padding: 40px;
  font-family: "Source Sans Pro", sans-serif;
  border: 1px solid #909a9d;
  max-width: 900px;
  margin-right: auto;
  margin-left: auto;
  background: #fff;
  box-shadow: 1px 1px 2px #909a9d;
  border-radius: 2px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    width: unset;
    border: none;
    box-shadow: unset;
    right: unset;
    bottom: unset;
    margin-top: 850px;
  }
`
export const HeadingContainer = styled.div`
  grid-column: 1 / -1;
  padding-bottom: 50px;
`
export const LineSeparator = styled.hr`
  color: #909a9d;
  height: 3px;
  background: #909a9d;
  width: 50%;
`
export const HeadingQuestion = styled.h1`
  text-align: center;
  color: #909a9d;
`
export const ImageContainer = styled.div`
  display: grid;
  grid-row-start: 2;
  max-width: 300px;
  justify-self: right;
  padding: 5.5px;

  @media screen and (max-width: 900px) {
    grid-row-start: unset;
    justify-self: center;
  }
`
export const ItemImage = styled.img`
  width: 260px;
  background: #909a9d;
  border-radius: 5px;
  padding: 3px;
  max-height: 425px;
`
export const RightContainer = styled.div`
  grid-row-start: 2;
  justify-self: left;
  padding-left: 40px;
  max-width: 550px;

  @media screen and (max-width: 900px) {
    grid-row-start: unset;
    justify-self: center;
    padding-left: unset;
  }
`
export const ItemTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.9rem;

  @media screen and (max-width: 900px) {
    margin-top: unset;
    padding: 20px;
    text-align: center;
  }
`
export const Author = styled.h3`
  color: #909a9d;
  margin-top: 0.2rem;
  margin-bottom: 0.4rem;
`
export const ItemTypeContainer = styled.div`
  font-size: 2rem;
`
export const ItemType = styled.p`
  font-size: 1.2rem;
  color: #4891a8;
  margin-top: 0;
`
export const ItemSynopsis = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
`
export const ButtonContainer = styled.div`
  grid-column: 1 / -1;
  justify-self: right;
  padding: 20px;
  min-width: 121px;
  margin-top: 30px;

  @media screen and (max-width: 900px) {
    padding: 10px;
    text-align: center;
    justify-self: center;
  }
`
export const BookIcon = styled(BIcon)`
  color: #4891a8;
  position: relative;
  top: 3.7px;
  margin-right: 5px;
`

export const MovieIcon = styled(MIcon)`
  color: #4891a8;
  position: relative;
  top: 3.7px;
  margin-right: 5px;
`

export const ThumbsDownIcon = styled(DownIcon)`
  color: white;
  position: relative;
  top: 2px;
  margin-right: 5px;
  font-size: 1.5rem;
`

export const ThumbsUpIcon = styled(UpIcon)`
  color: white;
  position: relative;
  top: 2px;
  margin-right: 5px;
  font-size: 1.5rem;
`
export const NoButton = styled.button`
  padding: 10px;
  margin: 10px;
  background: #b85a47;
  color: white;
  border: unset;
  font-size: 1.5rem;
  width: 150px;
  border-radius: 5px;
  font-family: "Source Sans Pro", sans-serif;

  @media screen and (max-width: 900px) {
    width: 110px;
  }

  &:active {
    transform: translateY(3px);
  }

  &:hover {
    cursor: pointer;
    color: #b85a47;
    background: #fff;
    box-shadow: 2px 2px 4px 4px #b85a47;
    ${ThumbsDownIcon} {
      color: #b85a47;
    }
  }
`
export const YesButton = styled.button`
  padding: 10px;
  margin: 10px;
  background: #4891a8;
  color: white;
  border: unset;
  font-size: 1.5rem;
  width: 150px;
  border-radius: 5px;
  font-family: "Source Sans Pro", sans-serif;

  @media screen and (max-width: 900px) {
    width: 110px;
  }
  &:active {
    transform: translateY(3px);
  }

  &:hover {
    color: #4891a8;
    background: #fff;
    cursor: pointer;
    box-shadow: 2px 2px 4px 4px #4891a8;

    ${ThumbsUpIcon} {
      color: #4891a8;
    }
  }
`
