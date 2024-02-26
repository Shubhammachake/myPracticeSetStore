import { useEffect, useState } from "react";
import myDb from "/myDb";
import { Link } from "react-router-dom";
import { addUsers, getAllUsers, addUpdt, getAllUpdate } from "/users.js";
import { useNavigate } from "react-router-dom";
export default function BookList() {
  const [data, setData] = useState([]);
  const my = getAllUsers();
  const myUpdt = getAllUpdate();
  const [noData, setNoData] = useState("");
  useEffect(() => {
    setData(myDb);
  }, []);
  // console.log("data", data);
  addUsers(data);

  const navigate = useNavigate();
  const handleDelete = (ind) => {
    const updt = [...data];
    updt.splice(ind, 1);
    setData(updt);
  };

  const handleEdit = (ind) => {
    navigate("/EditDetails");
    addUpdt(ind);
  };

  const handleChange = (e) => {
    let key = e.target.value.toLowerCase();

    // if (e.keyCode === 8 && key === "") {
    //   // Handle backspace here, for example, by resetting data to original state
    //   setData(myDb);
    //   return;
    // }

    let updt = [...data];

    if (key !== "") {
      let filter = updt.filter((item) => {
        return item.author.toLowerCase().includes(key);
      });
      setData(filter);
      // setNoData("No Book Found");
    } else {
      setData(myDb);
    }
  };
  return (
    <>
      <div className="upperInput">
        <h2>Search Author</h2>
        <input
          type="text"
          placeholder="Search By Author"
          onChange={(e) => handleChange(e)}
          // onKeyDown={(e) => handleChange(e)}
        />
        <br />
        <Link to="/AddBooks"> ADD NEW BOOK</Link>
      </div>
      <div className="grid-container">
        {data.map((item, index) => (
          <div key={index} className="grid-item">
            <img src={item.coverImage} alt="error" />
            <h3>{item.title}</h3>
            <h3>{item.author}</h3>
            <div className="btn">
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
