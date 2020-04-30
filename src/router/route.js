import React from 'react';
import Dashboard from '../pages/Dashboard';
import Detail from '../pages/detail';
import {Route} from 'react-router-dom';
const Mainroute =()=>{
    return(
        <div>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/detail/:id" component={Detail}/>
        </div>
    )
}
export default Mainroute;