import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddPostForm = () => {
  const [formData, setFormData] = useState({
    file: "",
    author: "",
    location: "",
    description: "",
    likes: 0,
  });
  const navigate = useNavigate();
  // const instance = axios.create({ baseURL: "http://localhost:3000/" });
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("formdata in handle ", formData);
    axios.post("http://localhost:8080/user", { formData }).then((res) => {
      console.log("axios post call", res.data);
    });
    navigate(-1);
  };

  return (
    <div className="add-form">
      <form onSubmit={handleSubmit} className="form-elements">
        <input
          type="file"
          name="file"
          onChange={(e) => {
            setFormData((prevData) => ({
              ...prevData,
              file: e.target.files[0].name,
            }));
          }}
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          onChange={(e) =>
            setFormData((prevData) => ({ ...prevData, author: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              location: e.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              description: e.target.value,
            }))
          }
        />
        <input
          type="Number"
          placeholder="Likes"
          name="likes"
          onChange={(e) =>
            setFormData((prevData) => ({ ...prevData, likes: e.target.value }))
          }
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

// make post cal using axios in react
export default AddPostForm;
