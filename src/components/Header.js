import React from 'react';
import Link from './Link';

const Header = () =>{

    function loginForm(){
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


return(

    <div className="ui secondary pointing menu"> 
    <button onClick={loginForm}>Try it</button>
        
        <div id="header" className="ui grid" style={{display: "none"}}>
        <Link href="/" className="item four wide column">
            LoginForm
        </Link>

        <Link href="/userdata" className="item four wide column">
            UserData
        </Link>

        <Link href="/blogposts" className="item four wide column">
            Blog Posts
        </Link>

        <Link href="/home" className="item four wide column">
            Home
        </Link>

        <button class="ui circular facebook icon button">
            <i class="facebook icon"></i>
            </button>
            <button class="ui circular twitter icon button">
            <i class="twitter icon"></i>
            </button>
            <button class="ui circular linkedin icon button">
            <i class="linkedin icon"></i>
            </button>
            <button class="ui circular google plus icon button">
            <i class="google plus icon"></i>
    </button>
    </div>
    
     </div>

    
);
};

export default Header;