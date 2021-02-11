import React, { Component } from 'react';
import { Input, Label,Select,Option } from '../../component';
import './style.css';
import {Redirect} from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            nama: "",
            umur: "",
            status: "",
            jenis: "",
            mutasi: ""

        }
    }
    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value

        })

    }
    validation = (e) => {
        e.preventDefault()
        console.log(e);
        const { nama, umur, status, jenis, mutasi } = this.state


        if (nama === "") {
            alert("Masukkan Nama")
        } else if (umur === "") {
            alert("Masukkan Umur")
        } else if (status === "") {
            alert("Masukkan Status")
        } else if (jenis === "") {
            alert("Masukkan Jenis")
        } else if (mutasi === "") {
            alert("Masukkan mutasi")
        }
        else {
            alert("Data Berhasil diinput")
            this.props.save({ nama, umur, status, jenis, mutasi })
        }
    }
    render() {
        // if(!this.props.statusLogin){
        //     return <Redirect to="/login"/>
        // }
        if ("nama" in this.props.editData) {
            this.setState({

                nama: this.props.editData.nama,
                umur: this.props.editData.umur,
                status: this.props.editData.status,
                jenis: this.props.editData.jenis,
                mutasi: this.props.editData.mutasi,
            })
            this.props.reset();
            console.log(this.props.editData);
        }
        const { nama, umur, status, jenis, mutasi } = this.state
        return (
            <div className="form">
                <form className="data" >
                    <div className="baris">
                        <div className="col-25">
                            <Label label="Nama" />
                        </div>
                        <div className="col-75">
                            <Input type="text" value={this.state.nama} name="nama" id="nama" className="input" placeholder="Masukkan Nama Pohon" onChange={this.setValue} />
                        </div>
                    </div>
                    <div className="baris">
                        <div className="col-25">
                            <Label label="Umur" />
                        </div>
                        <div className="col-75">
                            <Input type="number" min="0" max="100" value={this.state.umur} name="umur" id="umur" className="input" placeholder="Masukkan Umur" onChange={this.setValue} />
                        </div>
                    </div>

                    <div className="baris">
                        <div className="col-25">
                            <Label label="Status" />
                        </div>
                        <div className="col-75">
                            <select id="status" name="status" value={this.state.status} onChange={this.setValue}>
                                <Option value="0" pilih="Pilih Status"/>
                                <Option value="Bibit" pilih="Bibit"/>Bibit
                                <Option value="Dewasa" pilih="Dewasa"/>
                                <Option value="Layu" pilih="Layu"/>                                
                            </select>
                        </div>
                    </div>
                    <div className="baris">
                        <div className="col-25">
                            <Label label="Jenis" />
                        </div>
                        <div className="col-75">
                            <select id="jenis" name="jenis" value={this.state.jenis} onChange={this.setValue}>
                                <Option value="0" pilih="Pilih Jenis"/>
                                <Option value="Buah" pilih="Buah" />
                                <Option value="Hias" pilih="Hias"/>
                                <Option value="Herbal" pilih="Herbal"/>
                            </select>
                        </div>
                    </div>
                    <div className="baris">
                        <div className="col-25">
                            <Label label="Mutasi" />
                        </div>
                        <div className="col-75">
                            <select id="mutasi" name="mutasi" value={this.state.mutasi} onChange={this.setValue}>
                                <Option value="0" pilih="Pilih Mutasi"/>
                                <Option value="Tidak Memiliki Mutasi" pilih="Tidak Memiliki Mutasi" />
                                <Option value="Anturium" pilih="Anturium" />
                                <Option value="Megarium" pilih="Megarium" />
                            </select>
                        </div>
                    </div>

                    <div className="baris">
                        <button id="button1" value="Submit" type="submit" className="button1"
                            onClick={this.validation}>Submit</button>
                    </div>
                </form>
                
            </div>);
    }
}

export default Form;