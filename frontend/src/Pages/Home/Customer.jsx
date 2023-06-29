import React from 'react'

const Customer = () => {
  return (
    <>
     {/* <!-- Customers --> */}
    <section className="customers" id="customers">
        <h2>Why Customer's Love Us ?</h2>
        {/* <!-- Customer Content --> */}
        <div className="costomers-container">
            {/* <!-- Review 1 --> */}
            <div className="box">
                <i className='bx bxs-quote-alt-left'></i>
                <div className="stars">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam amet animi ea optio similique! Sint, recusandae.</p>
                <div className="review-profile">
                    <img src="./images/profiles/p1.jpg" alt=""/>
                    <h3>John jonathan</h3>
                </div>
            </div>
            {/* <!-- Review 2 --> */}
            <div className="box">
                <i className='bx bxs-quote-alt-left'></i>
                <div className="stars">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam amet animi ea optio similique! Sint, recusandae.</p>
                <div className="review-profile">
                    <img src="./images/profiles/p2.jpg" alt=""/>
                    <h3>Michel Smith</h3>
                </div>
            </div>
            {/* <!-- Review 3 --> */}
            <div className="box">
                <i className='bx bxs-quote-alt-left'></i>
                <div className="stars">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam amet animi ea optio similique! Sint, recusandae.</p>
                <div className="review-profile">
                    <img src="./images/profiles/p3.jpg" alt=""/>
                    <h3>Joe Doe</h3>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Customer