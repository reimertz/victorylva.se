import React from 'react'
import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0; 
    margin-left: -10px;
  }
  to { 
    opacity: 1; 
    margin-left: 0px;
  }
`

const Title = styled.h1`
  animation: ${fadeIn} 250ms linear 0ms forwards;
  font-size: ${props => props.small ? '1em' : '2em'};
  text-transform: capitalize;
  font-weight: 600;
  text-align: center;
  margin: 0 0 3rem 0;
  margin: ${props => props.small ? '1rem 0 4rem 0' : '0 0 3rem 0'};
  line-height: 1.2;
  span {
    margin: 0 0 0 .25em;
  }
  a {
    transition: all .2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }
`;

const PageTitle = (props) => {
  return (
    <Title small={props.small}>
      {props.children}
    </Title>
  )
}

export default PageTitle
