import React from 'react'
import "./whyUs.css"

const WhyUs = () => {
    return (
            <section className="whyus">
                <div className="container">
                    <h2 className='pb-3'>Why Kratom</h2>
                    <div className="benefitsContainer">
                        <div className="benefititem">
                        <i class="img fa-solid fa-box-open"></i>
                            <h3 className='mt-3'>Free Delivery</h3>
                            <p>Orders over $100 delivered free via USPS priority Mail</p>
                        </div>
                        <div className="benefititem">
                        <i class="img fa-solid fa-truck"></i>
                            <h3 className='mt-3'>Return Item</h3>
                            <p>Pay before 1 PM PST, order goes out same biz day.</p>
                        </div>
                        <div className="benefititem">
                        <i class="img fa-solid fa-headphones"></i>
                            <h3 className='mt-3'>The Help</h3>
                            <p>Phone & Email support. Your concierge service.</p>
                        </div>
                        <div className="benefititem">
                        <i class="img fa-sharp fa-solid fa-hand-holding-heart"></i>
                            <h3 className='mt-3'>More Than 9800 Satisfied Reviews</h3>
                            <p>Phone & Email support. Your concierge service.</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default WhyUs