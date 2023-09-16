import "./blogposts.scss";
import { useState, useEffect } from "react";
import { blogPostInterface } from "../../interfaces/interfaces";
import { Link } from "react-router-dom";
import DefaultButton from "../defButton";

function BlogPosts() {
    const [allPosts, setAllPosts] = useState<blogPostInterface[] | null>(null)

    useEffect(() => {
        async function getPosts() {
            try {
                const allPostsFetch = await fetch("https://word-oasis-api-production.up.railway.app/posts?sorting=descending", {mode: "cors"});
                const allPosts = await allPostsFetch.json();
                if (!ignore) {
                    setAllPosts(allPosts);
                    console.log(allPosts);
                }
            } catch(err) {
                console.log(err)
            }
        }
        
        let ignore = false;

        getPosts();

        return () => {
            ignore = true;
        }
    }, [])

    return (
        <>
        {allPosts && 
            <div className="allPosts-container">
                {allPosts.map((post) => {
                    return <div className="post-container" key={post._id}>
                            {post.imageURL ? <img src={post.imageURL} /> : <div className="image-placeholder2"/>}
                            <h3>{post.title}</h3>
                            <p>{`${post.content.slice(0, 150)}...`}</p>
                            <Link to={post._id}>
                                <DefaultButton btnType="button">Read more</DefaultButton>
                            </Link>
                    </div>
                })}
            </div>}
        </>
    )
}

export default BlogPosts;