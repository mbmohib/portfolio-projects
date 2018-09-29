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

// TODO: 
// 2. Masonary Grid
// 6. Refactor Filter Method
// 6. Responsive

export default App