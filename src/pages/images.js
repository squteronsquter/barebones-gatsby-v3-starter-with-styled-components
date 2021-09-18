import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Images() {
  return (
    <>
      <Layout>
        <h1>Images Page</h1>
        <StaticImage src="../assets/images/bread.jpeg" alt="Bread" />
      </Layout>
    </>
  )
}
