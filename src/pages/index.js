import React, {useState} from "react"
import { Link } from "gatsby";
import {Router} from '@reach/router';

import Layout from "../components/layout"
import '../components/layout.css';
import SEO from "../components/seo";
import data from '../data';


const IndexPage = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const featured = data.properties.filter((property) => property.featured === true);
  //console.log(featured)
  return(
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
      <button className="ContactButton">
      <i style={{color: '#fff'}}className="material-icons">phone_iphone</i>
      +233 54 135 6456</button>
      <h1>FIND YOUR DREAM HOME TODAY</h1>
      <p>Contact Axtella for all your Construction & Real Estate Services.</p>
      <button className="ContactUsButton">Contact us</button>
     </div>

     <form className="Form">
     <p>Need Help?</p>
     <h2>MESSAGE US</h2>

     <label>
      <input
        name='name'
        value={name}
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}
        required
      />
      </label>

      <label>
      <input
        name='email'
        value={email}
        placeholder="Your Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
     </label>

      <label className="Message">
      <textarea
        value={message}
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
        required
      />
     </label>
      <button>Send Message</button>
     </form>
    </div>

    {/*<Router>
      <PropertyDetails path="/app/property-details/:id" />
    </Router>*/}

    <div className="Featured">
    <p>FEATURED LISTINGS</p>
    <h1>FIND YOUR PERFECT HOME</h1>
    <ul>
    {featured.map((feature, id) =>
      <li key={id}>
          <Link to={`/app/property-details/${feature.id}`}><img src={feature.image} alt="home1" className="Img"/></Link>
          <p className="Tag">{feature.tag}</p>
          <h2>{feature.title}</h2>
          <p className="Price">${feature.price}</p>
        </li>
    )}
    </ul>
    </div>

    <div className="AboutUs">
      <div className="AboutGroup">
      <h3>WHO WE ARE</h3>
      <h1>ABOUT US</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
      <button>Read More</button>
      </div>
        <div className="AboutImg">
        </div>
    </div>

    <div className="Featured">
    <p>FIND YOUR PERFECT HOME</p>
    <h1>UNIQUE LISTINGS</h1>
    <ul>
    {data.properties.map((property, id) =>
      <li key={id}>
      <img src={property.image} alt='property' className="Img"/>
      <p className="Tag">{property.tag}</p>
      <h2>{property.title}</h2>
      <p className="Price">${property.price}</p>
      </li>
    )}
    </ul>
    </div>

    <div className="Help">
    <div className="HelpGroup">
    <p>WE'RE HERE TO HELP YOU</p>
    <h1>WHAT ARE YOU LOOKING FOR</h1>
    </div>

    <div className="HelpCard">
      <ul>
        <li>
        <img src={require('../images/apartment.png')} alt="apartment" width="60px" height="60px"/>
        <h3> APARTMENTS</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>Find Apartments</button>
        </li>
        <li>
        <img src={require('../images/house.png')} alt="apartment" width="60px" height="60px"/>
        <h3> HOUSES</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>Find Houses</button>
        </li>
        <li>
        <img src={require('../images/office.png')} alt="apartment" width="60px" height="60px"/>
        <h3>OFFICES</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>Find Offices</button>
        </li>
      </ul>
    </div>


    </div>
    <div className="Finder">
      <p><i className="material-icons">phone_iphone</i>
      +233 54 135 6456</p>
      <h1>LET'S FIND THE RIGHT PROPERTY FOR YOU</h1>
      <button>Contact us</button>
    </div>
  </Layout>
)}

export default IndexPage
