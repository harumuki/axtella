import React, {useState} from 'react'
import Layout from "../components/layout";
import './contact.css';
import Map from './Map';
import Marker from '../components/Marker';


const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS")
        setName('')
        setEmail('')
        setMessage('')
        setPhone('')
      } else {
        setStatus("ERROR")
      }
    };
    xhr.send(data);
  }

  const marker = {
    address: "Coastal Spintex, Accra",
    lat: 5.636864,
    lng:-0.097823,
  }

  return(
  <Layout>
  <div className="Contact-Hero">
    <div className='Contact-Map-Section'>
    {/*<img src={require('../images/map.jpg')} alt="contact map"/>*/}
    <div className="Map-Container">
      <Map marker={marker} zoomlevel={15}/>
    </div>
      <div className="Contact-Address">
      <i style={{color: 'red'}}className="material-icons">place</i>
      <p>Coastal Spintex, Accra</p>
      </div>
    </div>

  <div className="Contact-Info">
    <div className="Contact-Info-Details">
      <div className="Contact-Info-Details-Block">
      <p>Phone</p>
      <h4>054135668</h4>
      </div>
      <div className="Contact-Info-Details-Block">
      <p>Email</p>
      <h4>Axtella@gmail.com</h4>
      </div>
      <div className="Contact-Info-Details-Block">
      <p>Mon - Fri: 8:00 am - 6pm</p>
      </div>
    </div>
    <form className="Contact-Info-Form"
    onSubmit={submitForm}
    action="https://formspree.io/xayppdyw"
    method="POST"
    >
      <label className="Name">
        <input
        name="name"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
        required
        />
      </label>
      <label className="Phone">
        <input
        name="phone"
        value={phone}
        placeholder="phone number"
        onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label className="Email">
        <input
        name="_replyto"
        value={email}
        placeholder="email address"
        onChange={(e) => setEmail(e.target.value)}
        required
        />
      </label>
      <label className="Contact-Message">
        <textarea
        name="message"
        value={message}
        placeholder="message"
        onChange={(e) => setMessage(e.target.value)}
        required/>
      </label>
      <button className="Form-Button">send message</button>
      { status === "SUCCESS" ? <p>Thanks</p> : null}
      {
       status === "ERROR" && <p>Ooops! There was an error.</p>
     }
    </form>

  </div>
</div>
  </Layout>
)}

export default Contact;
