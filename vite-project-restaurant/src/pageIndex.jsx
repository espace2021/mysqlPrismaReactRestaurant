import React from 'react'
import ListProducts from './components/products/listProducts'

const PageIndex = () => {
  return (
    <div>
      <>
  {/* Navigation
    ==========================================*/}
  <nav id="menu" className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      {/* Brand and toggle get grouped for better mobile display */}
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          {" "}
          <span className="sr-only">Toggle navigation</span>{" "}
          <span className="icon-bar" /> <span className="icon-bar" />{" "}
          <span className="icon-bar" />{" "}
        </button>
        <a className="navbar-brand page-scroll" href="#page-top">
          Touché
        </a>{" "}
      </div>
      {/* Collect the nav links, forms, and other content for toggling */}
      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav navbar-right">
        <li>
            <a href="#orders" className="page-scroll">
              Orders
            </a>
          </li>
          <li>
            <a href="#about" className="page-scroll">
              About
            </a>
          </li>
          <li>
            <a href="#restaurant-menu" className="page-scroll">
              Menu
            </a>
          </li>
          <li>
            <a href="#portfolio" className="page-scroll">
              Gallery
            </a>
          </li>
          <li>
            <a href="#team" className="page-scroll">
              Chefs
            </a>
          </li>
          <li>
            <a href="#call-reservation" className="page-scroll">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* /.navbar-collapse */}
    </div>
  </nav>
  {/* Header */}
  <header id="header">
    <div className="intro">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="intro-text">
              <h1>Touché</h1>
              <p>Restaurant / Coffee / Pub</p>
              <a href="#about" className="btn btn-custom btn-lg page-scroll">
                Discover Story
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* About Section */}
  <div id="about">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6 ">
          <div className="about-img">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="about-text">
            <h2>Our Restaurant</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
              dapibus leo nec ornare diam. Sed commodo nibh ante facilisis
              bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam
              commodo nibh.
            </p>
            <h3>Awarded Chefs</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
              dapibus leo nec ornare diam. Sed commodo nibh ante facilisis
              bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Restaurant Menu Section */}
  <div id="restaurant-menu">
    <div className="section-title text-center center">
      <div className="overlay">
        <h2>Menu</h2>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.</p>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <div className="menu-section">
            <h2 className="menu-section-title">Breakfast &amp; Starters</h2>
            <hr />
            <div className="menu-item">
              <div className="menu-item-name"> Delicious Dish </div>
              <div className="menu-item-price"> $35 </div>
              <div className="menu-item-description">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.{" "}
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name"> Delicious Dish </div>
              <div className="menu-item-price"> $30 </div>
              <div className="menu-item-description">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.{" "}
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name"> Delicious Dish </div>
              <div className="menu-item-price"> $30 </div>
              <div className="menu-item-description">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.{" "}
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name"> Delicious Dish </div>
              <div className="menu-item-price"> $30 </div>
              <div className="menu-item-description">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className="menu-section">
            <h2 className="menu-section-title">Main Course</h2>
            <hr />
            <div className="menu-item">
              <div className="menu-item-name"> Delicious Dish </div>
              <div className="menu-item-price"> $45 </div>
              <div className="menu-item-description">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.{" "}
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name"> Delicious Dish </div>
              <div className="menu-item-price"> $30 </div>
              <div className="menu-item-description">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.{" "}
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name"> Delicious Dish </div>
              <div className="menu-item-price"> $30 </div>
              <div className="menu-item-description">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.{" "}
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name"> Delicious Dish </div>
              <div className="menu-item-price"> $30 </div>
              <div className="menu-item-description">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <div className="menu-section">
            <h2 className="menu-section-title">Dinner</h2>
            <hr />
            <div className="menu-item">
              <div className="menu-item-name"> Delicious Dish </div>
              <div className="menu-item-price"> $45 </div>
              <div className="menu-item-description">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.{" "}
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name"> Delicious Dish </div>
              <div className="menu-item-price"> $350 </div>
              <div className="menu-item-description">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.{" "}
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name"> Delicious Dish </div>
              <div className="menu-item-price"> $30 </div>
              <div className="menu-item-description">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam..{" "}
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name"> Delicious Dish </div>
              <div className="menu-item-price"> $30 </div>
              <div className="menu-item-description">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className="menu-section">
            <h2 className="menu-section-title">Coffee &amp; Drinks</h2>
            <hr />
            <div className="menu-item">
              <div className="menu-item-name"> Delicious Dish </div>
              <div className="menu-item-price"> $35 </div>
              <div className="menu-item-description">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.{" "}
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name"> Delicious Dish </div>
              <div className="menu-item-price"> $30 </div>
              <div className="menu-item-description">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.{" "}
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name"> Delicious Dish </div>
              <div className="menu-item-price"> $30 </div>
              <div className="menu-item-description">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.{" "}
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-name"> Delicious Dish </div>
              <div className="menu-item-price"> $30 </div>
              <div className="menu-item-description">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                sed dapibus leo nec ornare diam.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio Section */}
  <div id="portfolio">
    <div className="section-title text-center center">
      <div className="overlay">
        <h2>Gallery</h2>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.</p>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="categories">
          <ul className="cat">
            <li>
              <ol className="type">
                <li>
                  <a href="#" data-filter="*" className="active">
                    All
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".breakfast">
                    Breakfast
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".lunch">
                    Lunch
                  </a>
                </li>
                <li>
                  <a href="#" data-filter=".dinner">
                    Dinner
                  </a>
                </li>
              </ol>
            </li>
          </ul>
          <div className="clearfix" />
        </div>
      </div>
      <div className="row">
        <div className="portfolio-items">
       
          <div className="col-sm-6 col-md-4 col-lg-4 breakfast">
            <div className="portfolio-item">
              <div className="hover-bg">
                {" "}
                <a
                  href="img/portfolio/01-large.jpg"
                  title="Dish Name"
                  data-lightbox-gallery="gallery1"
                >
                  <div className="hover-text">
                    <h4>Dish Name</h4>
                  </div>
                  <img
                    src="img/portfolio/01-small.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{" "}
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 dinner">
            <div className="portfolio-item">
              <div className="hover-bg">
                {" "}
                <a
                  href="img/portfolio/02-large.jpg"
                  title="Dish Name"
                  data-lightbox-gallery="gallery1"
                >
                  <div className="hover-text">
                    <h4>Dish Name</h4>
                  </div>
                  <img
                    src="img/portfolio/02-small.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{" "}
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 breakfast">
            <div className="portfolio-item">
              <div className="hover-bg">
                {" "}
                <a
                  href="img/portfolio/03-large.jpg"
                  title="Dish Name"
                  data-lightbox-gallery="gallery1"
                >
                  <div className="hover-text">
                    <h4>Dish Name</h4>
                  </div>
                  <img
                    src="img/portfolio/03-small.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{" "}
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 breakfast">
            <div className="portfolio-item">
              <div className="hover-bg">
                {" "}
                <a
                  href="img/portfolio/04-large.jpg"
                  title="Dish Name"
                  data-lightbox-gallery="gallery1"
                >
                  <div className="hover-text">
                    <h4>Dish Name</h4>
                  </div>
                  <img
                    src="img/portfolio/04-small.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{" "}
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 dinner">
            <div className="portfolio-item">
              <div className="hover-bg">
                {" "}
                <a
                  href="img/portfolio/05-large.jpg"
                  title="Dish Name"
                  data-lightbox-gallery="gallery1"
                >
                  <div className="hover-text">
                    <h4>Dish Name</h4>
                  </div>
                  <img
                    src="img/portfolio/05-small.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{" "}
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 lunch">
            <div className="portfolio-item">
              <div className="hover-bg">
                {" "}
                <a
                  href="img/portfolio/06-large.jpg"
                  title="Dish Name"
                  data-lightbox-gallery="gallery1"
                >
                  <div className="hover-text">
                    <h4>Dish Name</h4>
                  </div>
                  <img
                    src="img/portfolio/06-small.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{" "}
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 lunch">
            <div className="portfolio-item">
              <div className="hover-bg">
                {" "}
                <a
                  href="img/portfolio/07-large.jpg"
                  title="Dish Name"
                  data-lightbox-gallery="gallery1"
                >
                  <div className="hover-text">
                    <h4>Dish Name</h4>
                  </div>
                  <img
                    src="img/portfolio/07-small.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{" "}
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 breakfast">
            <div className="portfolio-item">
              <div className="hover-bg">
                {" "}
                <a
                  href="img/portfolio/08-large.jpg"
                  title="Dish Name"
                  data-lightbox-gallery="gallery1"
                >
                  <div className="hover-text">
                    <h4>Dish Name</h4>
                  </div>
                  <img
                    src="img/portfolio/08-small.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{" "}
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 dinner">
            <div className="portfolio-item">
              <div className="hover-bg">
                {" "}
                <a
                  href="img/portfolio/09-large.jpg"
                  title="Dish Name"
                  data-lightbox-gallery="gallery1"
                >
                  <div className="hover-text">
                    <h4>Dish Name</h4>
                  </div>
                  <img
                    src="img/portfolio/09-small.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{" "}
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 lunch">
            <div className="portfolio-item">
              <div className="hover-bg">
                {" "}
                <a
                  href="img/portfolio/10-large.jpg"
                  title="Dish Name"
                  data-lightbox-gallery="gallery1"
                >
                  <div className="hover-text">
                    <h4>Dish Name</h4>
                  </div>
                  <img
                    src="img/portfolio/10-small.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{" "}
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 lunch">
            <div className="portfolio-item">
              <div className="hover-bg">
                {" "}
                <a
                  href="img/portfolio/11-large.jpg"
                  title="Dish Name"
                  data-lightbox-gallery="gallery1"
                >
                  <div className="hover-text">
                    <h4>Dish Name</h4>
                  </div>
                  <img
                    src="img/portfolio/11-small.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{" "}
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4 breakfast">
            <div className="portfolio-item">
              <div className="hover-bg">
                {" "}
                <a
                  href="img/portfolio/12-large.jpg"
                  title="Dish Name"
                  data-lightbox-gallery="gallery1"
                >
                  <div className="hover-text">
                    <h4>Dish Name</h4>
                  </div>
                  <img
                    src="img/portfolio/12-small.jpg"
                    className="img-responsive"
                    alt="Project Title"
                  />{" "}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team Section */}
  <div id="team" className="text-center">
    <div className="overlay">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Meet Our Chefs</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id="row">
          <div className="col-md-4 team">
            <div className="thumbnail">
              <div className="team-img">
                <img src="img/team/01.jpg" alt="..." />
              </div>
              <div className="caption">
                <h3>Mike Doe</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 team">
            <div className="thumbnail">
              <div className="team-img">
                <img src="img/team/02.jpg" alt="..." />
              </div>
              <div className="caption">
                <h3>Chris Doe</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 team">
            <div className="thumbnail">
              <div className="team-img">
                <img src="img/team/03.jpg" alt="..." />
              </div>
              <div className="caption">
                <h3>Ethan Doe</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Call Reservation Section */}
  <div id="call-reservation" className="text-center">
    <div className="container">
      <h2>
        Want to make a reservation? Call <strong>1-887-654-3210</strong>
      </h2>
    </div>
  </div>
  {/* Contact Section */}
  <div id="contact" className="text-center">
    <div className="container">
      <div className="section-title text-center">
        <h2>Contact Form</h2>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.</p>
      </div>
      <div className="col-md-10 col-md-offset-1">
        <form name="sentMessage" id="contactForm" noValidate="">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Name"
                  required="required"
                />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  required="required"
                />
                <p className="help-block text-danger" />
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows={4}
              placeholder="Message"
              required=""
              defaultValue={""}
            />
            <p className="help-block text-danger" />
          </div>
          <div id="success" />
          <button type="submit" className="btn btn-custom btn-lg">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
    {/* Order Section */}
    <div id="orders" className="text-center">
