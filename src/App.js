import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import React from 'react'
import UpArrow from './UpArrow';

const App = () => {

  // const [toptitle, setToptitle] = useState('')
  return (
    <>
      
    <Router>
      <Navbar />

      <Switch>
      <Route exact path='/' ><News key="general" country='in' category='general' toptitle='Top News'/></Route>
      <Route  path='/business' ><News key="business" country='in' category='business' toptitle='Business News'/></Route>
      <Route  path='/entertainment'><News key="entertainment" country='in' category='entertainment' toptitle='Entertainment News'/></Route>
      <Route  path='/science' > <News key="science" country='in' category='science' toptitle='Science News'/></Route>
      <Route  path='/technology'><News key="technology" country='in' category='technology' toptitle='Technology News'/></Route>
      </Switch>
    
    </Router>
    <UpArrow />
   

  

</>
  )
}

export default App



