import React from 'react';
import New from './New';

const NewsList = ({ news }) => (
  <div className="row">
    {news.map((_new, index) => (
      <New key={index} _new={_new} />
    ))}
  </div>
);

export default NewsList;
