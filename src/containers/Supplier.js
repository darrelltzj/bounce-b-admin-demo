import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Orders from '../components/supplier/Orders'
import Products from '../components/supplier/Products'
import Stats from '../components/supplier/Stats'
import Profile from '../components/supplier/Profile'
import Settings from '../components/supplier/Settings'
import constants from '../constants/constants'
import { capitalizeString } from '../utils/utils'

const StyledSupplier = styled.div`
  {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: calc(100vh - 48px);
  }
  .leftNav {
    width: 20%;
    height: 100%;
  }
  .main {
    width: 80%;
    height: 100%;
  }
  li {
    padding: 16px;
    font-size: 1.5em;
    cursor: pointer;
  }
`

class Supplier extends Component {
  constructor (props) {
    super(props)
    this.state = {
      active: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleTab = this.handleTab.bind(this)
  }

  handleChange (category, value) {
    let obj = {}
    obj[category] = value
    this.setState(obj)
  }

  handleTab () {
    switch (this.state.active) {
      case 0:
        return <Orders />
      case 1:
        return <Products />
      case 2:
        return <Stats />
      case 3:
        return <Profile />
      case 4:
        return <Settings />
      default:
        return <div />
    }
  }

  render () {
    return (
      <StyledSupplier>
        <div className='leftNav'>
          <ul>
            {constants.tabs.supplier.map((tab, index) => {
              return <li
                key={tab}
                onClick={() => this.handleChange('active', index)}
                style={this.state.active === index ? {backgroundColor: 'black', color: 'white'} : null}>
                {capitalizeString(tab)}
              </li>
            })}
          </ul>
        </div>
        <div className='main'>{this.handleTab()}</div>
      </StyledSupplier>
    )
  }
}

export default connect(null)(Supplier)
