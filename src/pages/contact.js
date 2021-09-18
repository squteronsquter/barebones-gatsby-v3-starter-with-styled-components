import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

export default function Contact() {
  return (
    <>
      <Layout>
        <Wrapper>
          <h1>Contact Page</h1>
        </Wrapper>
      </Layout>
    </>
  )
}

const Wrapper = styled.section`
  color: #000;
  padding: 2em;
  h1 {
    font-size: 3em;
  }
`
