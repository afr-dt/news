import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';

const API_KEY = process.env.REACT_APP_SECRET_KEY;

class App extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    this.getNews();
  }

  getNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=business&apiKey=${API_KEY}`;
    const response = await fetch(url);
    const news = await response.json();
    this.setState({
      news: news.articles
    });
  };

  render() {
    return (
      <Fragment>
        <Header title="Noticias México 🇲🇽" />
        <div className="container white news-container">
          <NewsList news={this.state.news} />
        </div>
      </Fragment>
    );
  }
}

export default App;
