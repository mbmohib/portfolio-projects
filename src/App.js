import React, { Component } from 'react'
import AppRouter from './router/AppRouter';
import GlobalStyle from './style/globalStyle';
import { Grid } from '@material-ui/core';

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
// 1.HTML Logo
// 2. Masonary Grid
// 3. Hide Button when no link available
// 4. Space Between Button
// 5. Handle Magic Footer
// 6. Refactor Filter Method

export default App