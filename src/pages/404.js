import React from 'react'
import { navigateTo } from 'gatsby-link';

const NotFoundPage = ({data}) =>  {
	if (typeof window !== `undefined`) {
  	navigateTo && navigateTo('/victor-och-ylva')
  }

  return (<div></div>)
}

export default NotFoundPage
