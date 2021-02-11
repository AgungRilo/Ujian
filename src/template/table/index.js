import React, { Component } from 'react'; 
import "./style.css"

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    edit=(idx)=>{
        this.props.updateData(idx)
    }

    render() { 
        
        return ( 
            <>
            <div className="tabel">
                <table className="table1">
                    <thead>
                            <tr>
                                <th id="tNo">No</th>
                                <th id="tNama">Nama Pohon</th>
                                <th id="tUmut">Umur</th>
                                <th id="tStatus">status</th>
                                <th id="tJenis">Jenis</th>
                                <th id="tMutasi">Mutasi</th>
                                <th id="Action">Action</th>
                            </tr>
                    </thead>
                    <tbody id="bodyTable">
                    {
                        this.props.users.map((user, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{user.nama}</td>
                                    <td>{user.umur+" bulan"}</td>
                                    <td>{user.status}</td>
                                    <td>{user.jenis}</td>
                                    <td>{user.mutasi}</td>
                                    <td>
                                        <button onClick={()=>this.edit(idx)}>Sunting</button>
                                        <button onClick={() =>{ this.props.idx({ idx })} }>Hapus</button>
                                    </td>
                                    
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
            </>
         );
    }
}



export {Table};


