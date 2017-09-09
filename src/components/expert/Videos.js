import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Video extends Component {
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
      <StyledVideo>
        <h1>Video</h1>

        <table>
          <thead>
            <tr>
              <th>Video</th>
              <th>Viewers</th>
            </tr>
          </thead>
          <tbody>
            {this.random().map(stats => {
              return (
                <tr key={stats._id}>
                  <td>
                    <Link to={`/videos/${stats._id}`}>
                      Video&nbsp;{stats._id}
                    </Link>
                  </td>
                  <td>{stats.sold}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </StyledVideo>
    )
  }
}

const StyledVideo = styled.div`
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
    align-items: flex-start;
    width: 100%;
    height: 100%;
  }
  table {
    width: 50%;
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

export default Video
