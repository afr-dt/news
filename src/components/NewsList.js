import React from 'react';
import New from './New';
import PropTypes from 'prop-types';

const NewsList = ({ news }) => (
  <div className="row">
    {news.map((_new, index) => (
      <New key={index} _new={_new} />
    ))}
  </div>
);

NewsList.propTypes = {
  news: PropTypes.array.isRequired
};

export default NewsList;
