import { useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
const [blogs, setBlog] = useState(
[
    {title:"Hello",body:"lorem lorem ...", author:"Someone",id:1},
    {title:"Animes",body:"lorem lorem ...", author:"Someone",id:2},
    {title:"Manga",body:"lorem lorem ...", author:"Someone",id:3}
]
);

    return ( 
        <div className="home">
            <Bloglist blogs={blogs}/>
        </div>
     ); 
    
}
 // then we can nest it inside the content div
//  if we want to make the content in another component not directaly in the root
export default Home;

/*

                {/* // we can make this funvtion a reusable component , by making it a component, and passe for it blogs as props , to use it in many places
                // blogs.map((blog) => (
                //     // map function : iterate the array and makde something for  each element and returns a new array
                //     <div className="blog-preview" key={blog.id}>
                //         {/* idk what the id does
                //         - also we have each blog is a div with the class blog-preview
                //         

*/