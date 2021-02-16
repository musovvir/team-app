import React from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getTitle } from "../../redux/actions/posts";

function AddTitle() {

  const dispatch = useDispatch();

  const title = useSelector((state) => state.posts.title);

  const handleGetTitle = (e) => {
    dispatch(getTitle(e.target.value));
  };

  return (
    <div>
      <Form.Item>
        <Input placeholder="Title" value={title} onChange={handleGetTitle} />
      </Form.Item>
    </div>
  );
}

export default AddTitle;
