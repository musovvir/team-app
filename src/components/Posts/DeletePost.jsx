import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../redux/reducers/posts";

function DeletePost({ post }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  const authorizing = useSelector((state) => state.authorization.authorizing);

  return (
    <div className="delete" onClick={handleDelete}>
      {authorizing ? <CloseOutlined /> : ""}
    </div>
  );
}

export default DeletePost;