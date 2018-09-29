import React from 'react'
import styled from 'styled-components'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Skills from './Skills'

const DrawerWrapper = styled.div`
    padding: ${props => props.theme.mediumSpace};
`

const ButtonWrapper = styled.div`
    padding-bottom: ${props => props.theme.mediumSpace};

    button {
        :last-child {
            margin-left: ${props => props.theme.smallSpace};
        }
    }
`

const SelectedSkills = props => (
    <Drawer
        variant="persistent"
        anchor="bottom"
        open={props.open}
        anchor="right"
    >
        <DrawerWrapper>
            <ButtonWrapper>
                <Button onClick={props.clearAllFilterKeys} variant="contained" color="primary">
                    Clear All
                </Button>
                <Button onClick={props.toggleDrawer}>
                    Close
                </Button>
            </ButtonWrapper>

            <Divider />
            
            <Skills handleFilter={props.deleteFilter} list skills={props.skills} />
        </DrawerWrapper>
    </Drawer>
)

export default SelectedSkills
