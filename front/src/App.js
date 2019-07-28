import React, { Component } from 'react';
import './App.css';
import { Router, Switch, Route} from 'react-router-dom';
import { Vendor } from './vendors/vendor.component';
import { Product } from './products/product.component';
import { Login } from './login/';
import { Home } from './home/';
import { history } from './_helpers';
import { PrivateRoute } from './_components';
import { AddVendor } from './vendors/addvendor.component';
import { AddProduct } from './products/addproduct.component';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                   <div>
                      <Switch>
                         <PrivateRoute exact path='/home' component={Home} />
                         <PrivateRoute exact path='/vendor' component={Vendor} />
                         <PrivateRoute exact path='/add-vendor' component={AddVendor} />
                         <PrivateRoute exact path='/edit-vendor/:id' component={AddVendor} />
                         <PrivateRoute exact path='/product' component={Product} />
                         <PrivateRoute exact path='/add-product' component={AddProduct} />
                         <PrivateRoute exact path='/edit-product/:id' component={AddProduct} />
                         <Route exact path='/' component={Login} />
                      </Switch>
                   </div>
                </Router>
            </div>
        );
    }
}
export default App;