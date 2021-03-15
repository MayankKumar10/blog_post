import React from 'react';
import Link from './Link';

var loginForm;
const Header = () =>{

    loginForm = ()=>{
        var ab = 1;
        
        var x = document.querySelector('#header');
        if (ab === 1){
             x.style.display="block";
             
             console.log('display block');
        }
        else { 
            x.style.display="none";
            
        console.log('display block');
    }
    }

function button(){
    return(
        <div>
            <button onClick={loginForm}>Try it</button>

            
        </div>
    )
}


//<button onClick={loginForm}>Try it</button>
return(

    <div className="ui secondary pointing menu"> 
    
        <div id="header" className="ui grid" style={{display: "block"}}>
        
        <Link id="login" href="/login" className="item four wide column" style={{display: "block"}}>
            Login
        </Link>

        <Link href="/home" className="item four wide column">
            Home
        </Link>

        <Link href="/users" className="item four wide column">
            Users
        </Link>

        <Link href="/blogs" className="item four wide column">
            Blogs
        </Link>

        
    </div>
    
     </div>

    
);
};


export default Header;