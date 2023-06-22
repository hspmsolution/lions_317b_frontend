import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import useStyles from "./Styles";
import PopupMenu from "./PopupMenu";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const drawerWidth = 240;

const myNav = [
  { title: "Home" },
  {
    title: "About",
    menuItems: [
      "Governor",
      "DG Team",
      "About District 317B",
      "Organization Chart",
    ],
  },
  { title: "Activities" },
  {
    title: "Membership",
    menuItems: [
      // "Organization Data",
      "Member Directory",
      "Business Directory",
      "Download Member Data",
    ],
  },
  {
    title: "Resources",
    menuItems: ["News", "Gallery", "Global Priorities", "Download Resources"],
  },
  // { title: "Login" },
  // { title: "My LCI" },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const isAdmin = useSelector((state) => state.auth.admin);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // const memberLogin = () => {
  //   {
  //     isAdmin ? navigate("/dashboard/profile") : navigate("/login");
  //   }
  // };

  const memberLogin = (e) => {
    e.preventDefault();
    const url = isAdmin ? "/dashboard/profile" : "/login";
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}>
      {/* <Avatar
        alt="Remy Sharp"
        src={"/assets/img/logo2.png"}
        sx={{
          width: 56,
          height: 56,
          margin: "5px auto",
        }}
        className={classes.clubLogo}
      /> */}

      <Box
        sx={{
          display: {
            // xs: "none",
            sm: "flex",
            gap: "1rem",
            padding: "1rem 0",
          },
        }}>
        <Button
          size="medium"
          sx={{
            color: "#151515",
            "&:hover": {
              backgroundColor: "rgba(29, 60, 122, 0.85)",
            },
          }}
          className={classes.loginButton}
          onClick={memberLogin}>
          {isAdmin ? "My Profile" : "Login"}
        </Button>
        <Button
          size="medium"
          sx={{
            color: "#151515",

            "&:hover": {
              backgroundColor: "rgba(29, 60, 122, 0.85)",
            },
          }}
          className={classes.loginButton}>
          My LCI
        </Button>
      </Box>

      <Divider variant="middle" />
      <List>
        {myNav.map((item, index) => (
          <ListItem
            key={index}
            disablePadding>
            <Button
              key={index}
              sx={{ color: "#565656" }}
              className={classes.drawerButton}>
              <PopupMenu
                title={item.title}
                menuItems={item.menuItems}
              />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        position: "absolute",
      }}>
      <CssBaseline />
      <AppBar
        component="nav"
        className={classes.mainNav}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}>
          <IconButton
            color="#7c7c7c"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: "auto",
              display: { sm: "none" },
            }}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Link to={"/"}>
              <Avatar
                alt="Remy Sharp"
                src="/assets/img/logo.png"
                sx={{
                  width: { xs: 50, md: 80 },
                  height: { xs: 50, md: 80 },
                  padding: "5px",
                }}
              />
            </Link>
            <Link to={"/"}>
              <Avatar
                alt="Remy Sharp"
                src="/assets/img/logo2.png"
                sx={{
                  width: { xs: 50, md: 80 },
                  height: { xs: 50, md: 80 },
                  padding: "5px",
                }}
                className={classes.clubLogo}
              />
            </Link>
          </Box>
          <Box
            className={classes.myNavPaper}
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}>
            {myNav.map((item, index) => (
              <Button
                key={index}
                sx={{
                  color: "#151515",
                  margin: "0 6px",
                  // width: "130px",
                  "&:hover": {
                    backgroundColor: "rgba(29, 60, 122, 0.85)",
                  },
                }}
                className={classes.drawerButton}>
                <PopupMenu
                  title={item.title}
                  menuItems={item.menuItems}
                />
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                gap: "1rem",
              },
            }}>
            <Button
              size="medium"
              sx={{
                color: "#151515",
                "&:hover": {
                  backgroundColor: "rgba(29, 60, 122, 0.85)",
                },
              }}
              className={classes.loginButton}
              onClick={memberLogin}>
              {isAdmin ? "My Profile" : "Login"}
            </Button>
            <Button
              size="medium"
              sx={{
                color: "#151515",

                "&:hover": {
                  backgroundColor: "rgba(29, 60, 122, 0.85)",
                },
              }}
              className={classes.loginButton}>
              My LCI
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