<h2>Orders</h2>
     <div className="row">
        <div className="portfolio-items">
            <ListProducts />
       </div>
 </div>      
  </div>
  <div id="footer">
    <div className="container text-center">
      <div className="col-md-4">
        <h3>Address</h3>
        <div className="contact-item">
          <p>4321 California St,</p>
          <p>San Francisco, CA 12345</p>
        </div>
      </div>
      <div className="col-md-4">
        <h3>Opening Hours</h3>
        <div className="contact-item">
          <p>Mon-Thurs: 10:00 AM - 11:00 PM</p>
          <p>Fri-Sun: 11:00 AM - 02:00 AM</p>
        </div>
      </div>
      <div className="col-md-4">
        <h3>Contact Info</h3>
        <div className="contact-item">
          <p>Phone: +1 123 456 1234</p>
          <p>Email: info@company.com</p>
        </div>
      </div>
    </div>
    <div className="container-fluid text-center copyrights">
      <div className="col-md-8 col-md-offset-2">
        <div className="social">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus" />
              </a>
            </li>
          </ul>
        </div>
        <p>
          © 2016 Touché. All rights reserved. Designed by{" "}
          <a href="http://www.templatewire.com" rel="nofollow">
            TemplateWire
          </a>
        </p>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default PageIndex
