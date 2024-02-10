# Word Oasis Client
Live link: ~https://word-oasis.vercel.app/~ <b>no funds for hosting</b>
## Summary:
Word Oasis is a personal blog where I share my literary endevours. <br>
Everyone is able to share their opinion under each blog post in comments, without the need to login. <br><br>
Frontend side of this app was made using Typescript, React and SCSS.<br>
<b>For now nearly all blog posts are Lorem Ipsum templates. Will slowly try to change that.</b> 
## Key skills and features:
- <b>Setup</b>: Chose Vite as the build tool for its speed and efficiency in setting up the React application.
- <b>Authentication and Authorization</b> : Implemented JWT authentication to secure the application, allowing only authenticated admins to manage blog posts and comments. This ensures a safe and controlled environment for content management. Each JWT token is safely stored in Local Storage for authentication across sessions. 
- <b>Routing</b>: Implemented navigation within the application using React Router, ensuring smooth transitions between different pages and views.
- <b>Responsiveness</b>: Ensured the application is fully responsive across various devices and screen sizes.
- <b>Admin functionality</b>: Administrators can perform essential tasks such as: create, view, edit, and delete blog posts and delete comments.
- <b>User functionality</b>: Users are able to post comments under blog posts.
- <b>Cloudinary integration</b> : Implemented a seamless process for handling blog post images by dynamically uploading them to Cloudinary. The generated URLs were then stored in the MongoDB database, ensuring efficient image management.
- <b>React hooks</b>: Utilized the useEffect hook to efficiently retrieve necessary blog posts from the backend REST API. Used the useParams hook to obtain the ID of a specific blog post, enabling targeted fetching of content.
- <b>Error handling</b>: Robust error handling mechanisms, both on the frontend and backend, to gracefully manage and display errors.
- <b>Design</b>: Crafted a unique and visually appealing design using Figma, providing a distinct visual identity to the project.
## How it looks:
![ezgif com-optimize](https://github.com/hebiscus/Word-Oasis-Client/assets/107350293/ed319b86-e7bd-4b5a-9de2-4e6910cdb32f)
## Links to other repos:
- Backend: https://github.com/hebiscus/Word-Oasis-API
- CMS/Admin: https://github.com/hebiscus/Word-Oasis-Admin
## Features in plan:
- signing up to a newsletter
- improving accessibility

