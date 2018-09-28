import React from 'react'
import Container from './Container'
import Skills from './Skills'
import Project from '../components/Project'
import Grid from '@material-ui/core/Grid'
import data from '../data.js'
import SelectedSkills from './SelectedSkills';

class ProjectList extends React.Component {
    state = {
        projects: undefined,
        filteredProjects: [],
        skills : [],
        filterKeys: []
    }

    componentDidMount() {
        this.setState(() => {
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
        const uniqueSkills = [];
        this.state.projects.map( project => {
            return project.skills.filter( skill => {
                if (!uniqueSkills.find( item => skill === item)) {
                    uniqueSkills.push(skill);
                }
            })
        })

        this.setState((prevState) => {
            return {
                skills : prevState.skills.concat(uniqueSkills)
            }
        })
    }

    filterProjects() {
        const filteredProjects = [];
        if (this.state.filterKeys.length > 0) {
            this.state.projects.map( project => {
                project.skills.filter( skill => {
                    this.state.filterKeys.map( key => {
                        if (skill.toLowerCase() === key.toLowerCase()) {
                            if (!filteredProjects.find( item => item.id === project.id)) {
                                filteredProjects.push(project);
                            }
                        };
                    })
                })
            })
        } else {
            filteredProjects.push(...this.state.projects);
        }

        this.setState((prevState) => {
            return {
                filteredProjects : filteredProjects
            }
        })
    }

    deleteFilter = item => {
        let filterText;

        if (item.nodeName === 'LI') {
            filterText = item.innerText;
        } else if (item.nodeName === 'IMG') {
            filterText =item.parentNode.innerText;
        }

        const newFilterKeys = this.state.filterKeys.filter( key => {
            return key.toLowerCase() !== filterText.toLowerCase();
        })

        this.setState(() => ({ filterKeys: newFilterKeys }));
    }

    handleFilter = (item) => {
        let filterText;

        if (item.nodeName === 'LI') {
            filterText = item.innerText;
        } else if (item.nodeName === 'IMG') {
            filterText =item.parentNode.innerText;
        }

        if (!this.state.filterKeys.find( key => key.toLowerCase() === filterText.toLowerCase())) {
            this.setState((prevState) => ({ filterKeys: prevState.filterKeys.concat(filterText) }));
        }
    }

    clearAllFilterKeys = () => {
        this.setState(() => ({ filterKeys: [] }))
    }

    render() {
        return (
            <Container>
                <Skills large skills={this.state.skills} handleFilter={this.handleFilter}/>

                <Grid container spacing={16}>
                    {
                        this.state.filteredProjects &&
                        this.state.filteredProjects.map(project => (
                            <Grid item key={project.id} xs={12} sm={6} md={4}>
                                <Project project={project} />
                            </Grid>
                        ))
                    }
                </Grid>

                <SelectedSkills clearAllFilterKeys={this.clearAllFilterKeys} deleteFilter={this.deleteFilter} skills={this.state.filterKeys}/>
            </Container>
        )
    }
}

export default ProjectList
