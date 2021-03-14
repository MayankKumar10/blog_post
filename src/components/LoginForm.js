import React,{ useState} from 'react';

const LoginForm = ({items}) => {
    const [activeState,setActiveState] = useState(null);

    const onTitleClick = (index) =>{
        setActiveState(index);
    }

    
    return (
      <div>
          <h1>Helo</h1>
      </div>
    )
   
    
};

export default LoginForm;