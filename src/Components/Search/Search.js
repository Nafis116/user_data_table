import React, { Component } from "react";
import store from "../../Redux/store";
import './Search.css';


export class Search extends Component {

  state = {
    searchLine: ''
  }

  searchLineChangeHandler = (e) => {
    this.setState({ searchLine: e.target.value });   
  }

  searchBoxSubmitHandler = (e) => {
      e.preventDefault();
  }

  searchData = () => {
    store.dispatch({
        type: "SEARCH_DATA",
        payload:{
            searchLine: this.state.searchLine
        }
    })
  }

  render() {
    const { searchLine } = this.state;
    return(
      <div className="search-box">
        <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
            <input
              value={ searchLine }
              type="text"
              className="search-box__form-input"
              placeholder="Поиск"
              onChange={this.searchLineChangeHandler}
            />
            <button
              type="submit"
              className="search-box__form-submit"
              disabled={!searchLine}
              onClick={this.searchData}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
        </form>
      </div>
    )
  }
}