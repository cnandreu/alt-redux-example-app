
import React from 'react'
import AltAppContainer from 'altz/app_container'
import ReduxAppRoot from 'reduxz/app_root'

React.render(
  <AltAppContainer/>,
  document.getElementById('alt-container')
)

React.render(
  <ReduxAppRoot />,
  document.getElementById('redux-container')
)
