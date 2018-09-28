import React from 'react';
import styled from 'styled-components';
import media from '../style/mediaQuery';

const Wrapper = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    ${media.tablet`
        width: 750px;
    `}

    ${media.smallLaptop`
        width: 970px;
    `}

    ${media.laptop`
        width: 1170px;
    `}
`

const Container = props => (
    <Wrapper>
        {props.children}
    </Wrapper>
)

export default Container;