import React from 'react';
// import './Footer.scss';

import { AppBar, Typography, Toolbar, Link, Grid } from '@material-ui/core/';

function Footer() {
  return (
    <AppBar position="relative" >
      <Toolbar >
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="h5" color="inherit" noWrap>

            {'Copyright © '}2021

          </Typography>

        </Grid>
      </Toolbar>

    </AppBar>
  )
}

export default Footer;