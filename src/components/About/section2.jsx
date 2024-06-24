import React from 'react'
import about_img from '../../assets/about_jpg.webp'
import './aboutus.css'
const Section2 = () => {
  return (
    <div className='d-flex justify-content-center align-items-center gap-3'>
      <div className="card mb-4"  >
        <div className="row justify-content-center">
          <div className="imga col-md-3 col-sm-12">
            <img src={about_img} className="img rounded-start imgsec"  />
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="card-body mx-5">
              <h1 className="card-title benefits fw-5" style={{ fontSize: '50px', fontWeight: 'bold' }}>
                Benefits About Online Learning Expertise</h1>
              <div className="cards ">
                <div className="card-body">
                  <h4>Online Courses</h4>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
              <div className="cards">
                <div className="card-body">
                  <h4>Earn A Certificates</h4>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
              <div className="cards">
                <div className="card-body">
                  <h4>Learn with Expert</h4>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Section2
