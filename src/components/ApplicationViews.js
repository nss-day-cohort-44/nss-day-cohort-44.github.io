import { Route } from "react-router-dom"
import React from 'react'
import Home from './home/Home'


const ApplicationViews = () => (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
      </React.Fragment>
    )

export default ApplicationViews