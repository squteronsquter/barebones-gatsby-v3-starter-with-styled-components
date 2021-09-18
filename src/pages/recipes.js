import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Recipes() {
  return (
    <>
      <Layout>
        <h1>Recipes Page</h1>
        <StaticImage src="../assets/images/pex-1000.jpg" alt="Bread" />
      </Layout>
    </>
  )
}
