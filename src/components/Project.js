import React from 'react';
import { Button } from 'antd';
import ThumbnailPic from '../images/m-heros-thumb.jpg';
import ReactLogo from '../images/react.svg';
import styled from 'styled-components';
import Title from './Title';
import SubTitle from './Subtitle';

const Hero = styled.div`
    margin-top: 50px;
    ${'' /* cursor: pointer; */}
    transition: all .3s;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,.08);

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

    ul {
        display: flex;

        a {
            padding: ${props => props.theme.tineSpace};
            color: ${props => props.theme.linkColor};

            :first-child {
                padding-left: 0;
            }
        }   
    }
    
    footer {
        display: flex;
        align-items: center;
        ${'' /* background: hsl(0, 0%, 85%); */}
        padding: ${props => props.theme.smallSpace};
        ${'' /* border-radius: 0 0 3px 3px; */}
        border-top: 1px solid #cdcdcd;

        img {
            width: 50px;
        }

        a {
            color: hsl(0, 0%, 42%);
        }
    }
`;

const Thumbnail = styled.figure`
    img {
        border-radius: 5px 5px 0 0;
    }
`;

const HeroFooter = styled.div`
    background: hsl(200, 25%, 88%);
    padding: 20px 10px;
    border-radius: 0 0 3px 3px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Project = props => (
    <Hero>
        <Thumbnail>
            <img src={ThumbnailPic} alt=""/>
        </Thumbnail>

        <HeroMeta>
            <header>
                <Title>M-Heros</Title>
            </header>
            <main>
                <ul>
                    <li><a href="">#react</a></li>
                    <li><a href="">#reactRouter</a></li>
                    <li><a href="">#reactRouter</a></li>
                </ul>
            </main>
            <footer>
                <img src={ReactLogo} alt=""/>
                <SubTitle>React</SubTitle>
            </footer>
        </HeroMeta>

        <HeroFooter>
            <Button style={{ marginLeft: '10px !important'}} type="ghost">Github</Button>
            <Button type="primary">Go Live</Button>
        </HeroFooter>
    </Hero>
)

export default Project;