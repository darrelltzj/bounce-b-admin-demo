import React, { Component } from 'react'
import styled from 'styled-components'

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Lingzhi Company',
      bio: 'Started in 1628, the Lingzhi Company has been passed down from mother to daughter, all the while championing the virtues of health in an uncertain world',
      edit: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  handleChange (category, value) {
    let obj = {}
    obj[category] = value
    this.setState(obj)
  }

  toggleEdit () {
    this.setState({ edit: !this.state.edit })
  }

  render () {
    return (
      <StyledProfile>
        <h1>Profile</h1>
        <table>
          <tbody>
            <tr>
              <td>
                <h2>Name</h2>
              </td>
              <td>
                {this.state.edit ? (
                  <input
                    type='text'
                    placeholder='Name'
                    value={this.state.name}
                    onChange={(e) => { this.handleChange('name', e.target.value) }}
                    style={{width: '50%'}}
          />
        ) : <h3>{this.state.name}</h3>
          }
              </td>
            </tr>

            <tr>
              <td>
                <h2>Bio</h2>
              </td>
              <td>
                {this.state.edit ? (
                  <textarea
                    placeholder='Bio'
                    value={this.state.bio}
                    onChange={(e) => { this.handleChange('bio', e.target.value) }}
                    style={{width: '480px', height: '48px'}}
          />
          ) : <p>{this.state.bio}</p>
          }
              </td>
            </tr>

            <td>
              <input type='submit' value={this.state.edit ? 'Save' : 'Edit'} onClick={this.toggleEdit} />
            </td>
          </tbody>
        </table>
      </StyledProfile>
    )
  }
}

const StyledProfile = styled.div`
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
`

export default Profile
