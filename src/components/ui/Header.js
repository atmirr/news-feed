import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from "@material-ui/core/InputBase";
import {withStyles} from "@material-ui/core/styles/index";
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';


const classes = theme => ({

    root: {
        width: '100%',
    },

    grow: {
        flexGrow: 1,
    },

     inputRoot: {
         color: 'inherit',
         width: '100%',
     },

    inputInput: {

        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
                '&:focus': {
                width: 200,
            },
        },
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        }
    },

    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

})

const Header = ({searchQuery}) => {

    let _query

    const submit = (e) => {
        e.preventDefault()
        searchQuery(_query.value)
    }


    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar>
                    <h2>News Feed</h2>
                    <div className={classes.grow}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <form onSubmit={submit}>
                            <InputBase
                                placeholder="Search…"
                                inputProps={{ref:input => _query = input}}
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                            </form>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withStyles(classes)(Header)