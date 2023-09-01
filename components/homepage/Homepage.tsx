import { useState, useEffect } from "react";

function Homepage() {
    const [mainPost, setMainPost] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getPosts() {
            setIsLoading(true);
            try {
                const post = await fetch("https://word-oasis-api-production.up.railway.app/posts?title=What’s this all about?", { mode: "cors" });
                const extracted = await post.json();
                setIsLoading(false);
                if (!ignore) {
                    setMainPost(extracted);
                    console.log(extracted)
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