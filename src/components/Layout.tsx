import React, {  useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { config, dom } from '@fortawesome/fontawesome-svg-core'


import '../fontAwesome'

import { theme } from '../theme'
import NavBar from './Navbar'



config.autoAddCss = false

interface Props {
  title?: string
}

const GlobalStyle = createGlobalStyle`
  ${dom.css()}

   html {
      box-sizing: border-box;
    
   }
   *, *:before, *:after {
      box-sizing: inherit;
   }
   body {
    margin: 0;
    padding: 0;
    font-family: 'DB HelvethaicaMon X', sans-serif;
    width: 100%;
    height: 1200px;
   }

   button {
    border: none;
    background: white;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.darkTeal};
    padding: 0.5rem 1rem;
    border-radius: ${(props) => props.theme.radius};
    cursor: pointer;
    transition: background-color ${(props) => props.theme.transition} ease-in;

    &:hover {
        background: ${(props) => props.theme.colors.lightGrey};
    }
   }
`

const StyledPage = styled.div`
  background: white;
  color: ${(props) => props.theme.fontColors.primary};
`

const DisplayedPage = styled.div`
  margin: 0 auto;
  justify-content: center;
`

const Layout: React.FC<Props> = ({ children }) => {
 

  const { asPath, replace, pathname,  } = useRouter()

  useEffect(() => {
    if (asPath === '/dashboard#_=_' || asPath === '/dashboard#') {
      replace('/dashboard')
    }

    if (asPath === '/#_=_' || asPath === '/#') {
      replace('/')
    }
  }, [asPath, replace])

  useEffect(() => {
  
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <StyledPage>
          <Head>
            <title>
              {pathname === '/' ? 'Nayoo exam1' : pathname.split('/')[1].toUpperCase()}
            </title>
            <meta charSet='utf-8' />
            <meta
              name='viewport'
              content='initial-scale=1.0, width=device-width'
            />
             <meta name="description" content="Generated by create next app" />
           <link rel="icon" href="/favicon.ico" /> 
          </Head>

          <NavBar />
          <DisplayedPage>
            <>{children}</>
            <>
            </>
          </DisplayedPage>
        </StyledPage>
      </>
    </ThemeProvider>
  )
}
export default Layout