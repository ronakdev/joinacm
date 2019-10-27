import React, { Component } from "react";

import { Table } from "antd";

export default class Feed extends Component {
  constructor(props) {
    super(props);
    const dataSource = [
      {
        key: "1",
        name: "Mike",
        age: 32,
        address: "10 Downing Street"
      },
      {
        key: "2",
        name: "John",
        age: 42,
        address: "10 Downing Street"
      }
    ];
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address"
      }
    ];
    this.state = {
      columns: columns,
      dataSource: dataSource
    };
  }
  render() {
    return (
      <Table dataSource={this.state.dataSource} columns={this.state.columns} />
    );
  }
}
