import React from "react";
import "./About.css";
import AnimatedPages from "../../AnimatedPages";
const About = () => {
    return (
        <AnimatedPages>
            <div className="p-4 text-light">
                <h2 className="head-line">About Me</h2>
                <p className="mt-4 text-light">
                    I'm Hamza, front-end developer from Syria, <br /> <br /> specializes in visually appealing websites. Expertise in HTML, CSS, and JavaScript, React ,building responsive, optimized web experiences. Let's connect to discuss collaboration on projects.                </p>
                <hr />
                <h2 className="mt-2">What I Do!</h2>
                <div className="mt-2">
                    <div className="row gy-2">
                        <div className="col-lg-6 col-md-12 ">
                            <div className="skills-box d-flex box1 ">
                                <div className="p-2 d-flex  ">
                                    <i className="fa-solid icon fa-swatchbook me-2 fs-4"></i>
                                    <h5>Ui/Ux Design</h5>
                                </div>
                                <p className="fs-6">
                                    Create user-centric interfaces for an exciting opportunity as a UI/UX programmer.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="skills-box d-flex  box2">
                                <div className="p-2 d-flex ">
                                    <i className="fa-solid icon fa-code me-2 fs-4"></i>
                                    <h5>App Development</h5>
                                </div>
                                <p className="fs-6">
                                    React Native: Highly performant and visually appealing interfaces are possible with this framework.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="skills-box d-flex  box3">
                                <div className="p-2 d-flex ">
                                    <i className="fa-brands icon fa-edge me-2 fs-4"></i>
                                    <h5>Web Development</h5>
                                </div>
                                <p className="fs-6">
                                    Ensure responsive layouts for different devices, with intuitive navigation and user-friendly interactions.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 ">
                            <div className="skills-box d-flex box4">
                                <div className="p-2 d-flex ">
                                    <i className="fa-solid icon fa-gear me-2 fs-4"></i>
                                    <h5>Management</h5>
                                </div>
                                <p className="fs-6">
                                    Balance technical expertise, leadership skills to drive project success, foster collaboration.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </AnimatedPages>
    );
};

export default About;
