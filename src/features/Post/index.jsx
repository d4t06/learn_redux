import { useRef } from "react";
import { addPost } from "./postsSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPost } from "./postsSlice";
import { selectAllUser } from "../User/usersSlice";
import PostAuth from "./PostAuth";
import TimeAgo from "./TimeAgo";

const Post = () => {
   const posts = useSelector(selectAllPost); //
   const users = useSelector(selectAllUser);

   // console.log(users);
   const dispatch = useDispatch();
   const titleRef = useRef();
   const contentRef = useRef();
   const authorRef = useRef();

   const renderPost = posts?.map((post, index) => {
      return (
         <li key={index}>
            <h1>{post.title}</h1>
            <h2>{post.content}</h2>
            <PostAuth userId={post.userId} />
            <TimeAgo timestamp={post.date} />
         </li>
      );
   });

   const renderOptions = users?.map((user) => {
      return (
         <option ref={authorRef} value={user.id} key={user.id}>
            {user.name}
         </option>
      );
   });

   // const canSave = titleRef.current && contentRef.current

   const handleAddPost = () => {
      dispatch(
         addPost(
            titleRef.current.value,
            contentRef.current.value,
            authorRef.current.value
         )
      );
      titleRef.current.value = "";
      contentRef.current.value = "";
   };

   console.log("posts = ", posts)

   return (
      <div>
         <div className="input-form">
            <div className="form-group">
               <label htmlFor="">Title</label>
               <input type="text" ref={titleRef} />
            </div>
            <div className="form-group">
               <label htmlFor="">Author</label>
               <select>
                  <option value=""></option>
                  {renderOptions}
               </select>
            </div>
            <div className="form-group">
               <label htmlFor="">Content</label>
               <input type="text" ref={contentRef} />
            </div>
            <button onClick={() => handleAddPost()}>Add</button>
         </div>
         <h1>Post</h1>
         <ul>{!!posts.length && renderPost}</ul>
      </div>
   );
};

export default Post;
