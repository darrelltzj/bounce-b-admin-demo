import React, { Component } from 'react'
import styled from 'styled-components'

class Settings extends Component {
  render () {
    return (
      <StyledSettings>
        <h1>Settings</h1>
      </StyledSettings>
    )
  }
}

const StyledSettings = styled.div`
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

export default Settings
