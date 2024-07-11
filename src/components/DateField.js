import React from "react";
import { Form, DatePicker } from "antd";

const DateField = ({ label, name, rules, ...rest }) => (
  <Form.Item label={label} name={name} rules={rules}>
    <DatePicker {...rest} />
  </Form.Item>
);

export default DateField;
