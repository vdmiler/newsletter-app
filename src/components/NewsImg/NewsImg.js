import React from 'react';
import './NewsImg.scss';

const NewsImg = ({ imgUrl = '', imgDesc = '' }) => {
   return (
      <div className="detail__picture">
         <img src={imgUrl} alt={imgDesc} className="detail__img" />
      </div>
   );
}

export default NewsImg;