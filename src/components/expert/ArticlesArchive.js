import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Articles extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.random = this.random.bind(this)
  }
  random () {
    let arr = []
    for (var i = 1; i < 100; i++) {
      arr.push({
        _id: i,
        product: i,
        quantity: Math.floor(Math.random() * 100),
        customer: Math.floor(Math.random() * 4),
        fulfilled: i % 3 === 0
      })
    }
    return arr
  }
  render () {
    return (
      <StyledArticles>
        <h1>Articles</h1>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Customer</th>
              <th>Fulfilled</th>
            </tr>
          </thead>
          <tbody>
            {this.random().map(article => {
              return (
                <tr key={article._id}>
                  <td>{article._id}</td>
                  <td>
                    <Link to={`/products/${article.product}`}>
                      Product&nbsp;{article.product}
                    </Link>
                  </td>
                  <td>{article.quantity}</td>
                  <td>
                    <a href={`https://bouncebuserdemo.herokuapp.com/profiles/${article.customer}`}>
                      Customer&nbsp;{article.customer}
                    </a>
                  </td>
                  <td>{article.fulfilled ? <button>Fulfill</button> : 'Sent to customer'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </StyledArticles>
    )
  }
}

const StyledArticles = styled.div`
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
    width: 100%;
    ${''}
    barticle: 1px solid black;
  }
  td {
    padding: 8px;
    text-align: center;
  }
  button {
    padding: 8px
  }
`

export default Articles
