import React from 'react'
import "./Contact.css"
import Form from 'react-bootstrap/Form';
import AnimatedPages from './../../AnimatedPages';
const Contact = () => {
  return (
    <AnimatedPages>

      <div className="p-4 text-light">
        <h2 className="head-line">Contact</h2>
        <hr />

        <div className='row pb-5 '>

          <div className="col-lg-6 col-md-12 ">
            <div className=" p-4 Contact-box box3">
              <div className="d-flex align-items-center justify-content-start py-2 ">
                <i className="fa-solid fa-address-book me-2 fs-4"></i>
                <h5>Contact  : </h5>
              </div>
              <p className="fs-5 m-3 box-call">
                <i className="fa-solid fa-phone me-2 fs-5"></i>
                <a href="tel:+1234567890">+21009700870</a>
              </p>
              <p className="fs-5 ms-3 box-call">
                <i className="fa-brands fa-whatsapp me-3 fs-5"></i>
                <a target='blank' href="https://wa.me/201009700870?text=Hello%20Hamza%20Is%20Here%20,%0AHow%20Can%20I%20Help%20You">WhatsApp Me</a>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className=" p-4 Contact-box box4">
              <div className="d-flex align-items-start justify-content-start py-2 ">
                <i className="fa-solid fa-envelope me-2 fs-4"></i>
                <h5>Maill  : </h5>
              </div>
              <p className="fs-5 m-3 box-call ">
                <i className="fa-regular fa-envelope-open me-2 fs-4"></i>

                <a type="mail" href="mailto:Mc.larwnce@gmail.com">
                  Mc.larwnce@gmail.com
                </a>
              </p>
              <p className="fs-5 ms-3 box-call  ">
                <i className="fa-regular fa-envelope-open me-2 fs-4"></i>
                <a type="mail" href="mailto:HamzaAlarja3@gmail.com">
                  HamzaAlarja3@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <form className='form-container'
          action="https://formspree.io/f/xoqzoplk"
          method="POST"
        >
          <Form.Group className="mb-3 d-flex justify-content-center align-items-center" controlId="exampleForm.ControlInput1">
            <div className='w-50 '>
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" type="text" placeholder="Your Name" />
            </div>
            <div className='w-50 offset-1 '>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="name@example.com" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label> Send Me a Message </Form.Label>
            <Form.Control name="msg" as="textarea" rows={2} />
          </Form.Group>
          <div className='text-center'>
            <button type="submit" className='btn btn-outline-warning w-50'>Supmit</button>

          </div>
        </form>

      </div>
    </AnimatedPages>
  )
}

export default Contact