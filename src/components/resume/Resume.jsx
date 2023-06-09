import React from 'react'
import './Resume.css'
import AnimatedPages from './../../AnimatedPages';

const Resume = () => {
  return (
    <AnimatedPages>
      <div className="p-4 text-light">
        <h2 className="head-line">Resume</h2>

        <hr />

        <div className='row my-5 py-5'>

          <div className="col-lg-6 col-md-12 my-3">
            <span className='fs-4'><i className="fa-solid fa-graduation-cap me-2 my-3 "></i>Education</span>

            <div className=" box3 skills-box d-flex justify-content-center align-items-md-start ps-2">
              <p className='text-start'>2022-2023</p>
              <h5>Certificate as a Front End Developer</h5>
              <h6>Route is an Egyptian IT-Training Center</h6>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 my-3">
            <span className='fs-4'><i className="fa-solid fa-briefcase me-2 my-3"></i>Experience</span>
            <div className=" box2 skills-box d-flex justify-content-center align-items-md-start ps-2">
              <p className='text-start'>2022-2023</p>
              <h5 className='text-start'>Front End Developer</h5>
              <h6>Online as Freelance Web Developer</h6>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPages>
  )
}

export default Resume