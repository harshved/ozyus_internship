import React from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grids from './Grids';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
      },
    cardWidth: {
        maxWidth: 345,
    }
  }));

const Cards = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
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
          id: `scrollable-auto-tab-${index}`,
          'aria-controls': `scrollable-auto-tabpanel-${index}`,
        };
      }
      

    return(
        <>
            <Container maxWidth="lg" style={{textAlign: "center"}}>           
            <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            centered
            >
                <Tab label="Latest Products" {...a11yProps(0)} />
                <Tab label="Most Popular Products" {...a11yProps(1)} />
                <Tab label="Hot Products" {...a11yProps(2)} />
            </Tabs>
            <Typography>Our range comprises Corrugated Box, Corrugated Packaging Boxes, Cardboard Packing Boxes, Corrugated Sheet, Liners Box, Duplex Box, etc...</Typography>
            <TabPanel value={value} index={0}>
                <Grids/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grids/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Grids/>    
            </TabPanel>
            </Container>
        </>
    )
}

export default Cards;