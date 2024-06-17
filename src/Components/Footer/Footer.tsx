import { AiFillFacebook } from "react-icons/ai"; 
import { AiFillInstagram } from "react-icons/ai"; 
import React from 'react'
import './Footer.scss'
import LOgo from './logo.svg'

export const Footer = () => {
  return (
    <>
    
    <footer>

        <div className="foter_link container">
            <p>ALL PRODUCTS</p>
            <p>ABOUT SEEDRA</p>
            <p>OUR BLOG</p>
            <img src= {LOgo} alt="img.footer" />
            <p>Terms&Conditions</p>
            <p>Privacy Policy</p>
            
        </div>
        <div className="line container"></div>

            <div className="foter_bottom container">
                <p><AiFillInstagram /><AiFillFacebook /></p>
                <p>All rights reserved</p>
            </div>
    </footer>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
