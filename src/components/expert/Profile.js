import React, { Component } from 'react'

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
      <div>
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
      </div>

    )
  }
}

export default Profile
