import React from 'react';
import ThumbnailPic from '../images/m-heros-thumb.jpg';
import ReactLogo from '../images/react.png';
import Skills from './Skills';
import WordpressLogo from '../images/wordpress.svg';
import styled from 'styled-components';
import Title from './Title';
import SubTitle from './Subtitle';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const Hero = styled.div`
    ${'' /* cursor: pointer; */}
    transition: all .3s;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,.08);
    margin-bottom: ${props => props.theme.mediumSpace};

    :hover {
        ${'' /* box-shadow: 0 14px 25px rgba(0,0,0,.16); */}
        ${'' /* border-color: rgba(0, 0, 0, 0.09); */}
    }
`;

const HeroMeta = styled.div`
    header {
        padding: ${props => props.theme.smallSpace};
    }

    main {
        padding: ${props => props.theme.smallSpace};
    }
    
    footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 10px;
        border-top: 1px solid #cdcdcd;
    }
`;

const HeroMetaFooterItem = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 25px;
        margin-right: 5px;
    }

    a {
        color: hsl(0, 0%, 42%);
    }
`;

const Thumbnail = styled.figure`
    img {
        border-radius: 5px 5px 0 0;
    }
`;

const HeroFooter = styled.div`
    background: ${props => props.theme.greyColorTwo};
    padding: 20px 10px;
    border-radius: 0 0 3px 3px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Project = props => {

    return (
        <Hero>
            <Thumbnail>
                <img src={ThumbnailPic} alt=""/>
            </Thumbnail>
    
            <HeroMeta>
                <header>
                    <Title>M-Heros</Title>
                </header>
                <main>
                    <Skills />
                </main>
                <footer>
                    <HeroMetaFooterItem>
                        <img src={ReactLogo} alt=""/>
                        <SubTitle>React</SubTitle>
                    </HeroMetaFooterItem>
                    <HeroMetaFooterItem>
                        <img src={WordpressLogo} alt=""/>
                        <SubTitle>Wordpress</SubTitle>
                    </HeroMetaFooterItem>
                </footer>
            </HeroMeta>
    
            <HeroFooter>
                <Button href="#text-buttons">
                    Github
                </Button>
                <Button variant="contained" color="primary">
                    Go Live
                </Button>
            </HeroFooter>
        </Hero>
    )
}

export default Project;