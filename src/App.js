import React, { Component } from 'react'
import AppRouter from './router/AppRouter';
import GlobalStyle from './style/globalStyle';

class App extends Component {
    render() {
        return (
            <GlobalStyle>
                <AppRouter />
            </GlobalStyle>
        )
    }
}

export default App