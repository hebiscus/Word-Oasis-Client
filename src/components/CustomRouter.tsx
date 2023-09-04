import { Routes, Route} from "react-router-dom";
import Homepage from "./homepage/Homepage";
import BlogPosts from "./blogposts/BlogPosts";
import Contact from "./contact/Contact";
import Blogpost from "./blogpost/Blogpost";

function CustomRouter() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/posts" element={<BlogPosts />}/>
            <Route path="/posts/:postId" element={<Blogpost />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    )
}

export default CustomRouter;