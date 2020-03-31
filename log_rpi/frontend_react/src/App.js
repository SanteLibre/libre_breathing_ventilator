import React, {useRef, useState, useEffect} from 'react';
import {Grid, Paper, makeStyles, Container} from '@material-ui/core';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import * as colors from '@material-ui/core/colors';

import DataCard from './DataCard';
import Chart from './Chart';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#282c34',
    height: '100vh',
    maxHeight: '100vh',
    overflow: 'hidden',
  },
  parentGrid: {
    height: '100vh',
    maxHeight: '100vh',
  },
  graphs: {
    padding: theme.spacing(2),
    height: `calc((100vh/3) - ${theme.spacing(6)}px)`,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  paper: {
    height: `calc((100vh/4) - ${theme.spacing(6)}px)`,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));


function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}


function getCardTextColor(index) {
  const colorList = [
    colors.blue, colors.amber, colors.cyan,
    colors.deepOrange, colors.purple, colors.pink,
    colors.yellow, colors.green
  ];
  return colorList[index][500];

}

function getGraphColor(index) {
  const colorList = [
    colors.blue, colors.amber, colors.pink,
  ];
  return colorList[index][500];

}



function App() {
  const classes = useStyles();
  const [response, setResponse] = useState({
    data: [undefined, undefined, undefined],
  });
  useInterval(() => {
    const url = 'http://localhost:3001/api/rpi_data_simulation/data';
    fetch(url)
      .then(response => response.json())
      .then(setResponse);
  }, 1000);

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container className={classes.root} maxWidth="xl">
        <Grid className={classes.parentGrid} container justify="center" alignItems="center">
          <Grid container item spacing={1}>
            <Grid container item xs={8} direction="column" spacing={1}>
              {response.data.graphs?.map((data, index) => (
                <Grid item key={index}>
                  <Paper className={classes.graphs}>
                    <Chart title={`Chart ${index}`} data={data} graphColor={getGraphColor(index)}/>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Grid container item xs={4} spacing={1}>
              {response.data.cards?.map((data, index) => (
                <Grid item xs={6} key={{index}}>
                  <Paper className={classes.paper}>
                    <DataCard
                      title={`Card ${index}`}
                      unit="by min"
                      value={data}
                      textColor={getCardTextColor(index)}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
