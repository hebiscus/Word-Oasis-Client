import { useState, useEffect } from "react";
import { blogPostInterface } from "../../interfaces/interfaces";

function Homepage() {
    const [mainPost, setMainPost] = useState<blogPostInterface | null >(null);
    const [topPosts, setTopPosts] = useState<blogPostInterface[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getPosts() {
            setIsLoading(true);
            try {
                const [mainPostResponse, topPostsResponse] = await Promise.all([
                    fetch("https://word-oasis-api-production.up.railway.app/posts?title=What’s this all about?", { mode: "cors" }),
                    fetch("https://word-oasis-api-production.up.railway.app/posts?limit=6", { mode: "cors" }),
                ])
                const mainPost = await mainPostResponse.json();
                const topPosts = await topPostsResponse.json();
                setIsLoading(false);
                if (!ignore) {
                    setMainPost(mainPost);
                    setTopPosts(topPosts);
                    console.log(mainPost)
                    console.log(topPosts)
                  }
            } catch(err) {
                console.log(err);
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
        {/* {mainPost ?  mainPost.blogPosts.map((post) => {
            console.log(post)
            return <div></div>
        }): <h3>Data is loading</h3> } */}
        {mainPost && 
            <div className="mainPost-container">
                <div className="image-placeholder" />
                <h2>{mainPost.title}</h2>
                <p>{mainPost.content}</p>
                <button>Read more</button>
            </div>
        }
        </>
    )
}

export default Homepage;