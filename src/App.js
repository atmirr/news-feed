import React, {Component} from 'react'
import Header from "./components/ui/Header";
import AllPosts from "./components/container/AllPostsContainer";
import {loadNewsData, loadSearchResult} from "./actions";
import {withStyles} from "@material-ui/core/styles/index";
import {connect} from 'react-redux'

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
        const {classes, searchQuery} = this.props

        return (
            <div className={classes.layout}>
                <Header searchQuery={searchQuery} />
                <AllPosts />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    searchQuery: query => loadSearchResult(query)(dispatch)
})

export default connect(null, mapDispatchToProps)( withStyles(styles)(App) )