import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <>
      <Wrapper>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section``
