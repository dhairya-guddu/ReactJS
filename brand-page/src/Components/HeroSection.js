import React from 'react';

const HeroSection = () => {
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p>
                    YOUR FEET DESERVES THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES. 
                    YOUR FEET DESERVES THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
                </p>

                <div className="hero-button">
                    <button>SHOP NOW</button>
                    <button className='secondary-button'>CATEGORY</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                    <img src = "flipkart.png" alt = "flipkart" width= "32" height= "32"></img>
                    <img src = "amazon.png" alt = "amazon" width= "32" height= "32"></img>
                </div>
            </div>

            <div className="hero-image">
                <img src = "hero.jpg" alt = "hero"></img>
            </div>

        </main>

    )
}

export default HeroSection;