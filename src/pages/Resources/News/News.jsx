import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Pagination } from "@mui/material";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { topNews } from "../../../actions/news";
import useStyles from "./Styles";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import CommonCard from "../../../components/CommonCard/CommonCard";
import { API_URL } from "../../../api";

export default function News() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const newsData = useSelector((state) => state.news.topNews?.data || []);
  const totalPages = useSelector(
    (state) => state.news.topNews?.totalPages || 1
  );
  const currentPage = useSelector(
    (state) => state.news.topNews?.currentPage || 1
  );

  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get("page")) || currentPage;

  const handleChangePage = (event, newPage) => {
    queryParams.set("page", newPage);
    navigate(`${location.pathname}?${queryParams.toString()}`);
    dispatch(topNews(newPage));
  };

  useEffect(() => {
    dispatch(topNews(page));
  }, [dispatch, page]);

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('/assets/img/newbg02.png')",
          backgroundAttachment: "fixed",
          animation: " animatedBackground 20s linear infinite;",
          "@keyframes animatedBackground": {
            "0%": {
              backgroundPosition: " 0 0",
            },

            "100%": {
              backgroundPosition: "100% 0",
            },
          },
        }}>
        <CustomizedBreadcrumbs
          label={"Resources"}
          subLabel={"News"}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            padding: { xs: "3rem 0.5rem", sm: "3rem 2rem", lg: "3rem 2rem" },
          }}>
          <Grid
            container
            spacing={5}
            sx={{
              display: "flex",
            }}>
            {newsData.map((item, index) => (
              <>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  key={index}>
                  <Paper
                    elevation={3}
                    sx={{
                      borderRadius: "1rem",
                      backgroundColor: "rgba(29, 60, 122, 0.85)",
                      color: "white",
                      boxShadow:
                        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                    }}>
                    <CommonCard
                      type="news"
                      images={`${API_URL + item?.image}`}
                      srcSet={`${API_URL + item?.image}`}
                      alt={item.newsTitle}
                      heading={item.newsTitle}
                      description={item.description}
                      date={item?.date?.slice(0, 10)}
                      newsPaperLink={item.newsPaperLink}
                    />
                  </Paper>
                </Grid>
              </>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: "2rem 1rem",
          }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChangePage}
            showFirstButton
            showLastButton
            variant="outlined"
            color="primary"
            className={classes.newsPagination}
          />
        </Box>
      </Box>
    </>
  );
}
