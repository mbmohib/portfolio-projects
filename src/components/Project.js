import React from 'react';
import Skills from './Skills';
import styled from 'styled-components';
import Title from './Title';
import SubTitle from './Subtitle';
import Button from '@material-ui/core/Button';
import images from './ImportImages';

const Hero = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: all 0.3s;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
`;

const HeroMeta = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    header {
        padding: ${props => props.theme.smallSpace};
    }

    main {
        padding: ${props => props.theme.smallSpace};
        flex-grow: 1;
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

    a {
        :last-child {
            margin-left: ${props => props.theme.smallSpace};
        }
    }
`;

const Project = props => (
    <Hero>
        <Thumbnail>
            <img src={images[props.project.thumbnail]} alt="" />
        </Thumbnail>

        <HeroMeta>
            <header>
                <Title>{props.project.title}</Title>
            </header>
            <main>
                <Skills
                    handleFilter={props.handleFilter}
                    skills={props.project.skills}
                />
            </main>
            <footer>
                {props.project.stacks &&
                    props.project.stacks.map((stack, index) => (
                        <HeroMetaFooterItem key={index}>
                            <img src={images[stack.toLowerCase()]} alt="" />
                            <SubTitle>{stack}</SubTitle>
                        </HeroMetaFooterItem>
                    ))}
            </footer>
        </HeroMeta>

        <HeroFooter>
            {props.project.github_link && (
                <Button
                    target="_blank"
                    href={props.project.github_link}
                    color={props.project.live_link ? 'inherit' : 'primary'}
                    variant={props.project.live_link ? 'flat' : 'contained'}
                >
                    Github
                </Button>
            )}
            {props.project.live_link && (
                <Button
                    target="_blank"
                    href={props.project.live_link}
                    variant="contained"
                    color="primary"
                >
                    Go Live
                </Button>
            )}
        </HeroFooter>
    </Hero>
);

export default Project;
