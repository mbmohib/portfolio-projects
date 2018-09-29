import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from './theme'

const Style = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400');
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');

    * {
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        font-family: ${props => props.theme.normalFont};
        font-size: 1rem;
        line-height: 1.5;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }

    figure {
        margin: 0;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    ul {
        margin: 0;
        padding: 0;
        
        li {
            list-style: none;
        }
    }

    a {
        text-decoration: none;

        :focus {
            text-decoration: none;
        }
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        main {
            flex-grow: 1;
        }

    }
`

const GlobalStyle = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <Style />
                {props.children}
            </div>
        </ThemeProvider>
    )
}

export default GlobalStyle
