import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import Gallery from "../../../components/Gallery/Gallery";


export default function GalleryR() {

  const images = useSelector((state) => state.client.galleryImages);
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
          subLabel={"Gallery"}
        />
        <Gallery data={images}/>
      </Box>
    </>
  );
}
