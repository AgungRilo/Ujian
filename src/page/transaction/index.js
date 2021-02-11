import React, { Component } from 'react';

class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <table>
                    <thead>
                        <th>
                            <td>
                                No
                            </td>
                        </th>
                        <th>
                            <td>
                                Nama Pohon
                            </td>
                        </th>
                        <th>
                            <td>
                                Jumlah Pembelian
                            </td>
                        </th>
                        <th>
                            <td>
                                Tanggal Pembelian
                            </td>
                        </th>
                    </thead>
                    <tbody className="transaction">
                            
                    </tbody>
                </table>
            </>
        );
    }
}

export default Transaction;