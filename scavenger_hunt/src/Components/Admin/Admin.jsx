import React from 'react'
import { useSelector } from 'react-redux'
import DataTable from './DataTable'
import { Navbar } from './Navbar'

const Admin = (props) => {
    const data=useSelector(state=>state.data)
    console.log(data)
    return (
        <div>
            <Navbar/>
            <div style={{marginTop:10}}>
            <DataTable/>
            </div>
        </div>
    )
}

export default Admin
