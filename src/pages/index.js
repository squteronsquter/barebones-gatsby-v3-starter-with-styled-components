import React from "react"
import Layout from "../components/Layout"
import "../assets/css/style.css"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <>
      <Layout>
        <Wrapper>
          <h1>Hello Styled</h1>
          <StaticImage src="../assets/images/pex-2000.jpg" alt="Bread" />
        </Wrapper>
      </Layout>
    </>
  )
}

const Wrapper = styled.section``
