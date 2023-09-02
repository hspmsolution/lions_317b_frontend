import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { NavLink as RouterLink } from "react-router-dom";
// @mui
import { Box, List, ListItemText } from "@mui/material";
//
import { StyledNavItem, StyledNavItemIcon } from "./styles";
import { config, homeNavConfig } from "./navRoutes";
// component
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

// ----------------------------------------------------------------------


NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({...other }) {
  const {ishomeNav} = other;
  const role = useSelector((state) => state.auth.role);
  const [navConfig, setNavConfig] = useState([]);

  useEffect(() => {
    //handling homepage drawer nav
    if (ishomeNav) {
      setNavConfig(homeNavConfig(role));
    }else{
      setNavConfig(config(role));
    }
   
  }, [role]);

  const handleClick = (title) => {
    setNavConfig((prevState) =>
      prevState.map((item) =>
        item.title === title ? { ...item, isClick: !item.isClick } : item
      )
    );
  };

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1, color: "white" }}>
        {navConfig.map((item) => (
          <>
            <NavItem
              key={item.title}
              item={item}
              onClick={() => {
                handleClick(item.title);
              }}
            />
            {item.subItems && item.isClick && (
              <List disablePadding sx={{ pl: 3 }}>
                {item.subItems.map((subItem) => (
                  <NavItem key={subItem.title} item={subItem} />
                ))}
              </List>
            )}
          </>
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item, onClick }) {
  const { title, path, icon, info, subItems, isClick } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      onClick={onClick}
      sx={
        !subItems && {
          "&.active": {
            color: "text.primary",
            bgcolor: "action.selected",
            fontWeight: "fontWeightBold",
          },
        }
      }
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />
      {subItems && (isClick ? <CloseIcon /> : <AddIcon />)}
      {info && info}
    </StyledNavItem>
  );
}
