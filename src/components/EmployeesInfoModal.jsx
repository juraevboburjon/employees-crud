import { Modal } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function EmployeesInfoModal({ toggleModal, employeeId }) {
  const host = import.meta.env.VITE_HOST;
  const [employeesData, setEmployeesData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${host}/employees/${employeeId}`)
      .then((res) => setEmployeesData(res.data))
      .catch((err) => console.log(err));
  }, [host, employeeId]);

  const handleOk = () => {
    navigate(`/edit-employee/${employeeId}`);
  };

  return (
    <Modal
      style={{ top: 20 }}
      centered
      title="Employee Info"
      onCancel={toggleModal}
      open={true}
      okText="Edit"
      onOk={handleOk}
    >
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        {employeesData.firstName} {employeesData.lastName}
      </p>
      <p>{employeesData.email}</p>
      <p>{employeesData.phone}</p>
      <p>{employeesData.position}</p>
      <p>{employeesData.department}</p>
      <p>{employeesData.hireDate}</p>
      <p>{employeesData.salary}</p>
      <p>{employeesData.address}</p>
    </Modal>
  );
}

export default EmployeesInfoModal;
