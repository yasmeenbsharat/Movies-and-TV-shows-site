import React from 'react'

export default function Footer() {
  return (
 <div><footer>
    <div className="container pt-5">
      <div className="row">
        <div className="item">
          <img src="./images/footerimage.svg" className='w-50 h-50' alt />
          <p>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
        </div>
        <div className="item">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Offers &amp; Discounts</a></li>
            <li><a href="#">Get Coupon</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="item">
          <h3>New Products</h3>
          <ul>
            <li><a href="#">Woman Cloth</a></li>
            <li><a href="#">Fashion Accessories</a></li>
            <li><a href="#">Man Accessories</a></li>
            <li><a href="#">Rubber made ToysQuick Links</a></li>
          </ul>
        </div>
        <div className="item">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Frequently Asked Questions</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#"> Privacy Policy</a></li>
            <li><a href="#">Report a Payment Issue</a></li>
          </ul>
        </div>
      </div>
      <div className="copy-right">
        <p>Copyright ©2023 All rights reserved | This template is made with <i className="fa-solid fa-heart" />by <a href="https://colorlib.com/ " target="_blank">Colorlib</a></p>
       
      </div>
    </div>
  </footer>
</div>

  )
}
