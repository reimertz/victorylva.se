import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Header = styled.header`
  background: ${props => props.theme.colors.menuBG};
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
      transition: 200ms;
      margin-top: ${props => props.visible ? '0px' : '-200px'};
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
    border-bottom: 2px solid ${props => props.theme.colors.menuBG};
    &:hover {
      opacity: 1;
    }
  }
`
const MenuButton = styled.div`
  color: white;
  display: none;
  font-size: 1.5em;
  font-weight: 800;
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;

  @media (max-width: 555px) {
    display: inline-block;
  }
`

const activeLinkStyle = {
  opacity: 1
};

class Menu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      sideBarOpen: false
    }
  }

  toggleSidebar = () => 
    this.setState(oldState => { 
      document.body.setAttribute('data-sidebar-open', !oldState.sideBarOpen)

      return {
        sideBarOpen: !oldState.sideBarOpen
      }
    })
  

  render() {
    const { pages } = this.props
    const { sideBarOpen } = this.state
    return (
      <Header>
        <MenuButton visible={sideBarOpen} onClick={this.toggleSidebar}> {sideBarOpen ? '✘' : '☰'} </MenuButton>
        <Nav visible={sideBarOpen}>
          <ul>
            { 
              pages.sort((a,b) => a.node.order - b.node.order).map((p) => {
                const { title, slug } = p.node;
                return <li key={slug}>
                  <Link 
                    onClick={() => this.setState({sideBarOpen: false})}
                    to={`/${slug}`} 
                    exact 
                    activeStyle={activeLinkStyle}
                  >
                    {title}
                  </Link>
                  </li>
              })
            }
          </ul>
        </Nav>
      </Header>
    )
  }
}

export default Menu
