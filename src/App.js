import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import SearchForm from './components/SearchForm';
import Footer from './components/Footer';

const API_KEY = process.env.REACT_APP_SECRET_KEY;

class App extends Component {
  state = {
    news: []
  };

  componentDidMount() {
    this.getNews();
  }

  getNews = async (category = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${API_KEY}`;
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
          <SearchForm getNews={this.getNews} />
          <NewsList news={this.state.news} />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
