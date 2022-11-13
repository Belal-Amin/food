import React from "react";
// import { Button } from "react-bootstrap";
import './Header.css';
import img from './../img/1.png';
import im from './../img/2 (2).png';
const Home = () => {
    return (
        <div>

            <section className="numbers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>1287+</h2>
                            <h6>SAVINGS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>5786+</h2>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>1440+</h2>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>7110+</h2>
                            <h6>GLOBES</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pride">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={img} title='img' />
                        </div>
                        <div className="col-md-6">
                            <h2>We prde ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit Etiam et purus a odio finidus bibendumin sit amet leo Mauris feugiat erat tellrs</p>
                            <button><a href="#">Learn More</a></button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="make">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h5>
                            <div> Etiam sed dolor ac diam volutpat.</div>
                            <div> Erat volutpat aliquet imperdiet.</div>
                            <div>purus a odio finibus bibendum.</div>
                        </div>
                        <div className="col-md-3">
                            <img src={im} title='im' />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}










export default Home;








