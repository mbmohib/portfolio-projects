import React from 'react';
import Container from './Container';
import Project from '../components/Project';
import Grid from '@material-ui/core/Grid';

class ProjectList extends React.Component {
    render() {
        return (
            <Container>
                <Grid container spacing={16}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Project />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Project />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Project />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Project />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default ProjectList;