import {Box, Container, Grid, Typography} from '@mui/material'
import React from 'react'
import "./Team.css"


function Team() {
    return (
        <Box sx={{backgroundImage: "url('/assets/img/bggg.png')", backgroundAttachment: 'fixed', pb: '2rem'}}>
            <Container>
                <Typography variant='h2' className='team-h'>Our District Team</Typography>


                <Grid container className="main">

                    {/*
                    <Grid item className="team-card-container">
                        <div className="team-card-header">
                            <img alt='' src="/assets/img/logo.png"/>
                        </div>
                        <div className="team-card-body">
                            <h3>Lion's Name</h3>
                            <p>Cabinet Treasurer</p>

                        </div>
                    </Grid>
*/}


                    <Grid item className="team-card-container">
                        <div className="team-card-header">
                            <img alt='' src="/assets/img/dist-team/01_BSN.jpeg"/>
                        </div>
                        <div className="team-card-body">
                            <h3>B S Nagaraj, PMJF</h3>
                            <p>District Governor</p>

                        </div>
                    </Grid>
                    <Grid item className="team-card-container">
                        <div className="team-card-header">
                            <img alt='' src="/assets/img/dist-team/02_BSR.JPG"/>
                        </div>
                        <div className="team-card-body">
                            <h3>B S Rajashekaraiah, PMJF
                            </h3>
                            <p>Immediate Past District Governor
                            </p>

                        </div>
                    </Grid>
                    <Grid item className="team-card-container">
                        <div className="team-card-header">
                            <img alt='' src="/assets/img/dist-team/03_C%20M%20Narayana%20Swamy.jpeg"/>
                        </div>
                        <div className="team-card-body">
                            <h3>C M Narayana Swamy, MJF</h3>
                            <p>First Vice District Governor</p>

                        </div>
                    </Grid>
                    <Grid item className="team-card-container">
                        <div className="team-card-header">
                            <img alt='' src="/assets/img/dist-team/04_Akash%20Suvarna.JPG"/>
                        </div>
                        <div className="team-card-body">
                            <h3>Akash A Suvarna, PMJF
                            </h3>
                            <p>Second Vice District Governor</p>

                        </div>
                    </Grid>
                    <Grid item className="team-card-container">
                        <div className="team-card-header">
                            <img alt='' src="/assets/img/dist-team/05_V%20K%20Rajesh.jpeg"/>
                        </div>
                        <div className="team-card-body">
                            <h3>Rajesh V K, MJF</h3>
                            <p>Cabinet Secretary</p>

                        </div>
                    </Grid>
                    <Grid item className="team-card-container">
                        <div className="team-card-header">
                            <img alt='' src="/assets/img/dist-team/06_RKH-crop.jpeg"/>
                        </div>
                        <div className="team-card-body">
                            <h3>Radhakrishna Hegde, MJF</h3>
                            <p>Cabinet Treasurer</p>

                        </div>
                    </Grid>
                    <Grid item className="team-card-container">
                        <div className="team-card-header">
                            <img alt='' src="/assets/img/dist-team/07_R%20Vijaya.jpeg"/>
                        </div>
                        <div className="team-card-body">
                            <h3>R Vijaya</h3>
                            <p>GLT Coordinator</p>

                        </div>
                    </Grid>
                    <Grid item className="team-card-container">
                        <div className="team-card-header">
                            <img alt='' src="/assets/img/dist-team/08_Anil%20Kumar%20B.jpg"/>
                        </div>
                        <div className="team-card-body">
                            <h3>Adv. Anil Kumar B, PMJF</h3>
                            <p>GMT Coordinator</p>

                        </div>
                    </Grid>
                    <Grid item className="team-card-container">
                        <div className="team-card-header">
                            <img alt='' src="/assets/img/dist-team/09_Ramanamurthy.jpeg"/>
                        </div>
                        <div className="team-card-body">
                            <h3>Ramanamurthy B V, MJF</h3>
                            <p>GST Coordinator</p>

                        </div>
                    </Grid>
                    <Grid item className="team-card-container">
                        <div className="team-card-header">
                            <img alt='' src="/assets/img/dist-team/10_Sasha.jpeg"/>
                        </div>
                        <div className="team-card-body">
                            <h3>Sasha Kulothungan, MJF</h3>
                            <p>GET Coordinator</p>

                        </div>
                    </Grid>
                    <Grid item className="team-card-container">
                        <div className="team-card-header">
                            <img alt='' src="/assets/img/dist-team/11_VenkataNarasimhulu.jpg"/>
                        </div>
                        <div className="team-card-body">
                            <h3>D N Venkatanarasimhulu, PMJF</h3>
                            <p>LCIF Coordinator</p>

                        </div>
                    </Grid>
                    <Grid item className="team-card-container">
                        <div className="team-card-header">
                            <img alt='' src="/assets/img/dist-team/12_Shobha%20Srinivas.jpeg"/>
                        </div>
                        <div className="team-card-body">
                            <h3>Shobha Srinivas</h3>
                            <p>Family & Women Membership</p>

                        </div>
                    </Grid>


                    {/*
                    <Grid item className="team-card-container">
                        <div className="team-card-header">
                            <img alt='' src="/assets/img/logo.png"/>
                        </div>
                        <div className="team-card-body">
                            <h3>Lion's Name</h3>
                            <p>Cabinet Treasurer</p>

                        </div>
                    </Grid>
*/}

                </Grid>
            </Container>
        </Box>
    )
}

export default Team