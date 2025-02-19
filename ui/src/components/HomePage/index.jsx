import React from 'react'
import "./homePage.css"
import Testimonials from './Testimonials.jsx';

// just dummy data
const _items = [
    {
        id: 1,
        imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: '$1800.00',
        description: '2 BHK house for rent',
        location: 'waterloo'
    },
    {
        id: 2,
        imageUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg',
        price: '$1800.00',
        description: '2 BHK house for rent',
        location: 'waterloo'
    },
    {
        id: 3,
        imageUrl: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg',
        price: '$1800.00',
        description: '2 BHK house for rent',
        location: 'waterloo'
    },
    {
        id: 4,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYJ0Y6KCRkAXnRZ5XnOcGI2C92ggGWMqClpyVkm2fN4hcQU6Ex7VCZPWMs_22MSXA5HQ&usqp=CAU',
        price: '$1800.00',
        description: '2 BHK house for rent',
        location: 'waterloo'
    },
    {
        id: 5,
        imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: '$1800.00',
        description: '2 BHK house for rent',
        location: 'waterloo'
    },
    {
        id: 6,
        imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: '$1800.00',
        description: '2 BHK house for rent',
        location: 'waterloo'
    },
    {
        id: 7,
        imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: '$1800.00',
        description: '2 BHK house for rent',
        location: 'waterloo'
    },
    {
        id: 8,
        imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: '$1800.00',
        description: '2 BHK house for rent',
        location: 'waterloo'
    },
    {
        id: 9,
        imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: '$69999.00',
        description: '4 BHK house for rent',
        location: 'waterloo'
    }
];

const ProductHome = () => {
    return (
        <>
            <div className="row p-5 align-items-center">
                <div className="col-md-6">
                    <p className='text-dark'><b>"Empower your exchanges, cultivate connections, thrive with Barters Hub today!"</b></p>
                    <div className="d-flex gap-2">
                        <a href="/productListings" className="btn view_button btn-outline-dark">Add Your Product</a>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <img src="https://images.pexels.com/photos/18662650/pexels-photo-18662650/free-photo-of-orange-lens-in-the-dark.png" class="img-fluid rounded-circle w-50" alt="" />
                </div>
            </div>

            <div className="row p-5 align-items-center">
                <h3><b>Categories: </b></h3>
                <div className="col-md-12">
                    <button type="button" className="btn btn-secondary mr-10px">
                        All Categories
                    </button>

                    <button type="button" className="btn btn-secondary mr-10px">
                        Electronics
                    </button>

                    <button type="button" className="btn btn-secondary mr-10px">
                        Furniture
                    </button>
                    <button type="button" className="btn btn-secondary mr-10px">
                        Fashion
                    </button>
                    <button type="button" className="btn btn-secondary mr-10px">
                        Toys & Games
                    </button>
                    <button type="button" className="btn btn-secondary mr-10px">
                        Property Rentals
                    </button>

                    <button type="button" className="btn btn-secondary mr-10px mt-30px ">
                        Home
                    </button>
                    <button type="button" className="btn btn-secondary mr-10px mt-30px ">
                        Pet Supplies
                    </button>
                    <button type="button" className="btn btn-secondary mr-10px mt-30px ">
                        Others
                    </button>

                </div>
            </div>

            <div>

                <div className="product-list-container p-5">
                    <h3><b>Featured Product: </b></h3>
                    <div className="scrolling-wrapper">
                        {_items.map((product) => (
                            <div key={product.id} className="product-card border-0 shadow-none">
                                <img src={product.imageUrl} alt={product.title} style={{ width: '100%', height: '200px' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">{product.price}</p>
                                    <button className='btn btn-sm view_button'>View Product</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="product-list-container p-5">
                    <h3><b>Recently Listed:</b></h3>
                    <div className="scrolling-wrapper">
                        {_items.map((product) => (
                            <div key={product.id} className="product-card border-0 shadow-none">
                                <img src={product.imageUrl} alt={product.title} style={{ width: '100%', height: '200px' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">{product.price}</p>
                                    <button className='btn btn-sm view_button'>View Product</button>
                                </div>
                            </div>
                        ))}

                    </div>
                    <h3 className=' pt-5'><b>Testimonials:</b></h3>
                    {
                        <Testimonials />
                    }
                </div>

            </div>

        </>
    )
}

export default ProductHome
