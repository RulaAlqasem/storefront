import { AppBar, Typography, Toolbar, Link, Grid } from '@material-ui/core/';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/action';

function Header() {
  const state = useSelector(state => state)
  return (
    <AppBar position="relative" >
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="h5" color="inherit" noWrap>

            OUR STORE

          </Typography>
          <Typography variant="h5" color="inherit" noWrap>
            cart({state.cart.count})
          </Typography>

        </Grid>
      </Toolbar>

    </AppBar>
  );
}

export default Header;