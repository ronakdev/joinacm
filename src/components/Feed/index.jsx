import React, { Component } from "react";

import { Table } from "antd";
import { setOnZombieAdd, setOnZombieUpdate, setOnReset } from "../../util/firebase";
import "./style.less";

export default class Feed extends Component {
  constructor(props) {
    super(props);
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

    setOnZombieAdd(zombieData => {
      let zombieName = zombieData.id.split("-")[0];
      let ds = this.state.dataSource;
      ds.push({
        key: "1",
        name: `${zombieName}`,
        age: 32,
        address: "ACTIVE",
        id: zombieData.id,
        added: Date.now()
      });
      this.setState({
        dataSource: ds
      });
    }, true);

    setOnZombieUpdate(zombieData => {
      console.log(zombieData);
      console.log(this.state.dataSource);
      let index = this.state.dataSource.map(e => e.id).indexOf(zombieData);
      if (index === -1) {
        return;
      }
      let array = this.state.dataSource;
      console.log(index);
      array[index].address = "ELIMINATED";
      array[index].added = Date.now();
      this.setState({
        dataSource: array
      });
    });

    setOnReset(() => {
      this.setState({
        dataSource: []
      })
    })

    this.state = {
      columns: columns,
      dataSource: []
    };
  }

  render() {
    return (
      <Table
        pagination={{ pageSize: 3 }}
        dataSource={this.state.dataSource
          .sort((a, b) => {
            return a.added < b.added;
          })
          .reverse()}
        columns={this.state.columns}
      />
    );
  }
}
