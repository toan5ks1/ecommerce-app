import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import logo from '../images/logo_company.png'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          QUÁ NHANH - KHÔNG HỀ NGUY HIỂM DELIVERY
        </p>
        <p className='footer-subscription-text'>
          Theo dõi những thông tin mới nhất qua email.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email của bạn'
            />
            <button type="button" className="btn btn-info">Theo dõi</button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Thông tin</h2>
            <Link to='/sign-up'>Hoạt động</Link>
            <Link to='/'>Doanh nghiệp</Link>
            <Link to='/'>Chủ đầu tư</Link>
            <Link to='/'>Chính sách</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Liên hệ</h2>
            <Link to='/'>Hotline</Link>
            <Link to='/'>Email</Link>
            <Link to='/'>Địa điểm</Link>
            <Link to='/'>Tài trợ</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Hỗ trợ</h2>
            <Link to='/'>Điều khoản sử dụng</Link>
            <Link to='/'>Chính sách vận chuyển</Link>
            <Link to='/'>Góp ý dịch vụ</Link>
            <Link to='/'>Câu hỏi thường gặp</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Truyền thông</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <div className="NavLogo" to='/'><img src={logo}/></div>
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>DELIVERY © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
