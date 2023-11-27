// sfc : stateless functional component, it creates the function without name, then u give name..
// this is an arrow function , but it can be normal func as u want
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={ 
                    // {outer curly braces for the dynamic variavle{object of styling}}
                    {
                        color:'white',
                        backgroundColor:'#f1356d',
                        // backgroundColor instead of backgroun-color in jsx , cuz we are in js we can't use - it's a minus
                        borderRadius:'8px'
                    }
                }>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
// now we need to import this component (function), and nest it inside the root component (App.js)
