import React from 'react'
import styled from 'styled-components'
import AntLogo from '../images/ant-design.svg'
import ReactRouterLogo from '../images/react-router.png'
import StyleComponentsLogo from '../images/style-components.png'

const SkillsWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: ${props => props.large ? '20px 0' : '10px 0'};
    justify-content: ${props => props.large ? 'center' : 'flex-start'};

    li {
        list-style: none;
        padding: ${props => props.large ? '10px 15px' : '4px 10px'};
        margin-right: ${props => props.large ? '20px' : '10px'};
        font-size: ${props => props.large ? '1.3rem' : '1rem'};
        border-radius: ${props => props.large ? '5px' : '35px'};
        background: ${props => props.theme.greyColorOne};
        margin-bottom: 10px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        :last-child {
            margin-right: 0;
        }

        :hover {
            background: ${props => props.theme.greyColorTwo};
        }

        img {
            width: 25px;
            margin-right: 5px;
            filter: ${props => props.large ? 'grayscale(0%)' : 'grayscale(80%)'};
        }
    }
`;

const Skills = props => (
    <SkillsWrapper large={props.large}>
        <li>
            <img src={StyleComponentsLogo} alt="" />
            Style Components
        </li>
        <li>
            <img src={ReactRouterLogo} alt="" />
            React Router
        </li>
        <li>
            <img src={AntLogo} alt="" />
            Ant Design
        </li>
        <li>
            <img src={StyleComponentsLogo} alt="" />
            Style Components
        </li>
    </SkillsWrapper>
)

export default Skills;
