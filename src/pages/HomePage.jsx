import axios from "axios";
import React, { useEffect, useState } from "react";

import { Table } from "antd";

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

  useEffect(() => {
    axios
      .get(`${host}/employees`)
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err));
  }, [host]);

  const data = employees.map((employee) => ({
    key: employee.id,
    name: employee.firstName + employee.lastName,
    position: employee.position,
    email: employee.email,
    hireDate: employee.hireDate,
  }));

  return (
    <Table
      key={data.key}
      columns={columns}
      dataSource={data}
      //   onChange={onChange}
    />
  );
}

export default HomePage;
