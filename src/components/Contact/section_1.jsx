import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Section1 = () => {
  return (
    <>
    <div className='container-fluid  aboutus'>
            <section className='banner'>
                <div className='container banner2'>
                    <div className='row justify-content-center  align-items-center'>
                        <div className='col-lg-12 banner-right text-right'>
                            <h1 className='text-white abus text-right' style={{ fontSize: '42px' }}>Contact Us</h1>
                            <p className='text-white' style={{ fontSize: '14px', marginTop: '20px', marginBottom: '20px' }}>In the history of modern time, there is probably no one greater leap forward than the building.</p>
                            <div className="nav-link col-lg-12">
                                <span className='box'>
                                    <Link href="" className='text-white anchor' to="/">Home</Link>
                                    <i className="bi bi-arrow-right text-light mx-2" ></i>
                                    <Link href="" className='text-white anchor' to="/contact">Contact</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default Section1
