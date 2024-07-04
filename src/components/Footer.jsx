import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="footer-title">Designed and developed by Vivek Kumar Mishra</h1>
      <h3 className="footer-mail">mishravivek9569@gmail.com</h3>
      <p className="footer-rights">All rights reserved ©2024</p>
      <div className='social-links'>
        <a href="https://www.instagram.com/v__4__vivek_/"  target="_blank">
          <img src="/instagram.png" alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.facebook.com/VivekMishra2003/"  target="_blank">
          <img src="/facebook.png" alt="Facebook" className="social-icon" />
        </a>
        <a href="https://x.com/thevivekmishra_" target="_blank">
          <img src="/twitter.png" alt="Twitter" className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
