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
        skills: ['React', 'Javascript', 'Wordpress'],
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
                // After data fetched find unique skills
                // and showing them for filtering
                // this.findUniqueSkill()

                // Show projects based on 'filteredProjects' state
                // for 1st time it shows all projects
                this.filterProjects()
            }
        )
    }

    componentDidUpdate(prevProps, prevState) {
        // Check if any new filter key added or deleted
        // then filter again
        if (prevState.filterKeys.length !== this.state.filterKeys.length) {
            this.filterProjects()
        }
    }

    /*
    * Loop through all skills of project and store
    * unique skill in a loop
    */
    findUniqueSkill() {
        // TODO: Refactor filter method
        const uniqueSkills = []
        this.state.projects.map(project => {
            return project.skills.filter(skill => {
                // find unique filter key from skills array
                if (!uniqueSkills.find(item => skill.toLowerCase() === item.toLowerCase())) {
                    uniqueSkills.push(skill)
                }
            })
        })

        this.state.projects.map(project => {
            return project.stacks.filter(skill => {
                // find unique filter key from skills array
                if (!uniqueSkills.find(item => skill.toLowerCase() === item.toLowerCase())) {
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

    /*
    * Return True if project matched with filter key
    */
    matchedProject(item, keys) {
        let foundItem;
        
        for(let i=0; i<item[keys].length; i++) {
            foundItem = this.state.filterKeys.some(key => {
                return key.toLowerCase() === item[keys][i].toLowerCase();
            });

            if(foundItem) {
                return true;
            } else {
                continue;
            }
        }
        return false;
    }

    /*
    * Filter Projects according to key in 'filterKeys' state
    */
    filterProjects() {

        let filteredProjects = [];
        if (this.state.filterKeys.length > 0) {
            // Find projects from skills array
            const skillWise = this.state.projects.filter(project => {
                return this.matchedProject(project, 'skills');
            })

            // Find projects from stacks array
            const stackWise = this.state.projects.filter(project => {
                return this.matchedProject(project, 'stacks');
            });

            filteredProjects = filteredProjects.concat(...skillWise, ...stackWise);

        } else {
            // if no filter added show all projects
            filteredProjects.push(...this.state.projects)
        }

        this.setState(prevState => {
            return {
                filteredProjects: filteredProjects.filter( (project, index, self) => {
                    return self.indexOf(project) === index;
                })
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

    /*
    * Find filter value after clicking
    */
    handleFilter = item => {
        let filterText

        if (item.nodeName === 'LI') {
            filterText = item.innerText;
        } else if (item.nodeName === 'IMG') {
            filterText = item.parentNode.innerText;
        } else {
            filterText = item;
        }

        // Add filter key to 'filterKeys' state only if not added before
        if (!this.state.filterKeys.find(key => key.toLowerCase() === filterText.toLowerCase())) {
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
                {/* Show Skill in tablet, desktop devices */}
                <SkillsWrapper>
                    <Skills
                        large
                        skills={this.state.skills}
                        handleFilter={this.handleFilter}
                    />
                </SkillsWrapper>

                {/* Show Skill in mobile devices */}
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
                                    style={{ paddingBottom: 50}}
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

                {/* Open Drawer and show selected filters */}
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
