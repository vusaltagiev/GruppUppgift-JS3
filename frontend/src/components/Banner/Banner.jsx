import React from 'react'
import './Banner.scss'
import Logo from "../../images/Logo.svg";
import Banner1 from '../../images/Banner1.png'


const Banner = () => {
  return (
    <section className='details-banner' style={{backgroundImage: `url(${Banner1})`}}>
        <div className="banner">
            <img src={Logo} alt="" />
            <h4>Vi prioriterar komfort</h4>
            <p> På jobbet eller i hemmet </p>
        </div>
    </section>
  )
}

export default Banner
