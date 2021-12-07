import React from 'react';
import { withRouter } from 'react-router';
import { dateFormatting, linkCropping } from '../../functions';
import './NewsItem.scss';

const NewsItem = ({ id, title, date, src, history, imageId }) => {
   const link = linkCropping(src);
   const day = dateFormatting(date).day;
   const month = dateFormatting(date).month
   return (
      <div className="news__item">
         <h2 className="news__heading" onClick={() => history.push('/news/' + id, imageId)}>
            {title}
         </h2>
         <div className="news__section">
            <a href={src} className="news__source">{link}</a>
            <div className="template__date news__date">
               <span className="template__day news__day">{day}</span>
               <span className="template__separator news__separator">/</span>
               <span className="template__month news__month">{month}</span>
            </div>
         </div>
      </div>
   );
}

export default withRouter(NewsItem);