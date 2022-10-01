import React from "react";
import { Table, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/action";
import { Input, Space } from "antd";
import "antd/dist/antd.css";

import * as yup from "yup";

function ListPage() {
 
  let dispatch = useDispatch();
  const university = useSelector((state) => state);



  const { Search } = Input;
  const columns = [
    {
      title: "Universty Name",
      dataIndex: "name",
    },
    {
      title: "Domain",
      dataIndex: "domains",
    },
    {
      title: "Country",
      dataIndex: "country",
    },
    {
      title: "Alpha two code",
      dataIndex: "alpha_two_code",
    },
  ];
  let schema = yup.object().shape({
        name: yup.string().required(),
  
  });
  
  const yupSync = {
    async validator({ field }, value) {
      await schema.validateSyncAt(field, { [field]: value });
    },
  };
  const [form] = Form.useForm();
  const onSearch = (name,values) => {
    console.log('values',values);
    dispatch(getData(name));
  };

  return (
    <div style={{ padding: "70px", width: "60%", margin: "auto" }}>
      <Form form={form}>
      <Form.Item
          name='name'
          rules={[yupSync]}>
        <Search
          placeholder="input search university"
          name='name'

          onSearch={onSearch}
          style={{width:"60%",position:"relative", left:"50%", transform:"translate(-50%)" , marginBottom:"30px"}}
        />
        </Form.Item>
        </Form>
        <Table loading={university.status==='pending'} key={university.id} dataSource={university.data} columns={columns} />

    </div>
  );
}

export default ListPage;
