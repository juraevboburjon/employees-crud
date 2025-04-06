import axios from "axios";
import React, { useEffect, useState } from "react";

import { Button, Table } from "antd";
import EmployeesInfoModal from "../components/EmployeesInfoModal";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Position",
    dataIndex: "position",
  },
  {
    title: "Hire Date",
    dataIndex: "hireDate",
  },
  {
    title: "Full Info",
    dataIndex: "info",
  },

  //   {
  //     title: "English Score",
  //     dataIndex: "english",
  //     sorter: {
  //       compare: (a, b) => a.english - b.english,
  //       multiple: 1,
  //     },
  //   },
];

// const onChange = (pagination, filters, sorter, extra) => {
//   console.log("params", pagination, filters, sorter, extra);
// };

function HomePage() {
  const host = import.meta.env.VITE_HOST;
  const [employees, setEmployees] = useState([]);
  const [employeesInfoModal, setEmployeesInfoModal] = useState(false);
  const [selectedEMployeeId, setSelectedEMployeeId] = useState(null);

  useEffect(() => {
    axios
      .get(`${host}/employees`)
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err));
  }, [host]);

  const toggleModal = (id) => {
    setSelectedEMployeeId(id);
    setEmployeesInfoModal((prevState) => !prevState);
  };

  const data = employees.map((employee) => ({
    key: employee.id,
    name: employee.firstName + employee.lastName,
    position: employee.position,
    email: employee.email,
    hireDate: employee.hireDate,
    info: <Button onClick={() => toggleModal(employee.id)}>View Info</Button>,
  }));

  return (
    <>
      {employeesInfoModal && (
        <EmployeesInfoModal
          employeeId={selectedEMployeeId}
          toggleModal={() => setEmployeesInfoModal(false)}
        />
      )}
      <Table
        key={data.key}
        columns={columns}
        dataSource={data}
        pagination={false}
        style={{ height: "80vh", overflow: "scroll" }}

        //   onChange={onChange}
      />
    </>
  );
}

export default HomePage;
