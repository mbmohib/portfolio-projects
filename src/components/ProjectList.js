import React from 'react';
import Container from './Container';
import Project from '../components/Project';
import { Row, Col } from 'antd';

class ProjectList extends React.Component {
    render() {
        return (
            <Container>
                <Row gutter={24}>
                    <Col xs={24} sm={12} md={8}>
                        <Project />
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Project />
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Project />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ProjectList;