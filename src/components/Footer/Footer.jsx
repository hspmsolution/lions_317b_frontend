import {
  Avatar,
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import useStyles from "./Styles";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  faCube,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { superadmin_url } from "../../api";

const quickLinks = [
  {
    linkName: "Activity",
    path: "/activities",
  },
  {
    linkName: "Gallery",
    path: "/resources/gallery",
  },
  {
    linkName: "Contact Us",
    path: "/contact-us",
  },
  {
    linkName: "Privacy Policies",
    path: "/privacypolicy",
  },
  {
    linkName: "Terms & Conditions",
    path: "/termsandconditions",
  },
];
const contact = [
  {
    icon: <PhoneIcon />,
    value: "Ashwinikumar Karpe: - +91 89991 358 35",
  },
  {
    icon: <PhoneIcon />,
    value: "Sachin Kale: - +91 9823169652",
  },
  {
    icon: <FontAwesomeIcon icon={faEnvelope} />,
    value: "lionsdistrict317b@gmail.com",
  },
  {
    icon: <FontAwesomeIcon icon={faLocationDot} />,
    value: "House No 837, Casa Dos Reis, Candolim Beach, North Goa",
  },
];
const socialIcos = [
  {
    icon: <FontAwesomeIcon icon={faFacebookF} />,
    link: "https://www.facebook.com/profile.php?id=61550327861925&mibextid=ZbWKwL",
  },
  {
    icon: <FontAwesomeIcon icon={faTwitter} />,
    link: "https://twitter.com/lcbpd",
  },
  {
    icon: <FontAwesomeIcon icon={faInstagram} />,
    link: "https://instagram.com/lions317b?igshid=NTc4MTIwNjQ2YQ==",
  },
  {
    icon: <FontAwesomeIcon icon={faYoutube} />,
    link: "https://www.youtube.com/channel/UCPS2Iv4WWFni-BcLSMXOT5g",
  },
];

function Footer() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        bottom: 0,
        // backgroundColor: "#041b3b",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
      className="footer-background">
      <Box
        sx={{
          backgroundColor: "rgba(4,27,59,0.3)",
          color: "#fff",
        }}
        className={classes.footer}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", sm: "space-evenly" },
            alignItems: "flex-start",
            width: "100%",
          }}>
          <nav
            aria-label="secondary mailbox folders"
            className="footer-nav01">
            <Typography
              variant="h6"
              sx={{ pt: "2rem", pl: "0.8rem", align: "center" }}>
              Quick Links
            </Typography>
            <List disablePadding>
              {quickLinks.map((item, i) => (
                <ListItem
                  disablePadding
                  key={i}
                  onClick={() => {
                    navigate(item.path);
                  }}>
                  <ListItemButton
                    sx={{
                      py: "5px",
                      borderRadius: "1rem",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        color: "black",
                      },
                    }}
                    disablePadding>
                    <ListItemText primary={item.linkName} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
          <Box className="footorXS">
            <Avatar
              alt="Remy Sharp"
              src={
                "https://lions317b.org/api/static/assets/1688062360350-logo2.png"
              }
              sx={{
                width: { xs: "130px", lg: "180px" },
                height: { xs: "130px", lg: "180px" },
                borderRadius: "0",
                margin: "1rem 2rem",
                display: { xs: "block", sm: "block" },
              }}
              className="footer-logo"
            />
          </Box>
          <nav
            aria-label="secondary mailbox folders"
            className="footer-nav02">
            <Typography
              variant="h6"
              sx={{ pt: "2rem", pl: "0.8rem" }}>
              Contact
            </Typography>
            <List disablePadding>
              {contact.map((item, i) => (
                <ListItem
                  disablePadding
                  key={i}>
                  <ListItemButton>
                    <ListItemIcon sx={{ minWidth: "30px", color: "white" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.value} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "rgba(4,27,59,0.3)",
          color: "#fff",
        }}>
        <Container
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: "space-evenly",
            padding: "10px",
          }}>
          <Box className={classes.socialIcons}>
            {socialIcos.map((item, index) => (
              <Link
                to={item.link}
                target="_blank"
                key={index}>
                {item.icon}
              </Link>
            ))}
          </Box>
        </Container>
        <Container sx={{ textAlign: "center", mb: "1.5rem" }}>
          <Typography variant="subtitle2">
            Copyright 2023 © All rights reserved. | Designed & Developed by{" "}
            <a href={superadmin_url}>
              <FontAwesomeIcon icon={faCube} /> <b>HSPM Solutions LLP.</b>
            </a>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
