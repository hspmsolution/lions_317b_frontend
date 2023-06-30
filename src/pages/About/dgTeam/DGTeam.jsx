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
            backgroundImage:
              'url("https://lions317b.org/api/static/assets/1688064493288-aboutbg.png")',
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
                src={
                  "https://lions317b.org/api/static/assets/1688062877612-01-erle.jpg"
                }
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
              <p>
                <br />
                Dear Members and Sevayatris,
                <br />
                <br />
                Born on 5th December, a Civil Engineer by education and
                businessman by profession. Is an International Leadership &
                Motivational Trainer – Has been a visiting faculty in Leadership
                and Management training at various Professional Institutes,
                Management Institutions and Companies. An Able Compere and
                Master of Ceremonies, who is much sought after for his event
                management skills.
                <br />
                <br />
                Has been a keen exponent of Quizzing and General Knowledge
                Competitions till date and has been an active “Quiz-Master” at
                various fora including on Television. Is a keen Pro-Hobbyist
                Photographer with special interest in Birding and Wildlife
                Photography, having had his photographs on Wildlife, Travel and
                Landscapes published in various renowned publications. Is also a
                Certified Trainer in CPR (Cardio-Pulmonary Resuscitation) and
                First Aid Emergency Response.
                <br />
                <br />
                36 Years of Service, having joined Lionism in 1986 as Charter
                President of Leo Club of Candolim and transferred to parent
                Lions Club in 1991. Has served in all capacities at Club level
                before becoming President in 1998-99, when the Club was adjudged
                as Best Club in the District. Served as Cabinet Secretary (Club
                Visits) 1999-2000, Zone Chairperson in 2000-2001 and District
                Chairperson in various portfolios over two decades. Unique
                privilege of serving as District Chairperson for Leadership
                Development for Three Consecutive Terms from 2003 to 2006.
                <br />
                <br />
                Has been adjudged 100% President and Best President, Best
                Cabinet Secretary, Best Zone Chairperson and Best District
                Chairperson in the District and Multiple. Is the Proud Recipient
                of Five International Presidents Leadership Medals, Fifteen
                International Presidents Certificates of Appreciation, Ten
                District Governors Leadership & Appreciation Awards, Two Club
                Extension Awards and Guiding Lion Awards besides holding the
                Senior Master Key Award. Has completed Lions Leadership Training
                at all levels and also training towards Leadership & Management
                Skill Development in his Professional Lifetime.
                <br />
                <br />
                Married to PMJF Lion Glenda, a past National-level sportsperson,
                also a former Leo and Past 100% President of the Club. Elder
                Son, Leo Emir, a national level sprinter, is the serving Leo
                District 317B Vice President and charter president of Leo Club
                of Candolim III, who shares his birthday on 13th January, with
                Lions Clubs Founder, Melvin Jones. Younger Son, Leo Gareth is an
                alumnus of the World famous Krishnamurti Foundation’s, Rishi
                Valley School, Madanapalle. His Father, Lion Francisco was a
                Charter Member and Mother, Lion Melba was a Past 100% President,
                all serving the Lions Club of Candolim. The Brito family donated
                the land on which was built the first ClubHouse in Goa, the
                “Lions Socio-Recreational Centre” Clubhouse in 1986.
                <br />
                <br />
                <strong> A true Lions family indeed!</strong>
                <br />
                <br />
              </p>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            className="vcGov1">
            <Item
              sx={{ padding: { xs: "1rem", sm: "3rem" }, height: "100%" }}
              className="item aboutGovContainer">
              <Avatar
                alt="Remy Sharp"
                src={
                  "https://lions317b.org/api/static/assets/1688063064447-03-manoj.jpeg"
                }
                sx={{ width: "300px", height: "220px", display: "flex" }}
                className="about-image"
                variant="rounded"
              />
              <Typography
                variant="h4"
                gutterBottom
                className="itemTitle">
                Manoj Manek
              </Typography>
              <Typography
                variant="h5"
                gutterBottom>
                1st Vice District Governor
              </Typography>
              <p>
                {" "}
                Dear Lion Friends,
                <br />
                <br />
                MJF Lion Manoj Born on 16th September 1963 a very dedicated and
                passionate Lion Member for 30 years in Lions Club of Hubli. MJF
                Lion Manoj Born on 16th September 1963 a very dedicated and
                passionate Lion Member for 30 years in Lions Club of Hubli.
                <br />
                <br />
                Engineering from the Prestigious Collage B V Bhoomraddi College
                of Engineering & Technology Hubli In 1988 he started his journey
                in Lionism by joining the Leo Club of Hubli and become the Leo
                President in the year 1990
                <br />
                <br />
                In the year 1992 he joined the lions club of Hubli He has held
                all the posts at the club level. He was the Golden Jubilee
                President of the Club in the year 2010-11. Zone chairperson in
                2014-15 Region Chairperson in 2016-17
                <br />
                <br />
                MJF Lion Manoj L Manek is serving is the First Vice District
                Governor Dist 317-B He is a recipient of many international
                awards including the International President Medal in 2015-16.
                He has completed DLLI, RLLI, ALLI and FDI this year.
                <br />
                <br />
                He associated with many social organisations He is Managing
                committee member of Lions English Medium School Hubli, Hubli
                Lions Blood Bank.
                <br />
                <br />
                He is happily married to Lion Raksha, and blessed with a Son
                Pranay and Granddaughter Hiranya
              </p>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            className="vcGov2">
            <Item
              sx={{ padding: { xs: "1rem", sm: "3rem" }, height: "100%" }}
              className="item aboutGovContainer">
              <Avatar
                alt="Remy Sharp"
                src={
                  "https://lions317b.org/api/static/assets/1688063097222-04-jai.jpeg"
                }
                sx={{ width: "300px", height: "220px", display: "flex" }}
                className="about-image"
                variant="rounded"
              />
              <Typography
                variant="h4"
                gutterBottom
                className="itemTitle">
                Lion JaiAmol Naik
              </Typography>
              <Typography
                variant="h5"
                gutterBottom>
                2nd Vice District Governor
              </Typography>

              <p>
                {" "}
                Dear Ever Serving Leaders,
                <br />
                <br />
                Lion JaiAmol Naik, a Progressive Melvin Jones Fellow is a
                graduate in Physics from Bombay University and a Bachelor of
                Computer Science from International University in Missouri, USA.
                He started his career as a Computer Systems Trainer at Hindustan
                Computers Ltd. Mumbai and retired in November, 2022 as General
                Manager – Information Technology at Salgaocars group, a mining
                firm in Goa. He is now serving as a Computer Software Consultant
                and Database Administrator.
                <br />
                <br />
                Lion JaiAmol Joined Lions Club of Chicalim Bogmalo in 2011 and
                became a charter member of Lions Club of Dabolim in July 2013.
                He has been a keen learner and completed all the Lions
                Leadership Institutes from DLLI to ALLI and also graduated from
                the Lions Faculty Development Institute (FDI). He has been
                serving as a Lions faculty at the district for several years
                together.
                <br />
                <br />
                Having served his club with dedication in various leadership
                positions, Lion JaiAmol has served at the District level on
                prominent cabinet portfolios viz District Cabinet Secretary, DC
                for Quest, GLT Co-ordinator, RDC-IT and GMT Coordinator. Two of
                his most notable achievements over the years include, launching
                the inaugural mobile version of the District Directory in
                2017-18 & for the first time in the district he achieved online
                reporting of service activities by all clubs, during 2021-22.
                <br />
                <br />
                In recognition of his service to the club & the association, he
                has received numerous awards. The crowning glory of awards were
                the International Presidents Presidential Medallion, District
                Governor’s Leadership Medal he achieved during the Centennial
                Year, the ‘Lion of the District’ award & a Six time beneficiary
                of the ”International President’s Certificate of Appreciation”.
                Other notable awards are Best Club President, Best DC for Lions
                Quest, Best performer as District Cabinet Secretary & Best GLT
                Co-ordinator, all of which at the district as well as at the
                multiple level. He also won the Golden Quest Achiever & the
                Lions Quest Champion Award of our Multiple.
                <br />
                <br />
                Lion JaiAmol Credits his better half PMJF Lion Dr. Kirti Naik
                for having played an important supportive role in his lionistic
                success journey. Lion Dr. Kirti is the Joint Cabinet Secretary
                this year in our District cabinet and they together are the
                “first FDI couple” of our district. They are blessed with a son,
                who is based in Dubai.
                <br />
                <br />
                In addition to his Lions activities, Lion JaiAmol is currently
                the Honorary Secretary of Mormugao Branch of Indian Red Cross
                and is a life member of Bharatiya Vidya Bhavans having served
                it’s Goa Kendra as the Honorary Secretary for nearly 3 years.
                <br />
                <br />
                During the Annual District Convention held at Margao-Goa on 15th
                & 16th April, 2023, PMJF Lion JaiAmol Naik was deservedly
                elected to the coveted post of Second Vice District Governor
                (2023-24) with a thumping majority.
                <br />
                <br />
              </p>
            </Item>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default DGTeam;
