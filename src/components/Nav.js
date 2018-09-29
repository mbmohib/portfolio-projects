import React from 'react';
import styled from 'styled-components';
// import MenuIcon from '@material-ui/icons/Menu';
// import IconButton from '@material-ui/core/IconButton';
// import { NavLink } from 'react-router-dom';
// import media from '../style/mediaQuery';

const NavWrapper = styled.div`
    display: flex;
    padding: 10px 0;
    justify-content: flex-end;
`

// const NavItem = styled(NavLink) `
//     padding: 10px;
//     color: ${props => props.theme.fontColor};
//     font-size: 1.2rem;
//     text-transform: uppercase;
//     display: none;

//     ${media.tablet`
//         display: block;
//     `}
// `;

const Link = styled.a`
    padding: 10px;
    color: ${props => props.theme.fontColor};
    font-size: 1.2rem;
    text-transform: uppercase;
`;

const Nav = () => (
    <NavWrapper>
        <Link target="_blank" href="https://mohib.me/">Home</Link>
        <Link target="_blank" href="https://mohib.me/">Fork This Repo</Link>
        {/* <Link style={{ padding: '0' }}>
            <IconButton
                color="inherit"
                aria-label="Open drawer"
                // onClick={this.handleDrawerOpen}
            >
                <MenuIcon />
            </IconButton>
        </Link> */}
    </NavWrapper>
)

export default Nav