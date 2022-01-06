import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
  const cardsMap = [
    {
      title: 'Infected',
      text: 'Number of active cases of covid-19',
      style: 'infected',
      value: confirmed.value,
    },
    {
      title: 'Recovered',
      text: 'Number of recovered cases of covid-19',
      style: 'recovered',
      value: recovered.value,
    },
    {
      title: 'Deaths',
      text: 'Number of Deaths due to covid-19',
      style: 'deaths',
      value: deaths.value,
    },
  ];
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {cardsMap.map((cardData, i) => (
          <Grid
            item
            xs={12}
            md={3}
            component={Card}
            className={cx(styles.card, styles[cardData.style])}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {cardData.title}
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={cardData.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">{cardData.text}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
