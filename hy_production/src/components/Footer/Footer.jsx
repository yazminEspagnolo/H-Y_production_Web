import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='logo-container'>
                <img src="/images/hy.png" alt="Logo" className='logo'/>
            </div>
            <div className='web-container'>
                <p className='contact-text'>Powered by H&Y Production</p>
            </div>
            <div>
                <a href="https://www.instagram.com/hy_producciones?igsh=d3d2ZTM4Y25lcGI=" rel="Instagram" className='instagram-link'>
                    <img src="/images/instagram.avif" alt="Instagram" className='instagram-icon'/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;


