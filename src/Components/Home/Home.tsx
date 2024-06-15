import React from 'react'
import './home.scss'
import opa from './Ellipse 2.svg'
import opa2 from './story.svg'

const Home = () => {
  return (
    <>
    <div className="hero container">
        <h3>Who we are and what we do</h3>
        <p>Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden</p>
    </div>

    <div className="text__img container">
        <div className="txt">
            <h3>Seedra helps to grow fast and efficiant</h3>
            <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and     professional instructions created by PhD Helga George <br /> <br />

                Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. 
                Your easy growing experience is our guarantee
                Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more <br /> <br />

                Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product
  </p>
        </div>

            <div className="img">
                {/* <img src= {aylana} alt="aylana" /> */}
                <img src= {opa} alt="opa" />
            </div>
    </div>

    <div className="ourstory container">

        <div className="img ">
            <img src= {opa2} alt="opa2" />
        </div>

        <div className="txt">
            <h3>Our story</h3>
            <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George <br /> <br />

Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. <br /> 
Your easy growing experience is our guarantee
Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more <br /> <br />

Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
        </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Home