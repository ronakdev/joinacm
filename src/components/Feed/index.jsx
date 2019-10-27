import React, { Component } from "react";

import { Table } from "antd";
import { setOnZombieAdd, setOnZombieUpdate } from "../../util/firebase";
import "./style.less"

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
        title: "Zombie ID",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Status",
        dataIndex: "address",
        key: "address"
      }
    ];
    
    setOnZombieAdd((zombieData) => {
      let zombieName = zombieData.id.split("-")[0]
      let ds = this.state.dataSource
      ds.push(
        {
          key: "1",
          name: `${zombieName}`,
          age: 32,
          address: "ACTIVE",
          id: zombieData.id
        })
        this.setState({
          dataSource: ds
        })
    }, true)

    setOnZombieUpdate((zombieData) => {
      console.log(zombieData)
      console.log(this.state.dataSource)
      let index = this.state.dataSource.map(e => e.id).indexOf(zombieData)
      let array = this.state.dataSource
      console.log(index)
      array[index].address = "ELIMINATED"
      this.setState({
        dataSource: array
      })
    })

    this.state = {
      columns: columns,
      dataSource: []
    };
    
  }


  render() {
    return (
      <Table pagination={ {pageSize: 3}} dataSource={this.state.dataSource} columns={this.state.columns} />
    );
  }
}
