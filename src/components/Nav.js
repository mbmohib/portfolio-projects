import React from 'react';
import styled from 'styled-components';
import media from '../style/mediaQuery';

const NavWrapper = styled.div`
    display: flex;
    padding: 5px 0;
    justify-content: flex-end;

    ${media.tablet`
        padding: 10px 0;
    `}
`

const Link = styled.a`
    color: ${props => props.theme.fontColor};
    text-transform: uppercase;
    padding: 5px 10px;
    font-size: 1rem;

    ${media.tablet`
        padding: 10px;
        font-size: 1.1rem;
    `}
`;

const Nav = () => (
    <NavWrapper>
        <Link target="_blank" href="https://mohib.me/">Home</Link>
        <Link target="_blank" href="https://mohib.me/">Fork This Repo</Link>
    </NavWrapper>
)

export default Nav