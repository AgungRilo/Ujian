import React, { Component } from 'react';

class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <table>
                <thead>
                    <th>
                        <td>
                            No
                        </td>
                        <td>
                            Nama Pohon
                        </td>
                    </th>
                </thead>
                <tbody>

                </tbody>
            </table>
        );
    }
}

export default Inventory;