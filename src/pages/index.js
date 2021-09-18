import React from "react"
import Layout from "../components/Layout"
import "../assets/css/style.css"
import styled from "styled-components"

export default function Home() {
  return (
    <>
      <Layout>
        <Wrapper>
          <h1>Hello Styled</h1>
        </Wrapper>
      </Layout>
    </>
  )
}

const Wrapper = styled.section``
