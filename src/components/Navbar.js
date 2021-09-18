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

const Wrapper = styled.section`
  font-size: 1.4em;
  margin-bottom: 1em;
  nav {
    background-color: #ccc;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  nav ul li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #2a2a2a;
    padding: 1em 3em;
  }
  a:hover {
    color: #2d4a7d;
  }
`
