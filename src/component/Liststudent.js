import React from 'react'
import { useState, useEffect } from 'react'
import axios from '../api/api-data';
export default function ListStudent() {

    const [listStudent, setListStudent] = useState([]);

    //lấy dữ liệu từ api
    const getAllUser = async () => {
        let respone = await axios.get("students")
        setListStudent(respone.data);
    }

    useEffect(() => {
        getAllUser();
    }, [])

    const elementListStudent = listStudent.map((item, index) => {
        return (
            <tr key={item.id}>
                <th scope="row">{item.studentId}</th>
                <td>{item.studentName}</td>
                <td>{item.age}</td>
                <td>
                    <button className="btn btn-primary"> Sửa</button>
                    <button className="btn btn-danger"> Xóa</button>
                </td>
            </tr>
        )
    })
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Password</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {elementListStudent}
            </tbody>
        </table>

    )
}
