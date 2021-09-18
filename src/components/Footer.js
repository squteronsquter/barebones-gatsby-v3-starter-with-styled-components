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

const Wrapper = styled.section``
