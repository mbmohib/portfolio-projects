import React from 'react';
import Container from './Container';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    background: ${props => props.theme.secondaryColor};
    padding: ${props => props.theme.mediumSpace};
    margin-top: ${props => props.theme.mediumSpace};
`;

const Footer = () => (
    <FooterWrapper>
        <Container>
            ©2018 mohib.me
        </Container>
    </FooterWrapper>
)

export default Footer;