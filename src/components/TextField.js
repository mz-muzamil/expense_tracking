import React from "react";
import { Form, Input } from "antd";

const TextField = ({ label, name, rules, ...rest }) => (
  <Form.Item label={label} name={name} rules={rules}>
    <Input {...rest} />
  </Form.Item>
);

export default TextField;
