import reactLogo from '../assets/react.svg'


const Nav_bar = () => {
    return (
        <div className="Nav-bar"> 

        <img src={reactLogo} className="logo react" alt="React logo" />
        <button className='btn btn-primary'> Signup</button>

        </div>
      
    );
  };
  
  export {Nav_bar};