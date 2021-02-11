import React, { Component } from 'react';
import {Input,Label,Select,Option} from '../../component';

class FormTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div>
                    <Label Label="Nama Pohon"/>
                    <Input type="text" name="nama"/>
                </div>
                <div>
                    <Label Label="Jumlah Pembelian"/>
                    <Input type="text" name="jumlah"/>
                </div>
                <div>
                    <Label Label="Tanggal Pembelian"/>
                    <Input type="date" name="tanggal"/>
                </div>
            </div>
         );
    }
}
 
export default FormTransaction;