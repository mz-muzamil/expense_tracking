import { Button, Form } from "antd";
import TextField from "./TextField";
import SelectField from "./SelectField";
import DateField from "./DateField";
import { v4 as uuidv4 } from "uuid";

const FormAddExpense = ({ expnData, setExpnData }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const newExpense = { ...values, id: uuidv4() };
    setExpnData([...expnData, newExpense]);
    form.resetFields();
  };

  const handleAmountFieldChange = (e) => {
    const { value } = e.target;
    const filteredValue = value.replace(/[^0-9]/g, "");
    form.setFieldsValue({ amount: filteredValue });
  };

  return (
    <>
      <Form
        form={form}
        layout={"vertical"}
        onFinish={onFinish}
        autoComplete="off"
      >
        <TextField
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your Description!",
            },
          ]}
        />

        <TextField
          label="Amount"
          name="amount"
          rules={[
            {
              required: true,
              message: "Please input your Amount!",
            },
          ]}
          onChange={handleAmountFieldChange}
        />

        <SelectField
          label="Category"
          name="category"
          rules={[
            {
              required: true,
            },
          ]}
          options={[
            { label: "Daily", value: "daily" },
            { label: "Weekly", value: "weekly" },
            { label: "Monthly", value: "monthly" },
            { label: "Yearly", value: "yearly" },
          ]}
          placeholder="Please select category"
          allowClear
        />
        <DateField
          label="Expense Date"
          name="expense_date"
          rules={[
            {
              required: true,
              message: "Please select your Expense Date!",
            },
          ]}
        />
        <Form.Item style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormAddExpense;
