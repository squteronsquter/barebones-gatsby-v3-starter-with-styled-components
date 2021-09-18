import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} <span>SimplyRecipes</span>. Built
          with <a href="https://www.gatsbyjs.com/">Gatsby</a>
        </p>
      </footer>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.section`
  background-color: #ccc;
  margin-top: 2em;
  display: flex;
  height: 4em;
  justify-content: center;
  align-items: center;
  width: 100%;
  a {
    color: #2d4a7d;
  }
  a:hover {
    text-decoration: none;
  }
`
