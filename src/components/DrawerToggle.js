import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import Zoom from '@material-ui/core/Zoom'
import Button from '@material-ui/core/Button'

const ToggleButton = styled.div`
    position: fixed;
    top: 50%;
    right: 0;
`

const DrawerToggle = props => (
    <ToggleButton>
        <Zoom key="primary" in={props.show} unmountOnExit>
            <Button onClick={props.toggleDrawer} variant="fab" color="primary">
                <MenuIcon />
            </Button>
        </Zoom>
    </ToggleButton>
)

export default DrawerToggle
