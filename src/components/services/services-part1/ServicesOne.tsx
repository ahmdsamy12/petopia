import React from 'react'
import MainHeading from '../../main-heading/MainHeading';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dog1 from "./../../../images/Service-1.png";
import dog2 from "./../../../images/Service-2.png";
import dog3 from "./../../../images/Service-4.png";
import dog4 from "./../../../images/Group.png";
import dog5 from "./../../../images/Service-1 (1).png";
import dog6 from "./../../../images/Service-5.png";
import "./services-one.css";
import dog8 from "./../../../images/pet-accessories-still-life-concept-with-chew-ball.png";
import dog9 from "./../../../images/pet-dressed-necktie-2021-08-27-22-18-47-utc (1).png";
import dogI from "./../../../images/charles-deluvio-Mv9hjnEUHR4-unsplash (1).png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const ServicesOne = () => {
    return (
        <div className='services-one'>
            <div className="container">
                <MainHeading parg='OUR SERVICES' head='All Pet Care Services' />
                <div className='services-one-grid'>
                    <div className='services-card'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography className='head' gutterBottom variant="h5" component="div" style={{display: "flex", justifyContent: "center" , alignItems: "center"}}>
                                <CardMedia className='image' style={{width: 60, height: 60 , marginRight: 10}}
                                image={dog1}
                                title="green iguana"
                            />   Walking & Sitting
                                </Typography>
                                <Typography  variant="h5" color="text.secondary">
                                Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi 
                                </Typography>
                                <Typography  gutterBottom variant="h5" component="div">
                                From $15 / hour
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Get Service</Button>
                            </CardActions>
                        </Card>
                    </div>
                    <div className='services-card'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{display: "flex", justifyContent: "center" , alignItems: "center"}}>
                                <CardMedia style={{width: 60, height: 60 , marginRight: 10}}
                                image={dog2}
                                title="green iguana"
                            /> Pet Grooming
                                </Typography>
                                <Typography variant="h5" color="text.secondary">
                                Et odio pellentesque diam volutpat commodo sed egestas egestas  pellentesque nec nam 
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                From $39 / complex 
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Get Service</Button>
                            </CardActions>
                        </Card>
                    </div><div className='services-card'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{display: "flex", justifyContent: "center" , alignItems: "center"}}>
                                <CardMedia style={{width: 60, height: 60 , marginRight: 10}}
                                image={dog3}
                                title="green iguana"
                            /> Pet Training
                                </Typography>
                                <Typography variant="h5" color="text.secondary">
                                Aliquam ut porttitor leo a diam sollicitudin tempor  sit amet est placerat 
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                From $27 / hour 
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Get Service</Button>
                            </CardActions>
                        </Card>
                    </div><div className='services-card'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{display: "flex", justifyContent: "center" , alignItems: "center"}}>
                                <CardMedia style={{width: 60, height: 60 , marginRight: 10}}
                                image={dog4}
                                title="green iguana"
                            /> Pet Taxi
                                </Typography>
                                <Typography variant="h5" color="text.secondary">
                                Maecenas ultricies mi eget mauris pharetra et ultrices consectetur adipiscing elit
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                From $22  / trip 
                                </Typography>
                                <CardActions>
                                <Button size="small">Get Service</Button>
                            </CardActions>
                            </CardContent>
                           
                        </Card>
                    </div><div className='services-card'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{display: "flex", justifyContent: "center" , alignItems: "center"}}>
                                <CardMedia style={{width: 60, height: 60 , marginRight: 10}}
                                image={dog5}
                                title="green iguana"
                            /> Health & Wellness
                                </Typography>
                                <Typography variant="h5" color="text.secondary">
                                Amet porttitor eget dolor morbi non arcu risus quis varius blandit aliquam etiam
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                From $39/ visit 
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Get Service</Button>
                            </CardActions>
                        </Card>
                    </div><div className='services-card'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" style={{display: "flex", justifyContent: "center" , alignItems: "center"}}>
                                <CardMedia style={{width: 60, height: 60 , marginRight: 10}}
                                image={dog6}
                                title="green iguana"
                            /> Pet Hotel
                                </Typography>
                                <Typography variant="h5" color="text.secondary">
                                Turpis massa sed elementum tempus egestas sed sed risus aliquam  urna cursus eget n
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                From $15 / night
                                </Typography>
                                <CardActions>
                                <Button size="small">Get Service</Button>
                            </CardActions>
                            </CardContent>
                            
                        </Card>
                    </div>
                </div>
                <div className='services-one-shop'>
                    <div className='shop'>
                        <div className='shop-one'>
                            <div className='one-text'>
                                <h3>Сheck Out Our Specials</h3>
                                <p>Massa placerat duis ultricies lacus. Aliquet bibendum enim facilisis gravida neque convallis </p>
                                <a href="#">Shop Now <FontAwesomeIcon icon={faArrowRight} /></a>
                            </div>
                            <div className='one-image'>
                                <img src={dog8} alt="" />
                            </div>
                        </div>
                        <div className='shop-two'>
                            <div className='two-1'>
                                <div className='two-1-1'>
                                <h3>Luxury Fashion Collection</h3>
                                <a href="#">Shop Now</a>
                                </div>
                                <img src={dog9} alt="" />
                            </div>
                            <div className="two-1">
                                < div className='two-1-1'>
                                <h3>Shop What’s Trending</h3>
                                <a href="">Shop Now</a>
                                </div>
                                <img src={dogI} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesOne;