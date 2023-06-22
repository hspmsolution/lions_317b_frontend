import { Avatar, Box, Grid, Paper, styled, Typography } from "@mui/material";
import "./DGTeam.css";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function DGTeam() {
  return (
    <>
      <div className="aboutGov">
        <CustomizedBreadcrumbs
          label={"About"}
          subLabel={"DG Team"}
        />
        <Grid
          container
          spacing={5}
          sx={{
            justifyContent: "center",
            backgroundImage: 'url("/assets/img/aboutbg03.png")',
            backgroundSize: "cover",
            padding: { xs: "3rem 0.5rem", sm: "3rem 2rem", lg: "3rem 2rem" },
          }}>
          <Grid
            item
            xs={12}
            className="gov">
            <Item
              sx={{ padding: { xs: "1rem", sm: "3rem" } }}
              className="item aboutGovContainer">
              <Avatar
                alt="Remy Sharp"
                src={"/assets/dist_img/goa-gov.jpg"}
                sx={{ width: "300px", height: "220px", display: "flex" }}
                className="about-image"
                variant="rounded"
              />
              <Typography
                variant="h4"
                gutterBottom
                className="itemTitle">
                PMJF LION JOSE FRANCISCO ERLE DE SOUSA e BRITO
              </Typography>
              <Typography variant="h5">
                Lions Clubs International District Governor 2023-24 (District
                317 B)
              </Typography>
              Dear Members and Sevayatris,
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab
              sint animi molestias voluptate ipsum distinctio? Quasi nam facilis
              blanditiis veritatis earum, fugiat tempora, nihil voluptatum enim
              beatae, pariatur dolore! Nemo magnam totam ratione, perferendis
              repudiandae vitae minus labore, velit possimus, ipsam suscipit.
              Odit eaque quibusdam doloremque deserunt commodi tenetur
              aspernatur! Incidunt optio totam veniam cupiditate nulla molestias
              velit sequi. Inventore, atque, corrupti officia provident iste,
              natus perferendis delectus hic at a excepturi et? Quis numquam
              necessitatibus labore dignissimos et ad aspernatur, aut vero earum
              vitae omnis eveniet consequatur ratione? Soluta in labore harum
              deserunt cumque sunt, nisi, magnam, laboriosam cupiditate
              consequatur eius esse aspernatur obcaecati totam minima modi
              dignissimos sint? Praesentium accusantium ratione iure commodi
              error quasi amet in? Nobis fugit culpa vero mollitia soluta modi
              est, facilis quas odit fuga, unde aut consequatur ea iste porro!
              Ipsam, nesciunt inventore. Sunt nemo cumque odit cupiditate quia
              dicta. Eaque, quisquam. Non quas natus voluptates voluptate modi
              inventore! Quo quod sapiente commodi, quia obcaecati provident
              eligendi nam dicta explicabo eaque natus maiores quam quasi rem ab
              quaerat aspernatur excepturi! Debitis, veritatis? Ex quasi et
              neque aliquam veritatis accusamus beatae quia pariatur dolor
              minus, vel illum sint cumque eveniet est tempore delectus quo
              provident eum vitae facere dolores! Ut animi modi illo! Sapiente,
              reprehenderit aperiam nostrum ab reiciendis aspernatur quibusdam
              provident amet! Laudantium dignissimos quibusdam molestias
              temporibus eos harum consectetur perspiciatis praesentium odit
              vero culpa similique adipisci blanditiis, excepturi nemo! Quas,
              pariatur! Vel repellendus velit voluptatum rerum unde numquam
              harum ad doloribus maiores eligendi facere quae, dolore ex
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            className="vcGov1">
            <Item
              sx={{ padding: { xs: "1rem", sm: "3rem" } }}
              className="item aboutGovContainer">
              <Avatar
                alt="Remy Sharp"
                src={"/assets/dist_img/03_C M Narayana Swamy.jpeg"}
                sx={{ width: "300px", height: "220px", display: "flex" }}
                className="about-image"
                variant="rounded"
              />
              <Typography
                variant="h4"
                gutterBottom
                className="itemTitle">
                C M Narayana Swamy, MJF
              </Typography>
              <Typography
                variant="h5"
                gutterBottom>
                1st Vice District Governor
              </Typography>
              Dear Lion Friends,
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab
              sint animi molestias voluptate ipsum distinctio? Quasi nam facilis
              blanditiis veritatis earum, fugiat tempora, nihil voluptatum enim
              beatae, pariatur dolore! Nemo magnam totam ratione, perferendis
              repudiandae vitae minus labore, velit possimus, ipsam suscipit.
              Odit eaque quibusdam doloremque deserunt commodi tenetur
              aspernatur! Incidunt optio totam veniam cupiditate nulla molestias
              velit sequi. Inventore, atque, corrupti officia provident iste,
              natus perferendis delectus hic at a excepturi et? Quis numquam
              necessitatibus labore dignissimos et ad aspernatur, aut vero earum
              vitae omnis eveniet consequatur ratione? Soluta in labore harum
              deserunt cumque sunt, nisi, magnam, laboriosam cupiditate
              consequatur eius esse aspernatur obcaecati totam minima modi
              dignissimos sint? Praesentium accusantium ratione iure commodi
              error quasi amet in? Nobis fugit culpa vero mollitia soluta modi
              est, facilis quas odit fuga, unde aut consequatur ea iste porro!
              Ipsam, nesciunt inventore. Sunt nemo cumque odit cupiditate quia
              dicta. Eaque, quisquam. Non quas natus voluptates voluptate modi
              inventore! Quo quod sapiente commodi, quia obcaecati provident
              eligendi nam dicta explicabo eaque natus maiores quam quasi rem ab
              quaerat aspernatur excepturi! Debitis, veritatis? Ex quasi et
              neque aliquam veritatis accusamus beatae quia pariatur dolor
              minus, vel illum sint cumque eveniet est tempore delectus quo
              provident eum vitae facere dolores! Ut animi modi illo! Sapiente,
              reprehenderit aperiam nostrum ab reiciendis aspernatur quibusdam
              provident amet! Laudantium dignissimos quibusdam molestias
              temporibus eos harum consectetur perspiciatis praesentium odit
              vero culpa similique adipisci blanditiis, excepturi nemo! Quas,
              pariatur! Vel repellendus velit voluptatum rerum unde numquam
              harum ad doloribus maiores eligendi facere quae, dolore ex
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            className="vcGov2">
            <Item
              sx={{ padding: { xs: "1rem", sm: "3rem" } }}
              className="item aboutGovContainer">
              <Avatar
                alt="Remy Sharp"
                src={"/assets/dist_img/04_Akash Suvarna.JPG"}
                sx={{ width: "300px", height: "220px", display: "flex" }}
                className="about-image"
                variant="rounded"
              />
              <Typography
                variant="h4"
                gutterBottom
                className="itemTitle">
                Akash A Suvarna, PMJF
              </Typography>
              <Typography
                variant="h5"
                gutterBottom>
                2nd Vice District Governor
              </Typography>
              Dear Ever Serving Leaders,
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ab
              sint animi molestias voluptate ipsum distinctio? Quasi nam facilis
              blanditiis veritatis earum, fugiat tempora, nihil voluptatum enim
              beatae, pariatur dolore! Nemo magnam totam ratione, perferendis
              repudiandae vitae minus labore, velit possimus, ipsam suscipit.
              Odit eaque quibusdam doloremque deserunt commodi tenetur
              aspernatur! Incidunt optio totam veniam cupiditate nulla molestias
              velit sequi. Inventore, atque, corrupti officia provident iste,
              natus perferendis delectus hic at a excepturi et? Quis numquam
              necessitatibus labore dignissimos et ad aspernatur, aut vero earum
              vitae omnis eveniet consequatur ratione? Soluta in labore harum
              deserunt cumque sunt, nisi, magnam, laboriosam cupiditate
              consequatur eius esse aspernatur obcaecati totam minima modi
              dignissimos sint? Praesentium accusantium ratione iure commodi
              error quasi amet in? Nobis fugit culpa vero mollitia soluta modi
              est, facilis quas odit fuga, unde aut consequatur ea iste porro!
              Ipsam, nesciunt inventore. Sunt nemo cumque odit cupiditate quia
              dicta. Eaque, quisquam. Non quas natus voluptates voluptate modi
              inventore! Quo quod sapiente commodi, quia obcaecati provident
              eligendi nam dicta explicabo eaque natus maiores quam quasi rem ab
              quaerat aspernatur excepturi! Debitis, veritatis? Ex quasi et
              neque aliquam veritatis accusamus beatae quia pariatur dolor
              minus, vel illum sint cumque eveniet est tempore delectus quo
              provident eum vitae facere dolores! Ut animi modi illo! Sapiente,
              reprehenderit aperiam nostrum ab reiciendis aspernatur quibusdam
              provident amet! Laudantium dignissimos quibusdam molestias
              temporibus eos harum consectetur perspiciatis praesentium odit
              vero culpa similique adipisci blanditiis, excepturi nemo! Quas,
              pariatur! Vel repellendus velit voluptatum rerum unde numquam
              harum ad doloribus maiores eligendi facere quae, dolore ex
            </Item>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default DGTeam;
