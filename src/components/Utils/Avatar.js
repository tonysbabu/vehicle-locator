import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  avatar: {
    margin: 2,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

export default function ImageAvatars(props) {
  const classes = useStyles();
  const {image, size} = props;

  return (
    <Grid container justify="center" alignItems="center">
      {size === 'small'?<Avatar alt="Remy Sharp" src={image} className={classes.avatar} />
      : <Avatar alt="Remy Sharp" src={image} className={classes.bigAvatar} />}
    </Grid>
  );
}

ImageAvatars.prototype = {
    image: PropTypes.string,
    size: PropTypes.string,
}