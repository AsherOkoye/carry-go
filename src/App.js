import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css'
import './Responsiveness/Responsive.css'
import HeroOne from "./components/HeroOne";
import HeroTwo from "./components/HeroTwo";
import HeroThree from "./components/HeroThree";
const Nav = () => {
  return (
    <div className="Navsection">
      <div className="nav-wrapper">
        <div className="logo">
          <h2>ADC</h2>
        </div>
        <div className="fullExtras">
          <div className="links">
            <Link to="/">Home</Link>
            <a href="#mid">Services</a>
            <Link to="/Tracking">Tracking</Link>
            <a href="#foo">Contacts</a>
            <Link to="#">About</Link>
          </div>
          <div className="extra">
            <Link to="#">Sign in</Link>
          </div>
        </div>
        <div className='Hambuger'>
          <p>Mensu</p>
        </div>
      </div>
    </div>
  )
};
const Home = () => {
  return (
    <div>
      <HeroOne />
      <HeroTwo />
      <HeroThree />
    </div>
  )
};

const Track = () => {
  return (
    <div className="Tracking">
      <div className='Left'>
        <div className='T-wraper'>
          <h1>Track all types of goods <br/>
            to stay updated on what process <br />
          your order is going through</h1>
        </div>
      </div>
      <div className='Right'>
        <div className='Form'>
          <div className='FromWrap'>
            <div className="top-Form">
              <h1>Track my Order</h1>
              <input type={'text'} placeholder='Enter Tracking Id' />
              <div className="buttons">
                <button className='But'>Submit</button>
                <button className='But'>Advance</button>
              </div>
            </div>
            <div class="Bottom-Form">
              <div className='bound'>
                  <p>Items</p>
              </div>
              <div className='bound'>
                <p>Items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const App = () => {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route path='/' element={<Home />} exact>
            <Home />
        </Route>
        <Route path='/Tracking' element={<Track />} exact>
            <Track />
        </Route>
      </Switch>
    </Router>
  )
};
export default App;
