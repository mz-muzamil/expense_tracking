import React from "react";
import { Form, Input } from "antd";

const TextField = ({ label, name, rules, onChange, ...rest }) => (
  <Form.Item label={label} name={name} rules={rules}>
    <Input {...rest} onChange={onChange} />
  </Form.Item>
);

export default TextField;
