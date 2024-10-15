import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
  const { id } = useParams();

  const [emp, setEmp] = useState({
    empName: "",
    department: "",
    leaveDate: "",
    reason: "",
  });

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
  try {
    const result = await axios.get(`http://localhost:8081/leave/${id}`);
    if (result.status === 200) {
      setEmp(result.data);
    } else {
      console.error('Failed to load employee details:', result.status);
    }
  } catch (error) {
    console.error('Error fetching employee details:', error);
  }
};


  return (
    <div className=" container">
      <div className=" row">
        <div className=" col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className=" text-center m-4">Employee Leave Details</h2>
          <div className=" card">
            <div className=" card-header">
              <b>Employee ID:</b> {emp.id}
              </div>
              <ul className=" list-group list-group-flush">
                <li className=" list-group-item mt-2">
                  <b>Employee Name :</b> {emp.empName}
                </li>
                <li className=" list-group-item mt-2">
                  <b>Employee Department :</b> {emp.department}
                  </li>
                <li className=" list-group-item mt-2">
                   <b>Leave Date :</b> {emp.leaveDate.split('T')[0]}
                </li>
                <li className=" list-group-item mt-2">
                  <b>Reason :</b> {emp.reason}
                </li>
              </ul>
          </div>

          <Link to={"/"}>
            <button className=" btn btn-primary mx-2 m-5">Back To Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
