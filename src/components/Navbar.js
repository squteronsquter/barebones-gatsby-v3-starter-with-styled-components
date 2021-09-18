import React from "react"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo.svg"
import styled from "styled-components"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <LogoImage>
                <img className="logo-image" src={logo} alt="logo" />
              </LogoImage>
            </Link>
            <button className="nav-btn">
              <FiAlignJustify />
            </button>
          </div>
          <div className="nav-links show-links">
            <Link to="/" className="nav-link" activeClassName="active-link">
              Home
            </Link>

            <Link
              to="/recipes"
              className="nav-link"
              activeClassName="active-link"
            >
              Recipes
            </Link>

            <Link to="/tags" className="nav-link" activeClassName="active-link">
              Tags
            </Link>
            <Link
              to="/about"
              className="nav-link"
              activeClassName="active-link"
            >
              About
            </Link>
            <Link
              to="/images"
              className="nav-link"
              activeClassName="active-link"
            >
              Images
            </Link>

            <div className="nav-link contact-link">
              <Link to="/contact" className="btn">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

const LogoImage = styled.section`
  img.logo-image {
    width: 40px;
  }
`
