import React from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid'
import data from '../data.js'
import Container from './Container'
import Skills from './Skills'
import DrawerToggle from './DrawerToggle'
import Project from './Project'
import SelectedSkills from './SelectedSkills'
import SkillsMobile from './SkillsMobile'
import media from '../style/mediaQuery';

const SkillsWrapper = styled.div`
    display: none;

    ${media.tablet`
        display: block !important;
    `}
`;
class ProjectList extends React.Component {
    state = {
        projects: undefined,
        filteredProjects: [],
        skills: [],
        filterKeys: [],
        openDrawer: false
    }

    componentDidMount() {
        this.setState(
            () => {
                return {
                    projects: data
                }
            },
            () => {
                this.findUniqueSkill()
                this.filterProjects()
            }
        )
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.filterKeys.length !== this.state.filterKeys.length) {
            this.filterProjects()
        }
    }

    findUniqueSkill() {
        // TODO: Refactor filter method
        const uniqueSkills = []
        this.state.projects.map(project => {
            return project.skills.filter(skill => {
                if (
                    !uniqueSkills.find(
                        item => skill.toLowerCase() === item.toLowerCase()
                    )
                ) {
                    uniqueSkills.push(skill)
                }
            })
        })

        this.state.projects.map(project => {
            return project.stacks.filter(skill => {
                if (
                    !uniqueSkills.find(
                        item => skill.toLowerCase() === item.toLowerCase()
                    )
                ) {
                    uniqueSkills.push(skill)
                }
            })
        })

        this.setState(prevState => {
            return {
                skills: prevState.skills.concat(uniqueSkills)
            }
        })
    }

    filterProjects() {
        // TODO: Refactor filter method
        const filteredProjects = []
        if (this.state.filterKeys.length > 0) {
            this.state.projects.map(project => {
                project.skills.filter(skill => {
                    this.state.filterKeys.map(key => {
                        if (skill.toLowerCase() === key.toLowerCase()) {
                            if (
                                !filteredProjects.find(
                                    item => item.id === project.id
                                )
                            ) {
                                filteredProjects.push(project)
                            }
                        }
                    })
                })
            })

            this.state.projects.map(project => {
                project.stacks.filter(stack => {
                    this.state.filterKeys.map(key => {
                        if (stack.toLowerCase() === key.toLowerCase()) {
                            if (
                                !filteredProjects.find(
                                    item => item.id === project.id
                                )
                            ) {
                                filteredProjects.push(project)
                            }
                        }
                    })
                })
            })
        } else {
            filteredProjects.push(...this.state.projects)
        }

        this.setState(prevState => {
            return {
                filteredProjects: filteredProjects
            }
        })
    }

    deleteFilter = item => {
        let filterText

        if (item.nodeName === 'LI') {
            filterText = item.innerText
        } else if (item.nodeName === 'IMG') {
            filterText = item.parentNode.innerText
        }

        const newFilterKeys = this.state.filterKeys.filter(key => {
            return key.toLowerCase() !== filterText.toLowerCase()
        })

        this.setState(() => ({ filterKeys: newFilterKeys }))
    }

    handleFilter = item => {
        let filterText

        if (item.nodeName === 'LI') {
            filterText = item.innerText;
        } else if (item.nodeName === 'IMG') {
            filterText = item.parentNode.innerText;
        } else {
            filterText = item;
        }

        if (
            !this.state.filterKeys.find(
                key => key.toLowerCase() === filterText.toLowerCase()
            )
        ) {
            this.setState(prevState => ({
                filterKeys: prevState.filterKeys.concat(filterText)
            }))
        }

        this.setState(() => ({ openDrawer: true }))
    }

    clearAllFilterKeys = () => {
        this.setState(() => ({ filterKeys: [], openDrawer: false }))
    }

    toggleDrawer = () => {
        this.setState(prevState => ({ openDrawer: !prevState.openDrawer }))
    }

    render() {
        return (
            <Container>
                <SkillsWrapper>
                    <Skills
                        large
                        skills={this.state.skills}
                        handleFilter={this.handleFilter}
                    />
                </SkillsWrapper>

                <SkillsMobile 
                        skills={this.state.skills}
                        handleFilter={this.handleFilter}
                    />

                <Grid container spacing={24}>
                    {this.state.filteredProjects &&
                        this.state.filteredProjects
                            .sort((a, b) => a.id - b.id)
                            .map(project => (
                                <Grid
                                    item
                                    key={project.id}
                                    xs={12}
                                    sm={6}
                                    md={4}
                                >
                                    <Project 
                                        handleFilter={this.handleFilter} 
                                        project={project} 
                                    />
                                </Grid>
                            ))}
                </Grid>

                <SelectedSkills
                    clearAllFilterKeys={this.clearAllFilterKeys}
                    deleteFilter={this.deleteFilter}
                    skills={this.state.filterKeys}
                    open={this.state.openDrawer}
                    toggleDrawer={this.toggleDrawer}
                />
                {this.state.filterKeys.length > 0 && (
                    <DrawerToggle
                        show={!this.state.openDrawer}
                        toggleDrawer={this.toggleDrawer}
                    />
                )}
            </Container>
        )
    }
}

export default ProjectList
