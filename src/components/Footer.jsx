import React from 'react'
import logoKasa from "../assets/images/footer-logo.png"
import "./Footer.scss"

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-logo">
              <img src={logoKasa} alt="Logo Kasa" className="footer-logo-content" />
        </div>
          <p className="footer-text">© 2020 Kasa. All rights reserved</p>
        </footer>
  )
}
