import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Orders extends Component {
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
        customer: Math.floor(Math.random() * 100),
        fulfilled: i % 3 === 0
      })
    }
    return arr
  }
  render () {
    return (
      <StyledOrders>
        <h1>Orders</h1>
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
            {this.random().map(order => {
              return (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>
                    <Link to={`/products/${order.product}`}>
                      Product&nbsp;{order.product}
                    </Link>
                  </td>
                  <td>{order.quantity}</td>
                  <td>
                    <a href={`https://bouncebuserdemo.herokuapp.com/profile/${order.customer}`} target='_blank' rel='noopener noreferrer'>
                      Customer&nbsp;{order.customer}
                    </a>
                  </td>
                  <td>{order.fulfilled ? <button style={{ cursor: 'pointer' }}>Fulfill</button> : 'Sent to customer'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </StyledOrders>
    )
  }
}

const StyledOrders = styled.div`
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
    padding: 0 10%;
  }
  table {
    width: 100%;
    ${''}
    border: 1px solid black;
  }
  td {
    padding: 8px;
    text-align: center;
  }
  button {
    padding: 8px
  }
`

export default Orders
