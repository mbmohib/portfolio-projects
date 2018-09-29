import React from 'react';
import Container from './Container';
import Nav from './Nav';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import media from '../style/mediaQuery';

const HeaderWrapper = styled.div`
    background: ${props => props.theme.secondaryColor}
`;

const Logo = styled.a`
    color: ${props => props.theme.fontColor};
    padding: 5px;
    font-size:1.5rem;
    text-transform: lowercase;
    display: block;
    font-weight: ${props => props.theme.lightWeight};
    font-family: ${props => props.theme.titleFont};

    ${media.tablet`
        padding: 10px;
        font-size: 2rem;
    `}
`;

const Header = () => {

    return (
        <HeaderWrapper>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={4}>
                        <Logo target="blank" href="https://mohib.me" dangerouslySetInnerHTML={{
                            __html: '< mohib />'
                        }}>
                        </Logo>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Nav />
                    </Grid>
                </Grid>
            </Container>
        </HeaderWrapper>
    )
}

export default Header;