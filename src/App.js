import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Header from './components/Header';
import UserData from './components/UserData';
import Blogs from './components/Blogs';
import Blog from './components/Blog';
import Route from './components/Route';



const App =()=>{
    //const [selected, setSelected] = useState(options[0]);
    
    return(
        <div> 
        <Header />
        
        <Route path="/login">
          <LoginForm />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/users">
          <UserData />
        </Route>

        <Route path="/blogs">
          <Blogs />
        </Route>

        <Route path="/blog">
          <Blog />
        </Route>
        
        </div>    
    );
};

{/* <Accordion items={items} /> */}
export default App;