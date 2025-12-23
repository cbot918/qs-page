import React from 'react';
import './App.css';
import logo from './assets/logo.png';

// 將 MembershipCard 寫在同一個檔案或分開皆可
const MembershipCard = () => (
  <div className="membership-card">
    <h2 className="m-title">Premium<br />Membership</h2>
    <div className="m-price">$59.99</div>
    <div className="m-period">PER MONTH</div>
    {/* <div className="m-yearly">
      <div className="m-diamond"></div>
      <span>$Per Year</span>
    </div> */}
    {/* <button className="m-btn">Buy Now</button> */}
    <p className="m-desc">
      Very suitable for options beginners and investment strategists to make appropriate 
      asset allocation based on your fund size through our weekly selection list.
    </p>
  </div>
);

function App() {
  return (
    <div className="container">
      <img src={logo} alt="logo" className="logo" />

      <h1 className="title">Efficient analysis of precision design algorithms</h1>
      <p className="description">
        We are committed to creating advanced algorithms to analyze and calculate
        the best entry and exit times through big data, in order to improve the
        performance of your investment portfolio.
      </p>
      
      <div className='why_qs'>
        <h2>Why choose QS</h2>
        <div className='why_qs_container'>
          <div className='container_left'>
            <div className='_card'>
              <div className='_title'>Investment tools</div>
              <div className='_body'>
                Years of investment experience have made investing simple and using tools user-friendly. QS aims to provide higher returns than traditional investment options.
              </div>
            </div>
            <div className='container_left_down'> 
              <div className='_card'>
                <div className='_title'>Passive income</div>
                <div className='_body'>The roller strategy focuses on long-term stability and risk controllability.</div>
              </div>
              <div className='_card'>
                <div className='_title'>Reduce anxiety</div>
                <div className='_body'>Aims to reduce transaction related stress and anxiety.</div>
              </div>
            </div>
          </div>
          <div className='container_right'>
            <div className='_card'>
              <div className='_title'>Risk controllable</div>
              <div className='_body'>
                Intended to minimize risks and avoid gambling like behavior. Perfect for cautious members.
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="membership-section">
        <MembershipCard />
      </section>

      <footer className="contact">
        <div>Email: <a href="mailto:info@quantstrategyllc.com">info@quantstrategyllc.com</a></div>
        <div>Discord: <a href="https://discord.gg/6AkG9y98EM">https://discord.gg/6AkG9y98EM</a></div>
      </footer>
    </div>
  );
}

export default App;