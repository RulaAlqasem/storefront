import React from 'react';
import './Products.scss';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, switchProducts } from '../store/action';


const useStyles = makeStyles({
  root: {
    maxWidth: 150,
  },
  media: {
    height: 150,
  },
});

const Products = (props) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const classes = useStyles();
  return (
    <div className="products">
      <h2>{state.categories.activeCategory.displayName}</h2>
      <h2 className="description">{state.categories.activeCategory.description}</h2>
      {state.products.products.map((product, i) => {
        return (
          <Card key={i} className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/logo192.png"
                title="Product Picture"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  ${product.price}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  IN STOCK: {product.inventory}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => dispatch(addToCart(product))}>
                ADD TO CART
              </Button>
              <Button size="small" color="primary">
                VIEW DETAILS
              </Button>
            </CardActions>
          </Card>
        )
      })}
    </div>
  )
}


export default Products;