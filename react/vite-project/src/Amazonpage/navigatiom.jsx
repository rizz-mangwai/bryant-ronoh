/*
top nav of the page 

*/
/**
 import assets
 */
import logo from "../assets/log.jpg";
/*
component naming rules
return null or valid jsx
*/
function Navigation (){
    return (
        <div className="nav">
            <img src={logo} width="60px" />
            <input placeholder="search" />
        </div>
    );
}

export default Navigation;
