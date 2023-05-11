import React, { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom'

export default function Home() {

    const [getuserdata, setuserdata] = useState([]);
    console.log(getuserdata);
    const getinput = async (e) => {

        const res = await fetch("/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });
        const data = await res.json();
        console.log(data);

        if (res.status === 404 || !data) {

            console.log("Invalid Registration");
        }
        else {
            setuserdata(data);
            console.log("Get data successfully");
        }

    }

    useEffect(() => {
        getinput();
    }, []);



    return (
        <>
            <div className="container">
                <div className="add_btn mb-2 mt-2">
                    <NavLink to="/register" className='btn btn-secondary'>Add Data</NavLink>
                </div>

                <table className="table">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getuserdata.map((element, id) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{id + 1}</th>
                                            <td>{element.name}</td>
                                            <td>{element.email}</td>
                                            <td>{element.work}</td>
                                            <td>{element.mobile}</td>
                                            <td className='d-flex justify-content-between'>
                                                <button className='btn btn-success'><RemoveRedEyeIcon /></button>
                                                <button className='btn btn-warning'><EditIcon /></button>
                                                <button className='btn btn-danger'><DeleteIcon /></button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            }
                            )}
                    </tbody>
                </table>
            </div>
        </>
    )
}
