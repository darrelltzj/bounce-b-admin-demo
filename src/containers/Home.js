import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      user: 'supplier'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (category, value) {
    let obj = {}
    obj[category] = value
    this.setState(obj)
  }

  render () {
    return (
      <div style={style.home}>
        <div style={style.choose}>
          <div onClick={() => this.handleChange('user', 'supplier')} style={this.state.user === 'supplier' ? {...style.user, ...style.chosenUser} : style.user}>Supplier</div>
          <div onClick={() => this.handleChange('user', 'expert')} style={this.state.user === 'expert' ? {...style.user, ...style.chosenUser} : style.user}>Expert</div>
          <div onClick={() => this.handleChange('user', 'admin')} style={this.state.user === 'admin' ? {...style.user, ...style.chosenUser} : style.user}>Admin</div>
        </div>

        <div style={{width: '50%', margin: '16px'}}>
          <input
            type='email'
            placeholder='Email'
            value={this.state.email}
            onChange={(e) => { this.handleChange('email', e.target.value) }}
            style={{width: '100%'}}
          />
        </div>

        <div style={{width: '50%', margin: '16px'}}>
          <input
            type='password'
            placeholder='Password'
            value={this.state.password}
            onChange={(e) => { this.handleChange('password', e.target.value) }}
            style={{width: '100%'}}
          />
        </div>

        <div style={{width: '50%', margin: '16px'}}>
          <Link to={`/${this.state.user}`}>
            <input
              type='submit'
              value='Log in'
              style={{width: '100%'}}
            />
          </Link>
        </div>
      </div>
    )
  }
}

const style = {
  home: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  choose: {
    display: 'flex',
    flexFlow: 'row',
    width: '50%',
    border: '1px solid black'
  },
  chosenUser: {
    backgroundColor: 'black',
    color: 'white'
  },
  user: {
    width: '33.3333%',
    textAlign: 'center'
  }
}

export default Home
