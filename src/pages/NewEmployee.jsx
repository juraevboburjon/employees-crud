import { Button, DatePicker, Form, Input, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
const host = import.meta.env.VITE_HOST;

function NewEmployee() {
  //   const [data, setData] = useState({
  //     id: "",
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phone: "",
  //     position: "",
  //     department: "",
  //     hireDate: "",
  //     salary: "",
  //     address: "",
  //   });

  const navigate = useNavigate();

  const onFinish = (values) => {
    axios
      .post(`${host}/employees`, values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      layout="vertical"
      //   labelCol={{ span: 8 }}
      wrapperCol={{ span: 20 }}
      style={{ width: "100%", margin: "50px 30px" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Upload"
        valuePropName="fileList"
        name="upload"
        rules={[
          { required: true, message: "Please input emplyeer's first name!" },
        ]}
        // getValueFromEvent={normFile}
      >
        <Upload action={`${host}/employees`} listType="picture-card">
          <button
            style={{
              color: "inherit",
              cursor: "inherit",
              border: 0,
              background: "none",
            }}
            type="button"
          >
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item
        label="Fist Name"
        name="firstName"
        style={{ display: "inline-block", width: "50%" }}
        rules={[
          { required: true, message: "Please input emplyeer's first name!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastName"
        style={{ display: "inline-block", width: "50%" }}
        rules={[
          { required: true, message: "Please input emplyeer's last name!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        style={{ display: "inline-block", width: "50%" }}
        rules={[{ required: true, message: "Please input emplyeer's email!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phone"
        style={{ display: "inline-block", width: "50%" }}
        rules={[
          { required: true, message: "Please input emplyeer's phone number!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Position"
        name="position"
        style={{ display: "inline-block", width: "50%" }}
        rules={[
          { required: true, message: "Please input emplyeer's position!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Department"
        name="department"
        style={{ display: "inline-block", width: "50%" }}
        rules={[
          { required: true, message: "Please select emplyeer's department!" },
        ]}
      >
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        style={{ display: "inline-block", width: "50%" }}
        rules={[
          { required: true, message: "Please input emplyeer's address!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Salary"
        name="salary"
        style={{ display: "inline-block", width: "50%" }}
        rules={[{ required: true, message: "Please input emplyeer's salary!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Hire Date"
        name="hireDate"
        style={{ display: "inline-block", width: "50%" }}
        rules={[
          { required: true, message: "Please select emplyeer's hire date!" },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default NewEmployee;
