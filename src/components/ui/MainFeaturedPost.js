import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles/index";

const styles = theme => ({
    mainFeaturedPost: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing.unit * 4,
        marginTop: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
    }
})


const MainFeaturedPost = ({classes, title, description}) => (
    <div>
        <Paper className={classes.mainFeaturedPost}>
            <Grid container>
                <Grid item md={6}>
                    <div className={classes.mainFeaturedPostContent}>
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            {description}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    </div>
)

export default withStyles(styles)(MainFeaturedPost)