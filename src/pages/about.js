import React from "react"
import Layout from "../components/Layout"
// import "./index.css"
import styled from "styled-components"

export default function About() {
  return (
    <>
      <Layout>
        <Wrapper>
          <h1>About Page</h1>
        </Wrapper>
      </Layout>
    </>
  )
}

const Wrapper = styled.section`
  color: #000;
  h1 {
    font-size: 3em;
  }
`
