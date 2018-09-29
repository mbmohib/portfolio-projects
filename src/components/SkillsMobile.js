import React from 'react'
import styled from 'styled-components'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import media from '../style/mediaQuery';

const SkillSelect = styled(FormControl)`
    width: 100%;
    margin-bottom: ${props => props.theme.mediumSpace} !important;
    margin-top: ${props => props.theme.smallSpace} !important;

    ${media.tablet`
        display: none !important;
    `}
`

class SkillsMobile extends React.Component {
    state = {
        value: ''
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
        this.props.handleFilter(event.target.value);
    }

    render() {
        return (
            <SkillSelect>
                <InputLabel htmlFor="demo-controlled-open-select">
                    Filter Skills
                </InputLabel>
                <Select
                    value={this.state.value}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'demo-controlled-open-select'
                    }}
                    >
                    {this.props.skills && 
                        this.props.skills.map( skill => <MenuItem key={skill} value={skill}>{skill}</MenuItem>)
                    }
                </Select>
            </SkillSelect>
        )
    }
}

export default SkillsMobile
