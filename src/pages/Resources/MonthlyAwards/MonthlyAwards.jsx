import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector,useDispatch} from "react-redux";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import Gallery from "../../../components/Gallery/Gallery";
import { getAwards } from "../../../actions/activity";


export default function MonthlyAwards() {
  const dispatch = useDispatch();
  const awards = useSelector((state) => state.activity.awards);


  useEffect(()=>{
    dispatch(getAwards())
   },[])

  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "url('https://lions317b.org/api/static/assets/1688063886568-background.png')",
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
          subLabel={"Monthly Awards"}
        />
        <Gallery data={awards}/>
      </Box>
    </>
  );
}
