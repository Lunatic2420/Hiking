import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Hike from './components/Hike'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import HikeDetail from './components/HikeDetail'
import SearchResults from './components/SearchResults';
import Doc from './components/Doc'


class App extends Component {

  render(){
   
  return (
      <div className="App">
         <Doc />
         <Header />
          <main>
            <Switch>
            <Route exact path='/hike' render={() => <Hike />}/> 
            <Route exact path='/hikedetails/:id' component ={HikeDetail}/>
            <Route exact path='/searchresults' component={SearchResults}/>
            <Route exact path = '/'/>
            <Route component={NotFound} /> 
           </Switch>
        
         </main>
        <Footer />
      </div>
   
  );
}
}
export default ()=> (<Router><App/></Router>)
