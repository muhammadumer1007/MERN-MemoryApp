import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import { BsPencil, BsHandThumbsUpFill } from 'react-icons/bs'


import useStyles from './Styles';

const Post = ({ posts }) => {
    const classes = useStyles();
    let { editpost, deletePost } = useContext(GlobalContext)

    return (
        <div className="col-6 mt-3">
            <Card className={classes.card}>
                <CardMedia className={classes.media} image={posts.selectedFiles || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title='' />
                <div className={classes.overlay}>
                    <Typography variant="h6">{posts.creator}</Typography>
                    <Typography variant="body2">{posts.createdAt.slice(0, 10)}</Typography>
                </div>
                <div className={classes.overlay2}>
                    <Button style={{ color: 'white' }} size="small" onClick={() => editpost(posts._id)} ><BsPencil fontSize="default" /></Button>
                </div>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{posts.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5" component="h2">{posts.title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{posts.description}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Button size="small" color="primary" ><BsHandThumbsUpFill fontSize="small" /> Like  </Button>
                    <Button size="small" color="primary" onClick={() => deletePost(posts._id)}> Delete</Button>
                </CardActions>
            </Card >

        </div >
    );
};

export default Post;