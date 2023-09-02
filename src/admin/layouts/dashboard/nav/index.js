import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { API_URL } from "../../../../api";
// @mui
import { styled, alpha } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import {
  Box,
  Link,
  Button,
  Drawer,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
// mock
// import account from "../../../_mock/account";
// hooks
import useResponsive from "../../../hooks/useResponsive";
// components
import Logo from "../../../components/logo";
import Scrollbar from "../../../components/scrollbar";
import NavSection from "../../../components/nav-section/NavSection";
//

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const StyledAccount = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav, ishomeNav = false }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const memberData = useSelector((state) => state.auth.authData);
  const isAdmin = useSelector((state) => state.auth.admin);
  const isDesktop = useResponsive("up", "lg");
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
        backgroundColor: "white",
      }}
    >
      <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
        <Logo />
        {ishomeNav && (
          <>
            <Button
              size="medium"
              sx={{
                color: "#151515",
                "&:hover": {
                  backgroundColor: "rgba(29, 60, 122, 0.85)",
                },
              }}
              onClick={() => {
                isAdmin ? navigate("/dashboard/profile") : navigate("/login");
              }}
            >
              {isAdmin ? "My Profile" : "Login"}
            </Button>
            <Button
              href="https://account.lionsclubs.org/account/login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dlci-home-app%26redirect_uri%3Dhttps%253A%252F%252Fmyapps.lionsclubs.org%252Fauth-callback%26response_type%3Did_token%2520token%26scope%3Dopenid%2520profile%2520lci-userapi%2520lci-mobileapi%2520lci-reporting%26state%3Daf66166248ad43ef83b1b03061f580d7%26nonce%3Da0c87692e26641f39278bf8b66824998"
              target="_blank"
              size="medium"
              sx={{
                color: "#151515",
                "&:hover": {
                  backgroundColor: "rgba(29, 60, 122, 0.85)",
                },
              }}
            >
              {"My LCI"}
            </Button>
          </>
        )}
      </Box>
      <Divider variant="middle" />
      {!ishomeNav && (
        <Box
          sx={{
            mb: 5,
            mx: 2.5,
            backgroundColor: "white",
            borderRadius: "1rem",
          }}
        >
          <Link underline="none">
            <StyledAccount>
              <Avatar
                src={
                  memberData?.picture
                    ? API_URL + memberData.picture
                    : memberData?.firstName.charAt(0)
                }
                alt={memberData?.firstName.charAt(0)}
              />

              <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle2" sx={{ color: "#05B0E9" }}>
                  {memberData?.firstName + " " + memberData?.lastName}
                </Typography>

                {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {memberData?.title}
              </Typography>

              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {memberData?.clubName}
              </Typography> */}
              </Box>
            </StyledAccount>
          </Link>
        </Box>
      )}

      <NavSection ishomeNav={ishomeNav}/>

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop && !ishomeNav? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              backgroundColor: "#FFFFFF",
              borderRightStyle: "dashed",
              color: "#b4880b",
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
