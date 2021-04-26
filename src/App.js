import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Switch, Typography } from '@material-ui/core';

const data = {
  jobData: [
    '#0099e7',
    '#0179be',
    '#004374',
    '#112248',
    '#11163a'
  ],
  recipeData: [
    '#03a6f9',
    '#007ac5',
    '#003d72',
    '#0b214b',
    '#0b1741'
  ],
  angleData: [
    '45as15',
    '45as25',
    '45as45',
    '45as75',
    '45as110',
  ]
};

const SwitchButton = withStyles((theme) => ({
  root: {
    width: 46,
    height: 25,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 2.5,
    '&$checked': {
      transform: 'translateX(20px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#a32d85',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#a32d85',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 20,
    height: 20,
  },
  track: {
    borderRadius: 25 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    background: '#010001',
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
  },
  picker_wrapper: {
    width: '50%'
  },
  job: {
    width: '100%',
    borderTop: '1px solid #cacacd',
    borderLeft: '1px solid #cacacd',
    borderBottom: '1px solid #cacacd',
  },
  recipe: {
    width: '100%',
    borderTop: '1px solid #cacacd',
    borderRight: '1px solid #cacacd',
    borderBottom: '1px solid #cacacd',
  },
  colorPickerCell: {
    width: '100%',
    height: 50
  },
  angle: {
    width: '100%'
  },
  angleCell: {
    width: '100%',
    height: 50,
    color: '#FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    display: 'block',
    width: '100%',
    color: '#fff',
    backgroundColor: '#010001',
    paddingBottom: 5
  }
}));

export default function App() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  }
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <SwitchButton onChange={handleChange} />
        <Grid container item xs={12}>
          <Grid item xs={8}>
            <div className={classes.paper}>
              <div className={classes.picker_wrapper}>
                <Typography className={classes.title} variant="subtitle2">Job</Typography>
                <div className={classes.job} style={{ background: 'linear-gradient(180deg, #0099e7, #11163a)' }}>
                  {data.jobData.map((item, key) => <div key={key} className={classes.colorPickerCell} style={{ backgroundColor: checked ? 'transparent' : item }}></div>)}
                </div>
              </div>
              <div className={classes.picker_wrapper}>
                <Typography className={classes.title} variant="subtitle2">Recipe</Typography>
                <div className={classes.recipe} style={{ background: 'linear-gradient(180deg, #03a6f9, #0b1741)' }}>
                  {data.recipeData.map((item, key) => <div key={key} className={classes.colorPickerCell} style={{ backgroundColor: checked ? 'transparent' : item }}></div>)}
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.paper}>
              <div className={classes.angle}>
                <Typography className={classes.title} variant="subtitle2">Angle</Typography>
                {data.angleData.map((item, key) => <div key={key} className={classes.angleCell}>{item}</div>)}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}