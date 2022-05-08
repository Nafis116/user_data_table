import React, { Component }  from "react";
import { Search } from "../Components/Search/Search";
import { Table } from "../Components/Table.js/Table";
import ReactPaginate from 'react-paginate';
import store from "../Redux/store";

import './MainPage.css';

export class MainPage extends Component {
  state = {
    dataArr: [],
    searchLine: "",
    pageCount: 10,
    currentPage: 0
  }

  omponentDidMount(){    
    document.addEventListener("keydown", this.escFunction, false); 

    const state = store.getState();
    this.setState({ 
      dataArr: state.dataArr 
    });

    store.subscribe(() => {
      const state = store.getState();
      this.setState({ 
        dataArr: state.dataArr 
      });
    });
    console.log(this.state.dataArr)

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      this.setState({
        dataArr: data
      })
    });
  };

  pageChangeHandler = ({selected}) => (
    this.setState({currentPage: selected})
  )

  render() {
    const pageSize = 10;
    return (
      <div className="MainPage">
        <Search/>
        <Table/>
        {
          this.state.dataArr.length > pageSize
          ? <ReactPaginate
          previousLabel={'Назад'}
          nextLabel={'Далее'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.pageChangeHandler}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          /> : null
        }
        
      </div>
    )
  }
}