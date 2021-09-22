import Head from "next/head"
import RecommendationCard from "../components/RecommendationCard"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <Head>
        <title>BYU Library | Item Recommendation</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <RecommendationCard />
    </div>
  )
}
