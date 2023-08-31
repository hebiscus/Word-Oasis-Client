import { useState, useEffect } from "react";

function Homepage() {
    const [mainPost, setMainPost] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getPosts() {
            setIsLoading(true);
            try {
                const post = await fetch("https://word-oasis-api-production.up.railway.app/posts");
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
        {/* {isLoading ? <h3>Data is loading</h3> : mainPost.blogPosts.map((post) => {
            console.log(post)
            return <div></div>
        })} */}
        <div>
            <div className="image-placeholder"></div>
            <h2></h2>
            <p></p>
            <button>Read more</button>
        </div>
        <div></div>
        </>
    )
}

export default Homepage;