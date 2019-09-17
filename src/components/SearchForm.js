import React, { Component } from 'react';

class SearchForm extends Component {
  state = {
    category: 'general'
  };

  changeCategory = e => {
    this.setState(
      {
        category: e.target.value
      },
      // This callback is to solve the delay
      () => this.props.getNews(this.state.category)
    );
  };

  render() {
    return (
      <div className="seeker row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h3>Buscar por categoría</h3>
            <div className="input-field col s12 m8 offset-m2">
              <select onChange={this.changeCategory}>
                <option value="general">General</option>
                <option value="business">Negocios</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="health">Salud</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="technology">Tecnología</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchForm;
