const Home = () => {
    const handleClick = () =>{
        console.log('Hello, Ninjas');
    };
    const handleClickAgain = (name) =>{
        console.log('hello'+name);
        //const handleClickAgain = (name,e) =>{console.log('hello'+name,e.target);};to access the event target: it print to the consome hello name , and the event targer , here : button
        // for more info check the react file txt
    };
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            {/* create a component for the home page */}
            <button onClick={handleClick}>Click here</button>
            {/* passing a function reference to handle the click on that button and not handleClick() to onClick
            to call it when u click the button only
            */}
            <button onClick={
                //onClick={these curly braces signifie dynamic value}
                ()=>{handleClickAgain(' mario')}
                // we made an anonymous arrow function and inside it we added a call of of function ,
                //  so that we can assign the argumant value to NAME, so it (the function will be called)appears only when u click the button, 
                // and not called directly without clicking the button(if we use direcly hndlclkAgain())
            }>Click here Again</button>
        </div>
     ); 
    
}
 // then we can nest it inside the content div
//  if we want to make the content in another component not directaly in the root
export default Home;