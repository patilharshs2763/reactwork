import React, { useState } from "react";
import { ProductinformationApi } from "../Helper/Customerfrom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../Store/reducers/userReducer";
import { Link } from "react-router-dom";
import { deleteUser } from "../../Store/reducers/userReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";

const Home = () => {
  const [loading, setloading] = useState(false);
  const userData = useSelector((state) => state.userData.value);
  console.log("user", userData.value);
  // const [tabledata, settabledata] = useState([]);
  const dispatch = useDispatch();

  const handeldelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to Delete?",
      icon: "warning",
      dangerMode: true,
    })
      .then(willDelete => {
        if (willDelete) {
          swal("Deleted!", "User deleted!", "success");
          toast("Deleted is success");
          dispatch(deleteUser({ id: id }));
        }
      });
  };

  return (
    <div className="container">
      <h2>crud Data</h2>
      <Link to="/">
        <button className="btn btn-success my-3">Create +</button>
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.pass}</td>
              <td>
                <Link to={`/edit/${user.id}`}>
                  <button className="btn-primary">Edit </button>
                </Link>

                <button
                  className="btn-danger ms-2"
                  onClick={() => handeldelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default Home;
