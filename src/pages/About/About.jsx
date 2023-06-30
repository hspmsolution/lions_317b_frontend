import React from "react";
import "./about.css";
import { Avatar, Box, Container, Typography } from "@mui/material";
import CustomizedBreadcrumbs from "../../components/Breadcrumb/Breadcrumb";

const About = () => {
  return (
    <>
      <div className="aboutGov">
        <CustomizedBreadcrumbs
          label={"About"}
          subLabel={"Governor"}
        />
        <Box
          sx={{
            // margin: "1rem",
            backgroundImage: 'url("https://lions317b.org/api/static/assets/1688064493288-aboutbg.png")',
            backgroundSize: "cover",
            padding: { xs: "3rem 0.5rem", sm: "3rem 2rem", lg: "3rem 2rem" },
          }}>
          <Container className="aboutGovContainer">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}>
              <Avatar
                src={"https://lions317b.org/api/static/assets/1688062877612-01-erle.jpg"}
                alt="our district governer"
                sx={{ mt: "1rem", width: "300px", height: "220px" }}
                className="about-image"
                variant="rounded"
              />
              <Typography
                variant="h4"
                className="itemTitle">
                PMJF LION JOSE FRANCISCO ERLE DE SOUSA e BRITO{" "}
              </Typography>
              <Typography variant="h5">
                Lions Clubs International District Governor 2023-24 (District
                317 B)
              </Typography>
            </div>
            <div className="dist-governer">
              <p style={{ textAlign: "justify" }}>
                <b>
                  {" "}
                  Dear Members and Sevayatris,
                  <br />
                  Greetings from District 317 B!
                </b>
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
            </div>
          </Container>
        </Box>
      </div>
    </>
  );
};

export default About;
