import React, { useEffect, useState } from 'react'
import Table from '../../chat/components/ChatTable/Table'
import REACT_APP_API_URL from '../../../testurl'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function Home() {
    const [tableData, setTableData] = useState([])
    const reload = useSelector(state => state.reload)
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
        }
    }; 
    useEffect(() => {

        
        axios.get(`${REACT_APP_API_URL}/api/chats/`, config)
        .then((response) => {
            setTableData(response.data)
        })

    }, [reload]);
    return (
        <>
            <Table tableData={tableData} />
        </>
    )
}
