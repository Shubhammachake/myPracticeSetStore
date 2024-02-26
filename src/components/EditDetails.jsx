import { useEffect, useState } from "react";
import { addUsers, getAllUsers, addUpdt, getAllUpdate } from "/users.js";
import { useNavigate } from "react-router-dom";
export default function EditDetails() {
  const myData = getAllUsers();
  const myInd = getAllUpdate();

  const [data, setData] = useState({
    title: "",
    author: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSave = (myInd) => {
    navigate("/");
    // addUpdt(data);
    const updt = [...myData];
    updt[myInd].title = data.title;
    updt[myInd].author = data.author;
    addUsers(updt);
    alert("Updeted sucessfully");
  };
  console.log(myInd);

  return (
    <div className="EditDiv">
      <h3>Edit Book Details</h3>
      <form onSubmit={() => handleSave(myInd)}>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          onChange={(e) => handleChange(e)}
          required
          defaultValue={myData && myData[myInd].title}
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="Enter Author"
          onChange={(e) => handleChange(e)}
          required
          defaultValue={myData && myData[myInd].author}
        />
        <br />
        <button type="submit">UPDATE</button>
      </form>
    </div>
  );
}
