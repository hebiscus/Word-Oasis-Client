import { useState, useEffect } from "react";
import "./blogpost.scss";
import { blogPostInterface, commentsResInterface, errorMsgInterface } from "../../interfaces/interfaces";
import { useParams } from "react-router-dom";
import DefaultButton from "../defButton";

function Blogpost() {
    const { postId } = useParams();
    const [blogPost, setBlogpPost] = useState<blogPostInterface | null>(null);
    const [comments, setComments] = useState<commentsResInterface | null>(null);
    const [commentAuthor, setCommentAuthor] = useState("");
    const [commentContent, setCommentContent] = useState("");
    const [errorMessages, setErrorMessages] = useState<errorMsgInterface[]>([]);

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

    const submitComment = (async(event: React.FormEvent) => {
        event.preventDefault();
        console.log(commentAuthor);
        console.log(commentContent);
        if (!commentAuthor || !commentContent) {
            console.log("returned")
            return
        }
        
        try {
            const commentsResponse = await fetch(`https://word-oasis-api-production.up.railway.app/posts/${postId}/comments`, {
                method:'POST',
                body: JSON.stringify({
                    author: commentAuthor,
                    content: commentContent,
                }),
                headers: { 'Content-Type': 'application/json' },
            })
            console.log()
            const responseData = await commentsResponse.json();
            if (responseData.errors) {
                    setErrorMessages(responseData.errors);
            } else {
                setErrorMessages([]);
                const currentComments = comments!.comments;
                setComments({
                    comments: [...currentComments, responseData.comment],
                    message: comments!.message
                })
            }
            setCommentAuthor("");
            setCommentContent("");
        } catch(err) {
            console.log(err);
        }
    })

    return (
        <div className="blogpost-main">
            {blogPost && <div className="blogpost-box">
                <h2>{blogPost.title}</h2>
                <p>{blogPost.content}</p>
            </div>
            } 
            <h3>Comments:</h3>
            {comments && <div className="comments-box">
                {comments.comments.length === 0
                ? <p>{comments.message}</p>
                : comments.comments.map((comment) => {
                    return <div className="single-comment" key={comment._id}>
                        <span>{comment.author}</span>
                        <p>{comment.content}</p>
                    </div>
                })}
            </div>
            }
            <div className="comment-add"> 
                <h4>Add your own:</h4>
                {errorMessages && errorMessages.map((errMsg) => {
                    return <div key={errMsg.path}>{errMsg.msg}</div>
                })}
                <form className="comment-form" onSubmit={event => submitComment(event)}>
                    <input type="text" id="author" placeholder="By:" onChange={e => setCommentAuthor(e.target.value)} value={commentAuthor} required />
                    <textarea id="comment" placeholder="Comment:" onChange={e => setCommentContent(e.target.value)} value={commentContent} required />
                    <DefaultButton btnType="submit">Submit comment</DefaultButton>
                </form>
            </div>     
        </div>
    )
}

export default Blogpost;