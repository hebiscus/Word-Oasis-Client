import "./blogpost.scss";
import { useState, useEffect } from "react";
import { blogPostInterface } from "../../interfaces/interfaces";

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
                            <div className="image-placeholder" />
                            <h2>{post.title}</h2>
                            <p>{`${post.content.slice(0, 150)}...`}</p>
                    </div>
                })}
            </div>}
        </>
    )
}

export default BlogPosts;