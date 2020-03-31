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


function getColor(index) {
  const colorList = [
    colors.lightBlue, colors.amber, colors.pink,
  ];
  return colorList[index][500];

}


function App() {
  const classes = useStyles();
  const [response, setResponse] = useState({
    data: {
      graphs: [undefined , undefined, undefined],
      cards: [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
    },
  });
  useInterval(() => {
    const url = 'http://localhost:3001/api/rpi_data/data';
    fetch(url)
      .then(response => response.json())
      .then(setResponse);
  }, 200);

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
              <Grid item>
                <Paper className={classes.graphs}>
                  <Chart title="PRESSURE mbar" data={response.data.graphs[0]} graphColor={getColor(0)}/>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.graphs}>
                  <Chart title="FLOW L/s" data={response.data.graphs[1]} graphColor={getColor(1)}/>
                </Paper>
              </Grid>
              <Grid item>
                <Paper className={classes.graphs}>
                  <Chart title="VOLUME mL" data={response.data.graphs[2]} graphColor={getColor(2)}/>
                </Paper>
              </Grid>
            </Grid>
            <Grid container item xs={4} spacing={1}>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <DataCard
                    title="Ppeak"
                    unit="cmh²0"
                    value={response.data.cards.ppeak}
                    textColor={getColor(0)}
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <DataCard
                    title="PEEP"
                    unit="cmh²0"
                    value={response.data.cards.peep}
                    textColor={getColor(0)}
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <DataCard
                    title="Pmean"
                    unit="cmh²0"
                    value={response.data.cards.pmean}
                    textColor={getColor(0)}
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <DataCard
                    title="RR"
                    unit="r/min"
                    value={response.data.cards.rr}
                    textColor={getColor(1)}
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <DataCard
                    title="O² conc."
                    unit="%"
                    value={response.data.cards.o2conc}
                    textColor={getColor(1)}
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <DataCard
                    title="VTe"
                    unit="mL"
                    value={response.data.cards.vte}
                    textColor={getColor(2)}
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <DataCard
                    title="I:E ratio"
                    unit=""
                    value={response.data.cards.ie_ratio}
                    textColor={getColor(2)}
                  />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <DataCard
                    title="MVe"
                    unit="L/min"
                    value={response.data.cards.mve}
                    textColor={getColor(2)}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
