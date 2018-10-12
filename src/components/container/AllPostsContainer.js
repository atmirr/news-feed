import React, {Component} from 'react'
import {connect} from 'react-redux'
import MainFeaturedPost from '../ui/MainFeaturedPost'
import {loadNewsData} from '../../actions'
import SubFeaturedPost from "../ui/SubFeaturedPost";
import Grid from "@material-ui/core/Grid";

class AllPostsContainer extends Component {

    componentDidMount() {
        this.props.loadNewsData()
    }


    render() {
        const {allPosts} = this.props

        return (

            <div>

                { allPosts.length ?
                    <MainFeaturedPost key={0} title={allPosts[0].title} description={allPosts[0].description} /> :
                    null
                }

                <Grid container spacing={40}>


                {allPosts.map( (post, i) =>
                        i ?
                            <SubFeaturedPost key={i}
                                             title={post.title}
                                             description={post.description}
                                             dateCreated={post.dateCreated}
                                             thumbnailUrl={post.thumbnailUrl}/>
                            : null
                        )}

                </Grid>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    allPosts: state.allPosts
})

const mapDispatchToProps = dispatch => ({

    loadNewsData() {
        dispatch(loadNewsData())
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(AllPostsContainer)