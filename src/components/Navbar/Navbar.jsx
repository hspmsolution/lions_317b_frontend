import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useStyles from './Styles';
import PopupMenu from './PopupMenu';
import {Link} from 'react-router-dom';

const drawerWidth = 240;

const myNav = [
    {title: "Home"},
    {
        title: "About",
        menuItems: ['Governor', 'DG Team', 'About District 317F', 'Organization Chart']
    },
    {title: "Activities"},
    {
        title: "Membership",
        menuItems: ['Member Directory', 'Business Directory', 'Download Member Data']
    },
    {
        title: "Resources",
        menuItems: ['News', 'Gallery', 'Global Priorities', 'Download Resources']
    },
    {title: "Login"},
    {title: "My LCI"},
];

function Navbar(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const classes = useStyles();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
}

Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Navbar;