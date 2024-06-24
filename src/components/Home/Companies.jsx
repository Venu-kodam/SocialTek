import React from 'react'
import company1 from "../../assets/home-brand01.webp"
import company2 from "../../assets/home-brand02.webp"
import company3 from "../../assets/home-brand03.webp"
import company4 from "../../assets/home-brand04.webp"
import './style.css'
const Companies = () => {
    return (
        <div className='companies container'>
            <h2 className='text-center my-5'>Trusted Over 300+ Companies</h2>
            <div className='row align-items-center justify-content-center  gap-2'>
                <div className="cardss col-12 col-md my-2 border border-tertiary" style={{ width: '14rem' }}>
                    <img src={company1} className="card-img-top" alt="..." />
                </div>
                <div className="cardss col-12 col-md my-2 border border-tertiary" style={{ width: '14rem' }}>
                    <img src={company2} className="card-img-top" alt="..." />
                </div>
                <div className="cardss col-12 col-md my-2 border border-tertiary" style={{ width: '14rem' }}>
                    <img src={company3} className="card-img-top" alt="..." />
                </div>
                <div className="cardss col-12 col-md my-2 border border-tertiary" style={{ width: '14rem' }}>
                    <img src={company4} className="card-img-top" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Companies