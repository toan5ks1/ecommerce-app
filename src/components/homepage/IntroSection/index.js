import React, {useState} from 'react'
import {IntroContainer,
     IntroBg,
     IntroContent,
     IntroH1,
     IntroP,
     NavBtn,
     NavBtnLink
    } from './IntroElements'
import corou1 from "../images/coroutine1.jpg"
import corou2 from "../images/coroutine2.jpg"
import corou3 from "../images/coroutine3.jpg"
//import 'bootstrap/dist/css/bootstrap.css';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
export const IntroSection = () => {
    
    return (
    
        <IntroContainer>
            
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={corou1} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={corou2} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={corou3} alt="Third slide"/>
                        </div>
                        
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            
            <IntroContent>
                <IntroH1>Fast &amp; Furious Love </IntroH1>
                <IntroP>
                    Đăng kí tài khoản hôm nay và nhận ngay một người yêu miễn phí!
                </IntroP>
                <NavBtn>
                    <NavBtnLink to='signin'>Bắt đầu!</NavBtnLink>
                </NavBtn>
            </IntroContent>

        </IntroContainer>
   
    )
}
