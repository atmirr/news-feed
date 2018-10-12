import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Hidden from "@material-ui/core/Hidden";
import CardMedia from "@material-ui/core/CardMedia";
import {withStyles} from "@material-ui/core/styles/index";

const styles = () => ({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    }
})


const SubFeaturedPost = ({classes, title, description, dateCreated, thumbnailUrl}) => (
    <Grid item xs={12} md={6}>
        <Card className={classes.card}>
            <div className={classes.cardDetails}>
                <CardContent>
                    <Typography component="h2" variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {dateCreated}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        {description}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                        Continue reading...
                    </Typography>
                </CardContent>
            </div>
            <Hidden xsDown>
                <CardMedia
                    className={classes.cardMedia}
                    image={thumbnailUrl}
                    title="Image title"
                />
            </Hidden>
        </Card>
    </Grid>
)

export default withStyles(styles)(SubFeaturedPost)