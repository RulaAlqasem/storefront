import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, remove } from '../store/cart';
import { Paper } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { blue } from '@material-ui/core/colors';
import CardHeader from '@material-ui/core/CardHeader';


const useStyles = makeStyles({
  root: {
    backgroundColor: "gray",
  }
});

const SimpleCart = (props) => {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    avatar: {
      backgroundColor: blue[500],
    },
  });

  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const classes = useStyles();
  if (state.cart.cart?.length > 0) {
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            {state.cart.cart.map((product, i) => {
              let count = 1
              return (
                <Paper>

                  <Typography key={i}>
                    <CardHeader
                      avatar={<Avatar className={classes.avatar}>{product.cart}

                      </Avatar>



                      }
                      title={product.name}
                    />
                  </Typography>
                  <Button variant="outlined" color="primary"
                    onClick={() => dispatch(removeFromCart(product))}>
                    -
                  </Button>

                  <Button variant="outlined" color="primary" className={classes.margin}

                    onClick={() => { dispatch(addToCart(product)); count = count + 1 }}>
                    +
                  </Button>

                  <Button variant="outlined" color="primary"
                    onClick={() => { dispatch(remove(product)); count = count - 1 }}>
                    Remove
                  </Button>

                </Paper>
              )
            }
            )}
          </CardContent>
        </CardActionArea>

      </Card >
    )
  } else {
    return (
      <div>

      </div>
    )
  }
}




export default SimpleCart;