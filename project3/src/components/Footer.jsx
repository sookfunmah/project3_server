import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className='footer_categories'>
        <li><Link to="/posts/categories/SoftwareEngineer">Software Engineer</Link></li>
        <li><Link to="/posts/categories/DataAnalytics">Data Analytics</Link></li>
        <li><Link to="/posts/categories/DataScience">Data Science</Link></li>
        <li><Link to="/posts/categories/DigitalMarketing">Digital Marketing</Link></li>
        <li><Link to="/posts/categories/ProductManagement">Product Management</Link></li>
      </ul>
      <div className='footer_copyright'>
        <small>All Rights Reserved &copy; Copyright, General Assembly.</small>
      </div>

    </footer>
  )
}

export default Footer