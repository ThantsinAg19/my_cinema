import { AppBar, Grid } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import {
  HomePage,
  SideBar,
} from './container'
import Mypagination from './pages/home/pagination';


function App() {
  const dispatch = useDispatch();

  const {
    page,
    total_pages,
  } = useSelector(state=> state?.movie)

  return (
    <div className="App">
      <AppBar position='sticky' style={{
        backgroundColor: 'primary'
      }}>
        <h2>
          My Cinema
        </h2>
      </AppBar>
      <main>
        <Mypagination
          current_page={page}
          total_pages={total_pages}
          dispatch={dispatch}
        />
        <Grid
          container
          spacing={1}
          justifyContent='space-between'
        > <Grid item xs={12} sm={12} md={2} lg={2} xl={2}>
            <SideBar />
          </Grid>
          <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
            <HomePage />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default App;