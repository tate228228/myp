/* eslint-disable no-restricted-globals */
import unluck from './unluck.png';
import putin from './putin.png';
import flag from './flag.png';
import keks from './keks.png';
import Social from './social/social.component';
import './App.css';

import React from 'react';

const App = () => {
  React.useEffect(() => {
    document.getElementById("root").setAttribute("style", "overflow: hidden;");
  }, []);

  return (
    <div className="App">
      <section className="first">
        <h2>UNLUCKY</h2>
        <img style={{maxWidth: '50vw'}} src={unluck} alt="unlucky"/>
        <button onClick={() => {
          document.location.href = 'https://t.me/ukrainiansol'
          }}>BUY $DEAD</button>
        <Social />
        <img className='pu' style={{maxWidth: '200px'}} src={putin} alt="unlucky"/>
      </section>
      <section className="second">
        <img className='russia' src={flag} alt="unlucky"/>
        <div className='bottom'>
          <h3>FEDERATION ECONOMICS</h3>
          <p>SUPPLY: 777,777,777</p>
          <p>TICKER $DEAD</p>
          <p>BURN: UKRANIANS</p>
          <p>MINT REVOKE: PUTIN AGREED</p>
        </div>
        <img className='russia' src={flag} alt="unlucky"/>
      </section>
      <section id="add" className='visible'>
        <h3>UKRAINIAN SOLDIER</h3>
        <img style={{maxWidth: '400px'}} src={keks} alt="unlucky"/>
        <button onClick={() => {
          document.getElementById("add").classList.remove("visible")
          document.getElementById("root").setAttribute("style", "overflow: auto;");
          }}>JOIN TO SUPPORT</button>
      </section>
    </div>
  );
}

export default App;
