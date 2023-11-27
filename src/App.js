
import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Navbar />
      {/* or <Navbar></Navbar> */}
      <div className="content">
        {/* HomePAGE COMPONENT */}
        <Home />
      </div>
    </div>
  );
}
// this is our first component that it s rendered to the dom, it's the root component (App.js)
// u can check in the index.js that is rendered as the root to the dom
//other components will be nested inside the root component , in our case App.js
// and we can nest other components inside the nested components ..
//This a tree for components

export default App;
// we always export our component function so we can use it in other files
