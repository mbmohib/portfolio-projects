import React from 'react';
import styled from 'styled-components';
import images from './ImportImages';
import DeleteIcon from '../images/delete.svg';

const SkillsWrapper = styled.ul`
    display: ${props => props.list.display};
    flex-wrap: ${props => props.list.flexWrap};
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

const CrossIcon = styled.img`
    font-size: 1.4rem;
    margin-left: 10px;
`;

const Skills = props => (
    <SkillsWrapper list={props.list ? {display: 'block'} : {display: 'flex', flexWrap: 'wrap'}} large={props.large}>
        {
            props.skills &&
            props.skills.map( (skill, index) => (
                <li className="skill-item" onClick={(e) => props.handleFilter(e.target)} key={index}>
                    <img src={images[skill.toLowerCase().split(' ').join('-')]} alt="" />
                    {skill}
                    {
                        props.list && 
                        <CrossIcon src={DeleteIcon} alt="Delete Icon" />
                    }
                </li>
            ))
        }
    </SkillsWrapper>
)

export default Skills;
