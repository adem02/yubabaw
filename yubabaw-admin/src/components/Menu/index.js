import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {AppBar, Tabs, Tab, Box, makeStyles, useTheme, CircularProgress } from '@material-ui/core';
import Dessin from '../Dessin';
import Logo from '../Logo';
import Design from '../WebDesign';
import './style.css'
import { FirebaseContext } from '../../firebase';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    backgroundColor: '#D6124A'
  },
  tabRoot: {
    fontFamily: "'Georgia', sans-serif"
  },
  tabTextColor: {
    color: 'white'
  },
  tabsIndicator: {
      backgroundColor: 'yellow'
  },
  progressRoot: {
    height: 'calc(100vh - 55px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Menu = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [display, setDisplay] = React.useState(null);
  const [dessins, setDessins] = React.useState(undefined);
  const [logos, setLogos] = React.useState(undefined);
  const [maquettes, setMaquettes] = React.useState(undefined);

  const { history } = props

  const firebase = useContext(FirebaseContext)

  const deleteImage = (image, imageRef) => {
    const { name, id } = image
    firebase.deleteImage(`images/${imageRef}/${name}`)
    .delete()
    .then(
      firebase.deleteImageURL(imageRef)
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted !");
      }).catch(error => {
        console.log("Error removing document: ", error);
      })
    )
    .catch(error => {
      console.log(error);
    })

    if(imageRef === "dessins") {
      const newImages = dessins.filter(image => image.name !== name)
      setDessins(newImages)
    }
    if(imageRef === "logos") {
      const newImages = logos.filter(image => image.name !== name)
      setLogos(newImages)
    }
    if(imageRef === "maquettes") {
      const newImages = maquettes.filter(image => image.name !== name)
      setMaquettes(newImages)
    }

  }

  useEffect(() => {
    const tab = ["dessins", "logos", "maquettes"]

    let listenner = firebase.auth.onAuthStateChanged(user => {
      user ? setDisplay(user) : history.push('/')
    })

      tab.map(document => {
      const tmpTab = []
      return firebase.getImageURL(document)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          document === "dessins" &&  tmpTab.push({url: doc.data().url, name: doc.data().name, id: doc.id})
          document === "logos" && tmpTab.push({url: doc.data().url, name: doc.data().name, id: doc.id})
          document === "maquettes" && tmpTab.push({url: doc.data().url, name: doc.data().name, id: doc.id})
        });
        console.log(tmpTab)
        document === "dessins" && setDessins(tmpTab)
        document === "logos" && setLogos(tmpTab)
        document === "maquettes" && setMaquettes(tmpTab)
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      })}
    )

    return () => {
      listenner()
    };
  }, [])
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return display === null ? 
  (
    <div className={classes.progressRoot}>
      <CircularProgress />
    </div>
  )
  :
  (
    <div className={classes.root}>
      <AppBar position="static" color="default" classes={{colorDefault: classes.appBar}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          classes={{indicator: classes.tabsIndicator}}
        >
          <Tab label="Dessin" {...a11yProps(0)} classes={{root: classes.tabRoot, textColorPrimary: classes.tabTextColor}}/>
          <Tab label="Logo" {...a11yProps(1)} classes={{root: classes.tabRoot, textColorPrimary: classes.tabTextColor}} />
          <Tab label="Web Design" {...a11yProps(2)} classes={{root: classes.tabRoot, textColorPrimary: classes.tabTextColor}} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Dessin dessins={dessins} deleteImage={deleteImage}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Logo logos={logos} deleteImage={deleteImage}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Design maquettes={maquettes} deleteImage={deleteImage}/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default Menu