import "./homepage.scss";
import { useState, useEffect } from "react";
import { blogPostInterface, blogPostsResInterface} from "../../interfaces/interfaces";
import DefaultButton from "../defButton";
import { Link } from "react-router-dom";
import axios from "axios";

function Homepage() {
    const [mainPost, setMainPost] = useState<blogPostInterface | null >(null);
    const [mainPostMess, setMainPostMess] = useState("");
    const [topPostsData, setTopPostsData] = useState<blogPostsResInterface | null>(null);

    useEffect(() => {
        async function getPosts() {
            try {
                const [mainPostResponse, topPostsResponse] = await axios.all([
                    axios.get("https://word-oasis-api-production.up.railway.app/posts?title=What’s this all about?"),
                    axios.get("https://word-oasis-api-production.up.railway.app/posts?limit=6",),
                ])
                console.log(mainPostResponse)
                const mainPostData = mainPostResponse.data;
                const topPostsData = topPostsResponse.data;
                if (!ignore) {
                    setMainPost(mainPostData.foundPost);
                    setMainPostMess(mainPostData.message);
                    setTopPostsData(topPostsData);
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
          {mainPost
          ? <div className="mainPost-container">
                {mainPost.imageURL ? <img src={mainPost.imageURL} alt="" className="mainpost-photo"/> : <div className="image-placeholder" />}
                  <div className="mainpost-text">
                      <h2>{mainPost.title}</h2>
                      <p>{`${mainPost.content[0].concat(mainPost.content[1]).slice(0, 260)}...`}</p>
                      <Link to={`posts/${mainPost._id}`}>
                          <DefaultButton btnType="button">Read more</DefaultButton>
                      </Link>
                  </div>
            </div>
          : <div className="mainPost-container">
              <div className="mainpost-photo"><div className="image-placeholder" /></div>
              <h3>{mainPostMess}</h3>
          </div>
          }
          {topPostsData && <>
              { topPostsData.foundPosts.length === 0 
              ? <div>{topPostsData.message}</div>
              : <>
                  <h2>TOP blog posts</h2>
                  <hr className="breakline"></hr>
                  <div className="topPosts-container">
                      {topPostsData!.foundPosts.map((post) => {
                          return <div className="topPost-box" key={post._id}>
                              <div>
                                  {post.imageURL ? <img src={post.imageURL} alt=""/> : <div className="image-placeholder" />}
                                  <Link to={`posts/${post._id}`}>
                                      {post.title}
                                  </Link>
                              </div>
                              <p>{`${post.content[0].slice(0, 60)}...`}</p>
                          </div> 
                      })
                      }
                  </div>
              </>
              }
          </>
          }
        </>
    )
}

export default Homepage;