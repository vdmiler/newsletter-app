import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsDetail } from '../../store/slices/newsDetailSlice';
import { fetchImageData, cleaningImageData } from '../../store/slices/imageDataSlice';
import { coloredFirstWord, dateFormatting, linkCropping } from '../../functions';
import NewsImg from '../NewsImg/NewsImg';
import Loader from '../UI/Loader/Loader';
import noImage from '../../img/no-image.png';
import './NewsDetail.scss';

const NewsDetail = props => {
   const { newsDetail, loadingDetail, errorDetail } = useSelector(state => state.newsDetail);
   const { imageData, loadingImage, errorImage } = useSelector(state => state.imageData)
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchNewsDetail(props.match.params.id))
      dispatch(cleaningImageData())
      if (props.location.state !== 0) {
         dispatch(fetchImageData(props.location.state))
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const newsTitle = newsDetail && coloredFirstWord(newsDetail?.title.rendered),
      nativeString = newsDetail && newsTitle?.string,
      colorWord = newsDetail && newsTitle?.word;

   const link = newsDetail && newsDetail?.acf.source,
      source = newsDetail && linkCropping(link);

   const day = newsDetail && dateFormatting(newsDetail?.date).day,
      month = newsDetail && dateFormatting(newsDetail?.date).month;

   return (
      <div className="detail">
         <div className="detail__container _container">
            {
               loadingDetail ? <Loader />
                  :
                  errorDetail ? <h2 className="error-message">An error occerd: {errorDetail}</h2>
                     :
                     <div className="detail__body">
                        <div className="detail__caption">
                           <h1 className="detail__title">
                              {nativeString} <span style={{ color: '#004fec' }}>{colorWord}</span>
                           </h1>
                           <a href={link} className="detail__source">{source}</a>
                           <div className="template__date detail__date">
                              <span className="template__day detail__day">{day}</span>
                              <span className="template__separator detail__separator">/</span>
                              <span className="template__month detail__month">{month}</span>
                           </div>
                        </div>
                        <div className="detail__description">
                           {
                              loadingImage ? <Loader />
                                 :
                                 errorImage ? <h2 className="error-message">An error occerd: {errorImage}</h2>
                                    :
                                    <NewsImg
                                       imgUrl={imageData !== null ? imageData?.media_details.sizes.full.source_url : noImage}
                                    />
                           }
                           <div className="detail__content" dangerouslySetInnerHTML={{ __html: newsDetail?.content.rendered }} />
                        </div>
                     </div>
            }
         </div>
      </div>
   );
}

export default NewsDetail;