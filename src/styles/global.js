import { injectGlobal } from 'styled-components'

import Geosans from '../fonts/Geosans.ttf';
import GeosansLight from '../fonts/GeosansLight.ttf';
import GeosansLightOblique from '../fonts/GeosansLight-Oblique.ttf';


injectGlobal`
  @font-face {
    font-family: Geosans;
    src: url('${Geosans}') format('truetype');
  }
  @font-face {
    font-family: GeosansLight;
    src: url('${GeosansLight}') format('truetype');
  }
  @font-face {
    font-family: GeosansLightOblique;
    src: url('${GeosansLightOblique}') format('truetype');
  }

  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: white;
    font-size: 115%;
    -webkit-text-size-adjust: 100%;
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    font-weight: 300;
    font-family: GeosansLight, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  h1, h2, h3 {
    font-weight: 500;
  }

  h1 {
    letter-spacing: 4px;
  }

  h2 {
    letter-spacing: 5px;
  }

  h3, li {
    letter-spacing: 3px;
  }

  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  #video-container {
    height: 100%;
    width: 100%;
    max-height: 100vh;
    overflow: hidden;
    left: 0;
    top:0;
    position: absolute;
    z-index: -1;
  }

  video#regular {
    position: absolute;
    background: transparent;
    height: 100vh;
    width: 100%;
    z-index:1337;
  }

  video#blurred {
    position: absolute;
    width: 210vw;
    height: auto;
    margin-top: -15vh;
    margin-left: -55vw;
    z-index:1;
    filter: blur(20px);
  }
`;