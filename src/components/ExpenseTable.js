import { Space, Table, Button } from "antd";
import moment from "moment";

const ExpenseTable = ({ expnData, setExpnData }) => {
  const deleteExpense = (id) => {
    setExpnData(expnData.filter((item) => item.id !== id));
  };

  const columns = [
    {
      title: "Category",
      key: "category",
      render: (record) => (
        <span>
          {record.category.charAt(0).toUpperCase() + record.category.slice(1)}
        </span>
      ),
    },
    {
      title: "Amount",
      key: "amount",
      render: (record) => <span>${record.amount}</span>,
    },
    {
      title: "Description",
      key: "description",
      dataIndex: "description",
    },
    {
      title: "Expense Date",
      key: "expense_date",
      render: (record) => (
        <span>{moment(record.expense_date.$d).format("MMMM D, YYYY")}</span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button
            type="primary"
            danger
            onClick={() => deleteExpense(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={expnData} rowKey="id" />
    </>
  );
};

export default ExpenseTable;
