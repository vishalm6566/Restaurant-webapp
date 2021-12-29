import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
    return (

        <>
            <section className="main-card--cointainer">
                {menuData.map((currEle) => {
                    const {id, name, description, image, price} = currEle;  //Destructuring
                    return (
                        <>
                            <div className="card-container" key = {id}>
                                <div className="card">
                                    <div className="card-body">
                                        {/* <span className="card-number card-circle subtle">{id}</span> */}
                                        {/* <span className="card-author subtle">{name}</span> */}
                                        <h2 className="card-title">{name.toUpperCase()}</h2>
                                        <span className="card-description subtle">{description}</span>
                                        <div className="card-read">{price}</div>
                                    </div>
                                    <div><img src={image} alt="image loading here" className="card-media"/></div>
                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div>
                        </>
                    )

                })}
            </section>
        </>
    )
}

export default MenuCard
