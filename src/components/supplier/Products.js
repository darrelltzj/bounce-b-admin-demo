import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Products extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.random = this.random.bind(this)
  }
  random () {
    let arr = []
    let tags = ['health', 'mushroom', 'ginseng', 'fitness', 'life']
    for (var i = 1; i < 15; i++) {
      arr.push({
        _id: i,
        name: `Product ${i}`,
        price: Math.floor(Math.random() * 100).toFixed(0),
        tag: tags[Math.floor(Math.random() * tags.length)]
      })
    }
    return arr
  }
  render () {
    return (
      <StyledProducts>
        <h1>Products</h1>
        <div className='buttonDiv'>
          <button>Add Product</button>
        </div>
        <ul>
          {this.random().map(product => {
            return (
              <li key={product._id}>
                <div className='productContainer'>
                  <div className='buttonDiv'>
                    <button>Edit</button>
                  </div>
                  <Link to={`/products/${product._id}`}>
                    <div className='hero' />
                    <div>{product.name} - ${product.price}</div>
                    <div>#<i>{product.tag}</i></div>
                  </Link>
                </div>
              </li>
            )
          })}
        </ul>
      </StyledProducts>
    )
  }
}

const StyledProducts = styled.div`
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
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  li {
    width: 25%;
    height: 40%;
  }
  .productContainer {
    width: 100%;
    height: 100%;
    border: 1px solid black;
  }
  .hero {
    width: 100%;
    height: 60%;
    background-color: lightGreen;
  }
  .buttonDiv {
    display:flex;
    flex-flow:row;
    justify-content: flex-end;
  }
`

export default Products
