import React from 'react';
import ThumbnailPic from '../images/m-heros-thumb.jpg';
import ReactLogo from '../images/react.png';
import AntLogo from '../images/ant-design.svg';
import ReactRouterLogo from '../images/react-router.png';
import StyleComponentsLogo from '../images/style-components.png';
import WordpressLogo from '../images/wordpress.svg';
import styled from 'styled-components';
import Title from './Title';
import SubTitle from './Subtitle';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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
        flex-wrap: wrap;

        li {
            list-style: none;
            background: hsl(200, 25%, 96%);
            padding: 4px 10px;
            border-radius: 35px;
            margin-right: 10px;
            margin-bottom: 10px;

            :last-child {
                margin-right: 0;
            }

            img {
                width: 25px;
                margin-right: 5px;
                filter: grayscale(80%);
            }
        }

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
    background: hsl(200, 25%, 88%);
    padding: 20px 10px;
    border-radius: 0 0 3px 3px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Project = props => {
    const { classes } = props;

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
                    <ul>
                        <li>
                            <img src={StyleComponentsLogo} alt=""/>
                            Style Components
                        </li>
                        <li>
                            <img src={ReactRouterLogo} alt=""/>
                            React Router
                        </li>
                        <li>
                            <img src={AntLogo} alt=""/>
                            Ant Design
                        </li>
                        <li>
                            <img src={StyleComponentsLogo} alt=""/>
                            Style Components
                        </li>
                    </ul>
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
                <Button href="#text-buttons" className={classes.button}>
                    Github
                </Button>
                <Button variant="contained" color="primary" className={classes.button}>
                    Go Live
                </Button>
            </HeroFooter>
        </Hero>
    )
}

// export default Project;
// TextButtons.propTypes = {
//     // classes: PropTypes.object.isRequired,
// };

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
});
  
export default withStyles(styles)(Project);