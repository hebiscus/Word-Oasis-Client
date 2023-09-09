export interface blogPostInterface {
    author: string,
    title: string,
    content: string,
    creationDate: string,
    status: string,
    _v: number,
    _id: string
}

export interface commentsResInterface {
    comments: commentInterface[],
    message: string
}

export interface commentInterface {
    _id: string,
    blogpost: string,
    author: string,
    content: string,
    creationDate: string,
    __v: number
}

export interface errorMsgInterface {
    location: string,
    msg: string,
    path: string,
    type: string,
    value: string
}