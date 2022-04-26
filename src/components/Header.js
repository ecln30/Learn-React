













import React from 'react';


function Header({DarkMode}) {
    return ( 
        <div className="header">
          <h1> <span style={{color:"#308d46"}}>React</span>Notes</h1>
       
        <button
         onClick={ f => DarkMode(prevDarkMode => !prevDarkMode)}
         className="save"
        >Toggle Mode</button>
      </div>
     );
}

export default Header;








































