import React from 'react';
import './Footer.css';
import rupay from "../../Assets/image/rupay.jpeg"
import master from "../../Assets/image/master.jpeg"
import visa from "../../Assets/image/visa.jpeg"
import american from "../../Assets/image/american.jpeg"
import paytm from "../../Assets/image/paytm.jpeg"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <h2>VIRAT11</h2>
            <p>VIRAT11 is a fantasy sports game that exceeds all expectations</p>
          </div>
          <div className="footer-nav">
            <a href="/">HOME</a>
          
            <a href="/Howtoplay">FEATURES</a>
            <a href="/Contact">CONTACT</a>
            <a href="/user-says">USERS </a>
            <a href="/TermsAndCondition">Terms And Condition</a>
            <a href="/privacy_policy">Privacy Policy</a>
            <a href="/Disclamier">Disclaimer</a>
            <a href="/Legalities">Legalities</a>
            <a href="/ResponsibleGaming">ResponsibleGaming</a>
          </div>
          <div className="footer-disclaimer">
            <p>18+</p>
            <p>DISCLAIMER</p>
            <p>Geographical Restrictions Location Compliance: Our platform is not accessible from states where DFS is prohibited, including Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana.</p>
            <p>This game involves an element of financial risk and may be addictive.</p>
            <p>Please play responsibly at your own work.</p>
            <p>© 2024 VIRAT11. All rights reserved.</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-payment">
            <img src={rupay} alt="RuPay" />
            <img src={master} alt="MasterCard" />
            <img src={visa} alt="Diners Club" />
            <img src={american} alt="AMEX" />
            <img src={paytm} alt="Paytm" />
           
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
