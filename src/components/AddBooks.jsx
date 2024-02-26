import { useState } from "react";
import { addUsers, getAllUsers } from "/users.js";
import { useNavigate } from "react-router-dom";
export default function AddBooks() {
  const myVal = getAllUsers();
  const [data, setData] = useState({
    title: "",
    author: "",
    coverImage: "",
  });
  const [urlError, setUrlError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    const checkUrl = () => {
      if (name === "coverImage") {
        if (value !== "") {
          let regX = /^(ftp|http|https):\/\/[^ "]+$/;
          return regX.test(value);
        }
      }
    };

    let isValidUrl = checkUrl();
    if (isValidUrl) {
      setUrlError("");
    } else {
      setUrlError("Please enter valid Url");
    }
    setData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    if (!urlError) {
      myVal.push(data);
      alert("Book is Added Successfully");
      navigate("/");
    }
  };
  return (
    <div className="add-book">
      <h3>ADD BOOK</h3>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter title"
          name="title"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="AUthor"
          name="author"
          onChange={(e) => handleChange(e)}
          required
        />
        <br />
        <br />

        <input
          type="url"
          placeholder="Enter Image-Url"
          name="coverImage"
          onChange={(e) => handleChange(e)}
          required
        />
        {urlError && <p>{urlError}</p>}
        <br />
        <br />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
