import { Routes, Route} from "react-router-dom";
import Homepage from "./homepage/Homepage";
import BlogPosts from "./blogposts/BlogPosts";
import Contact from "./contact/Contact";

function CustomRouter() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/posts" element={<BlogPosts />}/>
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    )
}

export default CustomRouter;