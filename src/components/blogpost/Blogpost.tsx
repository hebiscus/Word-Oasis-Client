import { useState, useEffect } from "react";
import "./blogpost.scss";
import { blogPostInterface, commentsResInterface } from "../../interfaces/interfaces";
import { useParams } from "react-router-dom";

function Blogpost() {
    const { postId } = useParams();
    const [blogPost, setBlogpPost] = useState<blogPostInterface | null>(null);
    const [comments, setComments] = useState<commentsResInterface | null>(null);
    const [commentAuthor, setCommentAuthor] = useState("");
    const [commentContent, setCommentContent] = useState("");

    useEffect(() => {
        async function getData() {
            try {
                const [blogPostResponse, commentsResponse] = await Promise.all([
                    fetch(`https://word-oasis-api-production.up.railway.app/posts/${postId}`),
                    fetch(`https://word-oasis-api-production.up.railway.app/posts/${postId}/comments`)
                ])
                const blogPost = await blogPostResponse.json();
                const comments = await commentsResponse.json();
                if (!ignore) {
                    setBlogpPost(blogPost);
                    setComments(comments);
                    console.log(blogPost);
                    console.log(comments);
                }
            } catch(err) {
                console.log(err);
            }
        }

        let ignore = false;

        getData();

        return () => {
            ignore = true;
        }

    }, [postId])

    const submitComment = (async(e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(commentAuthor);
        console.log(commentContent);
        try {
            await fetch(`https://word-oasis-api-production.up.railway.app/posts/${postId}/comments`, {
                method:'POST',
                body: JSON.stringify({
                    author: commentAuthor,
                    content: commentContent,
                }),
                headers: { 'Content-Type': 'application/json' },
            }).then(() => {
                setCommentAuthor("")
                setCommentContent("")
            })
        } catch(err) {
            console.log(err);
        }
    })

    return (
        <>
            {blogPost && <div className="blogpost-box">
                <h2>{blogPost.title}</h2>
                <p>{blogPost.content}</p>
            </div>
            } 
            {comments && <div className="comments-box">
                {comments.comments.length === 0
                ? <p>{comments.message}</p>
                : comments.comments.map((comment) => {
                    return <div className="comment-box" key={comment._id}>
                        <h4>{comment.author}</h4>
                        <p>{comment.content}</p>
                    </div>
                })}
            </div>
            }     
            <form>
                <label htmlFor="author">By:</label>
                <input type="text" id="author" onChange={e => setCommentAuthor(e.target.value)} value={commentAuthor}></input>
                <label htmlFor="comment">Comment:</label>
                <input type="text" onChange={e => setCommentContent(e.target.value)} value={commentContent}></input>
                <button type="submit" onClick={submitComment}>Submit comment</button>
            </form>    
        </>
    )
}

export default Blogpost;