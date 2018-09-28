import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Skills from './Skills'
import styled from 'styled-components'

const DrawerWrapper = styled.div`
    padding: ${props => props.theme.mediumSpace};
`

const ButtonWrapper = styled.div`
    padding-bottom: ${props => props.theme.mediumSpace};
`

const SelectedSkills = props => (
    <Drawer
        variant="persistent"
        anchor="bottom"
        open={props.skills.length > 0}
        anchor="right"
    >
        <DrawerWrapper>
            <ButtonWrapper>
                <Button onClick={props.clearAllFilterKeys} variant="contained" color="primary">
                    Clear All
                </Button>
                <Button>
                    Close
                </Button>
            </ButtonWrapper>

            <Divider />
            
            <Skills style={{ flexGrow: 1 }} handleFilter={props.deleteFilter} list skills={props.skills} />
        </DrawerWrapper>
    </Drawer>
)

export default SelectedSkills
