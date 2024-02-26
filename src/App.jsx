import AddBooks from "./components/AddBooks";
import BookList from "./components/BookList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditDetails from "./components/EditDetails";
export default function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/AddBooks" element={<AddBooks />} />
          <Route path="/EditDetails" element={<EditDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
