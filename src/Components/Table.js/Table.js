import React, { Component } from "react";
import store from "../../Redux/store";
import sort from "./img/sort.png";
import "./Table.css";

export class Table extends Component {
  state = {
    dataArr: [],
    searchLine: "",
    tHead:['ID', 'Заголовок', 'Описание'],
  }

  componentDidMount() {
      const state = store.getState();
      this.setState({
        searchLine: state.searchLine
      });

      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        this.setState({
          dataArr: data
        })
      });
  }

  render() {
    return(
      <div className="main-table">
          <table>
            <thead className="main-table__head">
              <tr className="thead__tr">
                {
                  this.state.tHead.map((item) => (
                    <th className="table__item">{item}<img className="table-head__sort" src={sort} alt=""/></th>
                  ))
                }
              </tr>
            </thead>
            <tbody className="main-table__body">              
                {
                  this.state.dataArr.map((item) => (
                    <tr key={item.id} className="main-table__body-tr">
                      <td className="table__item table__item-first">{item.id}</td>
                      <td className="table__item table__item-second">{item.title}</td>
                      <td className="table__item table__item-third">{item.body}</td>
                    </tr>
                  ))
                }              
            </tbody>
          </table>
          
      </div>
    )
  }
}