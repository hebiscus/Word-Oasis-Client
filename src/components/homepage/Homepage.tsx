import "./homepage.scss";
import { useState, useEffect } from "react";
import { blogPostInterface } from "../../interfaces/interfaces";
import DefaultButton from "../defButton";
import { Link } from "react-router-dom";

function Homepage() {
    const [mainPost, setMainPost] = useState<blogPostInterface | null >(null);
    const [topPosts, setTopPosts] = useState<blogPostInterface[] | null>(null);

    useEffect(() => {
        async function getPosts() {
            try {
                const [mainPostResponse, topPostsResponse] = await Promise.all([
                    fetch("https://word-oasis-api-production.up.railway.app/posts?title=What’s this all about?", { mode: "cors" }),
                    fetch("https://word-oasis-api-production.up.railway.app/posts?limit=6", { mode: "cors" }),
                ])
                const mainPost = await mainPostResponse.json();
                const topPosts = await topPostsResponse.json();
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
        {mainPost && 
            <div className="mainPost-container">
                <div className="mainpost-photo">
                    {mainPost.imageURL ? <img src={mainPost.imageURL} alt=""/> : <div className="image-placeholder" />}
                </div>
                <h2>{mainPost.title}</h2>
                <p>{`${mainPost.content.slice(0, 150)}...`}</p>
                <DefaultButton>Read more</DefaultButton>
            </div>
        }
        {topPosts &&
            <>
                <h2>TOP blog posts</h2>
                <hr className="breakline"></hr>
                <div className="topPosts-container">
                    {topPosts.map((post) => {
                        return <div className="topPost-box" key={post._id}>
                            {post.imageURL ? <img src={post.imageURL} alt=""/> : <div className="image-placeholder" />}
                            <p>{post.title}</p>
                            <p>{`${post.content.slice(0, 60)}...`}</p>
                            {/* <Link to={`posts/${post._id}`}>
                                <button>Read more</button>
                            </Link> */}
                        </div> 
                    })
                    }
                </div>
            </>
        }
        </>
    )
}

export default Homepage;