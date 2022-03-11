import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import tracking from './images/tracking.jpg'
import finding from './images/find.png'
//import 'bootstrap/dist/css/bootstrap.min.css';


function Cards() {
  return (
    <div className='cards'>
      <h1>Dịch vụ nổi bật</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={tracking}
              text='Tra cứu'
              label='Theo dõi vận đơn'
              path='/tracuu'
            />
            <CardItem
              src={finding}
              text='Tìm kiếm'
              label='Tìm kiếm bưu cục'
              path='/buucuc'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
