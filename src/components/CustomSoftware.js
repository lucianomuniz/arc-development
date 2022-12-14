import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  Hidden,
  IconButton,
  Typography,
  useMediaQuery,
} from '@material-ui/core';

import cash from '../assets/cash.svg';
import roots from '../assets/root.svg';
import lightbulb from '../assets/bulb.svg';
import stopwatch from '../assets/stopwatch.svg';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import uxAnimation from '../animations/uxAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data.json';
import documentsAnimation from '../animations/documentsAnimation/data';
import automationAnimation from '../animations/automationAnimation/data.json';

import CallToAction from './ui/CallToAction';

const useStyles = makeStyles((theme) => ({
  arrowContainer: {
    marginTop: '0.5em',
  },
  itemContainer: {
    maxWidth: '40em',
  },
  heading: {
    maxWidth: '40em',
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
}));

function CustomSoftware(props) {
  const { setValue, setSelectedIndex } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column'>
      <Grid
        item
        container
        direction='row'
        justify={matchesMD ? 'center' : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginLeft: '-3em' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to='/services'
              onClick={() => setSelectedIndex(0)}
            >
              <img src={backArrow} alt='Back to Services Page' />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction='column' className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? 'center' : undefined} variant='h2'>
              Custom Sofware Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Whether we're replacing old software or inventing new solutions,
              Arc Development is here to help your business takle technology.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Using regular commercial software leaves you with a lot of stuff
              you don't need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you rist falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='body1'
              paragraph
            >
              Our custom solutions are designed from the ground up wih your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography variant='body1' paragraph>
              We create exactly what you want, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to='/mobileapps'
              onClick={() => setSelectedIndex(2)}
            >
              <img
                src={forwardArrow}
                alt='Forward to iOS/Android App Development Page'
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction='row'
        justify='center'
        spacing={matchesSM ? 10 : undefined}
        style={{ marginTop: '15em', marginBottom: '20em' }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction='column'
          alignItems='center'
          style={{ maxWidth: '40em' }}
          md
        >
          <Grid item>
            <Typography variant='h4'>Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt='lightbulb' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          alignItems='center'
          style={{ maxWidth: '40em' }}
          md
        >
          <Grid item>
            <Typography variant='h4'>Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt='stopwatch' />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction='column'
          alignItems='center'
          style={{ maxWidth: '40em' }}
          md
        >
          <Grid item>
            <Typography variant='h4'>Save Maney</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt='cash' />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={matchesMD ? 'center' : undefined}
        direction={matchesMD ? 'column' : 'row'}
        justify='space-between'
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          style={{ marginBottom: matchesMD ? '15em' : 0 }}
          md
        >
          <Grid item container direction='column' md>
            <Grid item>
              <Typography
                variant='h4'
                align={matchesSM ? 'center' : undefined}
                gutterBottom
              >
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                Reduce Errors. Reduce Waste. Reduce Cost.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                Billions are spent annualy on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          md
        >
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography
                variant='h4'
                align={matchesSM ? 'center' : 'right'}
                gutterBottom
              >
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : 'right'}
                paragraph
              >
                Whether you're a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction='row'
        style={{ marginTop: '20em', marginBottom: '20em' }}
        className={classes.rowContainer}
      >
        <Grid item container direction='column' alignItems='center'>
          <Grid item>
            <img
              src={roots}
              alt='tree wotj rppts extemding out'
              height={matchesSM ? '300em' : '450em'}
              width={matchesSM ? '300em' : '450em'}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant='h4' align='center' gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography variant='body1' align='center' paragraph>
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant='body1' align='center' paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementarion of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems={matchesMD ? 'center' : undefined}
        direction={matchesMD ? 'column' : 'row'}
        justify='space-between'
        style={{ marginBottom: '20em' }}
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          style={{ marginBottom: matchesMD ? '15em' : 0 }}
          md
        >
          <Grid item container direction='column' md>
            <Grid item>
              <Typography
                variant='h4'
                align={matchesSM ? 'center' : undefined}
                gutterBottom
              >
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                Why wast time when you don't have to?
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : undefined}
                paragraph
              >
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={automationOptions}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          className={classes.itemContainer}
          direction={matchesSM ? 'column' : 'row'}
          md
        >
          <Grid item md>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction='column' md>
            <Grid item>
              <Typography
                variant='h4'
                align={matchesSM ? 'center' : 'right'}
                gutterBottom
              >
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : 'right'}
                paragraph
              >
                A good design that isn't usable isn't a good design.
              </Typography>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : 'right'}
                paragraph
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography
                variant='body1'
                align={matchesSM ? 'center' : 'right'}
                paragraph
              >
                By prioritizing users and the real ways they interact with
                technology we're able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
}

export default CustomSoftware;
