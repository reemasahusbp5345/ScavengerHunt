 import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch } from 'react-router'
import Admin from '../Components/Admin/Admin'
import Dashboard from '../Components/Dashboard/Dashboard'
import Login from '../Components/Login/Login'
import { getData } from '../Redux/action'
 const Routing = (props) => {
     const dispatch=useDispatch()
      useEffect(()=>{
          dispatch(getData())
      },[dispatch])
     return (
         <div>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/admin" exact component={Admin}/>
                <Route path="/dashboard" exact component={Dashboard}/>
            </Switch>
         </div>
     )
 }
 
 export default Routing
 