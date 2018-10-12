import React, {Component} from 'react'
import {Header} from "./components/ui/Header";
import AllPosts from "./components/container/AllPostsContainer";
import {loadNewsData} from "./actions";
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    }
})

class App extends Component {

    componentWillMount() {
        loadNewsData()
    }

    render() {
        const {classes} = this.props

        return (
            <div className={classes.layout}>
                <Header />
                <AllPosts />
            </div>
        )
    }
}

export default withStyles(styles)(App)