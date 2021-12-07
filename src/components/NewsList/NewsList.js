import React from 'react';
import { withRouter } from 'react-router';
import NewsItem from '../NewsItem/NewsItem';
import './NewsList.scss';
import { NavLink } from 'react-router-dom';
import Title from '../Title/Title';
import Loader from '../UI/Loader/Loader';

const NewsList = ({ news, newsCount = 18, title, loader, error }) => {
   return (
      <div className="news">
         <div className="news__container _container">
            <Title label={title} />
            <ul className="news__list">
               {
                  loader ? <Loader />
                     :
                     error ? <h2>An error occerd: {error}</h2>
                        :
                        news && news.filter((_, i) => i < newsCount).map((item, index) => {
                           return (
                              <NewsItem
                                 key={index}
                                 id={item.id}
                                 title={item.title.rendered}
                                 date={item.date}
                                 imageId={item.featured_media}
                                 src={item.acf.source}
                              />
                           )
                        })
               }
            </ul>
            {title === 'Всегда свежие новости' ? <NavLink className="news__link" exact to="/news">Быть в курсе событий</NavLink> : null}
         </div>
      </div>
   );
}

export default withRouter(NewsList);