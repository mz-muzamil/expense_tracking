import React from "react";
import { Form, Select } from "antd";

const { Option } = Select;

const SelectField = ({ label, name, rules, options, ...rest }) => (
  <Form.Item label={label} name={name} rules={rules}>
    <Select {...rest}>
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  </Form.Item>
);

export default SelectField;
