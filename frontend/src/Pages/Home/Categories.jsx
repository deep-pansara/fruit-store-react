import { useNavigate } from "react-router-dom"

const Categories = ({ Productdata }) => {

    const navigate = useNavigate()


    return (
        <>
            {/* <!-- Categaries --> */}
            <section className="categaries" id="categaries">
                <div className="heading">
                    <h1>Browes our Hottest <br />
                        <span>Categaries</span>
                    </h1>
                    <p className="btn" onClick={() => navigate("/products")}>See All<i className='bx bx-right-arrow-alt'></i></p>
                </div>
                {/* <!-- Container Content --> */}
                <div className="categories-container">
                    {/* <!-- Box 1 --> */}
                    <div className="box box1">
                        <img src="images/fruits/fruits.png" alt='fruits' />
                        <h2>Fruits</h2>

                        <i className='bx bx-right-arrow-alt'></i>
                    </div>
                    {/* <!-- Box 2 --> */}
                    <div className="box box2">
                        <img src="images/fruits/vegetables.png" alt='vegetables' />
                        <h2>Vegetables</h2>

                        <i className='bx bx-right-arrow-alt'></i>
                    </div>
                    {/* <!-- Box 3 --> */}
                    <div className="box box3">
                        <img src="images/fruits/dryfruits.png" alt='dryfruits' />
                        <h2>Dry Fruits</h2>

                        <i className='bx bx-right-arrow-alt'></i>
                    </div>
                    {/* <!-- Box 4 --> */}
                    <div className="box box4">
                        <img src="images/fruits/spices.png" alt='spices' />
                        <h2>Spices</h2>

                        <i className='bx bx-right-arrow-alt'></i>
                    </div>
                    {/* <!-- Box 5 --> */}
                    <div className="box box5">
                        <img src="images/fruits/fruit-juice.png" alt='fruit-juice' />
                        <h2>Fruit Juices</h2>

                        <i className='bx bx-right-arrow-alt'></i>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Categories