import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 100%;
  padding: 1.5em 0;
  z-index: 1337;
  position: relative;

  @media (max-width: 555px) {
    position: fixed;
    flex:1;
  }

`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  

  ul {
    display: flex;
    justify-content: center;
    @media (max-width: 555px) {
      flex-direction: column;
    }
  }

  li {
    display: inline-block;
    margin-left: 1em;
    font-size: 14px;
    @media (max-width: 555px) {
      margin-left: 0;
      text-align: center;
      padding-top: 1em;
    }
  }

  a {
    text-decoration: none;
    color: white;
    opacity: 0.5;
    font-weight: 600;
    transition: all .2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      opacity: 1;
    }
  }
`

const activeLinkStyle = {
  opacity: 1
};

const Menu = ({pages}) => {
    return (
      <Header>
        <Nav>
          <ul>
            { 
              pages.sort((a,b) => a.node.order - b.node.order).map((p) => {
                const { title, slug } = p.node;
                return <li key={slug}><Link to={`/${slug}`} exact activeStyle={activeLinkStyle}>{title}</Link></li>
              })
            }
          </ul>
        </Nav>
      </Header>
    )
}

export default Menu
