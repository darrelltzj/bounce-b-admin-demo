import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Stats extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.random = this.random.bind(this)
  }
  random () {
    let arr = []
    for (var i = 1; i < 10; i++) {
      arr.push({
        _id: i,
        sold: Math.floor(Math.random() * 100)
      })
    }
    return arr
  }
  render () {
    return (
      <StyledStats>
        <h1>Stats</h1>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Sold</th>
            </tr>
          </thead>
          <tbody>
            {this.random().map(stats => {
              return (
                <tr key={stats._id}>
                  <td>
                    <Link to={`/products/${stats._id}`}>
                      Product&nbsp;{stats._id}
                    </Link>
                  </td>
                  <td>{stats.sold}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <table>
          <thead>
            <tr>
              <th>Article</th>
              <th>Readers</th>
            </tr>
          </thead>
          <tbody>
            {this.random().map(stats => {
              return (
                <tr key={stats._id}>
                  <td>
                    <Link to={`/articles/${stats._id}`}>
                      Article&nbsp;{stats._id}
                    </Link>
                  </td>
                  <td>{stats.sold}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </StyledStats>
    )
  }
}

const StyledStats = styled.div`
  {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
    ${''}
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  table {
    width: 50%;
    border: 1px solid black;
  }
  td {
    width: 50%;
    padding: 8px;
    text-align: center;
  }
  button {
    padding: 8px
  }
`

export default Stats
