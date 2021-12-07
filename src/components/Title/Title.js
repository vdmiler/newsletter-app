import React from 'react';
import { coloredFirstWord } from '../../functions';
import './Title.scss';

const Title = props => {
   let title = coloredFirstWord(props.label);
   return (
      <h1 className="news__title">
         {title.string} <span style={{ color: '#004fec' }}>{title.word}</span>
      </h1>
   );
}

export default Title;