import React from 'react'
import Helmet from 'react-helmet'
import styled, {ThemeProvider, keyframes} from 'styled-components'
import config from '../utils/siteConfig'
import globals from '../styles/global'
import theme from '../styles/theme'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import favicon from '../images/favicon.ico'

const Template = ({ children, data }) => {
    const pages = data.allContentfulPage.edges;

    return (
      <div>

        <Helmet>
          <title>{config.siteTitle}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
          <link rel="icon" href={favicon} />
          <link rel="prefetch" href="https://docs.google.com/forms/d/e/1FAIpQLSfzQrNMZYWO4UT8JJg-sV1o09bXz2meDNi_QOGrllC7R_rXyQ/viewform?embedded=true"/>
          <meta name="description" content={config.siteDescription}/>
          <meta property="og:title" content={config.siteTitle} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={config.siteTitle} />
          <meta property="og:url" content={config.siteUrl}/>
        </Helmet>

        <ThemeProvider theme={theme}>
          <div>
            <Menu pages={pages} />
            
              {children()}
            
            <Footer/>
          </div>
        </ThemeProvider>

      </div>
    )
}

export const query = graphql`
  query allPages {
    allContentfulPage {
      edges {
        node {
          slug
          title
          order
        }
      }
    }
  }
`

export default Template
