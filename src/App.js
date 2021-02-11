import './App.css';
import React, { Component } from 'react';
import { Form, Header, Table,Nav } from './template';
import {Login} from './page';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          nama: "Anggrek",
          umur: 20,
          status: "Dewasa",
          jenis: "Hias",
          mutasi: "Anturium"
        }
      ],
      editUsers: {},
      act: 0,
      idx: "",
      status: false,
      username: "nama",
      password: "12345"
    }
  }
  reset = () => {
    this.setState({
      editUsers: {}
    })
  }
  edit = (idx) => {
    console.log(idx, "ds");
    this.setState({
      act: 1,
      idx: idx
    });
    const userEdit = this.state.users[idx]
    this.setState({
      editUsers: userEdit
    })
  }
  hapus = (idx) => {
    if(window.confirm("Apakah anda yakin ingin menghapus data ini ?")){

      let newUsers = this.state.users
      if (idx !== -1) {

        newUsers.splice(idx, 1)
        this.setState({
          users: newUsers
        })
        
      }else{
        alert("Data Gagal di hapus")
      }

    }
    
  }
  save = (data) => {
    console.log(data);
    const { nama, umur, status, jenis, mutasi } = data

    let newUsers = this.state.users
    if (this.state.act === 0) {//input

      newUsers.push({
        nama, umur, status, jenis, mutasi
      })
      console.log(newUsers);
      this.setState({
        users: newUsers
      })
    } else {//update
      let idx = this.state.idx;
      newUsers[idx].nama = nama;
      newUsers[idx].umur = umur;
      newUsers[idx].jenis = jenis;
      // newUsers[idx].umur = this.age;
      newUsers[idx].status = status;
      newUsers[idx].mutasi = mutasi;
      this.setState({
        users: newUsers,
        act: 0
      })
      alert('Data Berhasil DiUpdate..')
    }
  }
  doLogin = (login) => {
    const { username, password } = login
    if (username === this.state.username && password === this.state.password) {
      this.setState({
        statusLogin: true
      })
    } else {
      alert("Username atau Password salah!!")
    }
  }
  render() {
    return (
      <Router>
        {/* <Login doLogin={this.doLogin} statusLogin={this.state.statusLogin} />
        <Switch>
          <Route path="/login">
            <Login doLogin={this.doLogin} statusLogin={this.state.statusLogin} />
          </Route> */}
          {/* <Route path="/form"> */}
            <div className="App">
              <Header />
              <Nav/>
              <Form save={this.save} editData={this.state.editUsers} reset={this.reset} />
              <Table updateData={this.edit} idx={this.hapus} users={this.state.users} />
            </div>
          {/* </Route> */}
        {/* </Switch> */}
      </Router >
    );
  }
}

export default App;


