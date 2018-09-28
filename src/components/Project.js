import React from 'react';

const Project = props => (
    <div>
        Hello {props.match.params.id}
    </div>
)

export default Project;