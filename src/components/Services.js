import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid, Button, Typography, useMediaQuery } from '@material-ui/core';

import ButtonArrow from '../components/ui/ButtonArrow';
import customSoftware from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 45,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  servicesContainer: {
    marginTop: '10em',
    [theme.breakpoints.down('sm')]: {
      padding: '25px',
    },
  },
  specialText: {
    color: theme.palette.common.orange,
    fontFamily: 'Pacifico',
  },
  subtitle: {
    marginBottom: '1em',
  },
}));

export default function Services(props) {
  const { setValue, setSelectedIndex } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction='column'>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : '5em',
          marginTop: matchesSM ? '1em' : '2em',
        }}
        gutterBottom
      >
        <Typography align={matchesSM ? 'center' : undefined} variant='h2'>
          Services
        </Typography>
      </Grid>
      {/* iOS/Android Block */}
      <Grid item>
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.servicesContainer}
          style={{ marginTop: matchesSM ? '1em' : '5em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant='h4'>iOS/Android App Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant='subtitle1'>
              Integrate your web experience or create a standalone app{' '}
              {matchesSM ? null : <br />}with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to='/mobileapps'
              variant='outlined'
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              src={mobileAppsIcon}
              alt='mobile phone icon'
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
      {/* Custom Software Block */}
      <Grid item>
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : undefined}
          className={classes.servicesContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant='h4'>Custom Software Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant='subtitle1'>
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to='/customsoftware'
              variant='outlined'
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              className={classes.icon}
              src={customSoftware}
              alt='custom software icon'
            />
          </Grid>
        </Grid>
      </Grid>
      {/* Website Block */}
      <Grid item>
        <Grid
          container
          direction='row'
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.servicesContainer}
          style={{ marginBottom: '10em' }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
              width: matchesSM ? undefined : '35em',
            }}
          >
            <Typography variant='h4'>Website Development</Typography>
            <Typography variant='subtitle1' className={classes.subtitle}>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant='subtitle1'>
              Optimize for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to='/websites'
              variant='outlined'
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
            <img
              className={classes.icon}
              src={websiteIcon}
              alt='website icon'
              width='250em'
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
