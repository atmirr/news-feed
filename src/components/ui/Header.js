import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';


export const Header = () => (
    <AppBar position="sticky">
        <Toolbar>
            <h2>Apple News</h2>
        </Toolbar>
    </AppBar>
)