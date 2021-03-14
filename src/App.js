import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Header from './components/Header';
import UserData from './components/UserData';
import Blogs from './components/Blogs';
import Route from './components/Route';


const App =()=>{
    //const [selected, setSelected] = useState(options[0]);
    
    return(
        <div> 
        <Header />
        
        <Route path="/userdata">
          <UserData />
        </Route>

        <Route path="/blogposts">
          <Blogs />
        </Route>

        <Route path="/home">
          <Home />
        </Route>
        
        </div>    
    );
};

{/* <Accordion items={items} /> */}
export default App;