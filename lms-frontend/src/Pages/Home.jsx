import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {FaTrashAlt, FaEdit, FaEye} from "react-icons/fa";

const Home = () => {
  const [emp, setEmp] = useState([]);
  const [search, setSearch] = useState("");

  const { id } = useParams();

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get("http://localhost:8081/allDetails");
    setEmp(result.data);
  };

  const deleteEmp = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8081/leave/${id}`);
    if (response.status === 200) {
      setEmp(emp.filter((employee) => employee.id !== id));
    }
  } catch (error) {
    console.error('Failed to delete the employee:', error);
  }
};

 const filteredEmps = emp.filter((employee) =>
    employee.empName.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div>
      <input
        type="text"
        placeholder="Search by employee name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control mb-3"
      />

      <table className="table table-striped table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th scope="col">ID</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Department</th>
            <th scope="col">Leave Date</th>
            <th scope="col">Reason</th>
            <th scope="col" colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {filteredEmps.map((emps, index) => (
            <tr key={emps.id}>
              <th scope="row">
                {index + 1}
              </th>
              <td>{emps.empName}</td>
              <td>{emps.department}</td>
              <td>{emps.leaveDate.split('T')[0]}</td>
              <td>{emps.reason}</td>
              <td className="mx-2">
                <Link to={`/edit/${emps.id}`}
                  className="btn btn-warning m-1" data-toggle="tooltip" data-placement="top" title="Edit">
                  <FaEdit/> 
                </Link>
                </td>
                <td className="mx-2">
                <Link to={`/view/${emps.id}`} className="btn btn-info m-1" data-toggle="tooltip" data-placement="top" title="View">
                    <FaEye/>
                </Link>
                </td>
                <td className="mx-2">
                <button
                  onClick={() => deleteEmp(emps.id)}
                  type="button"
                  className=" btn btn-danger m-1" data-toggle="tooltip" data-placement="top" title="Delete">
                  <FaTrashAlt/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
