import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="add_btn mb-2 mt-2">
                    <a href="/"><button className='btn btn-secondary'>Add Data</button></a>
                </div>

                <table class="table">
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>mark@gmail.com</td>
                            <td>Developer</td>
                            <td>9122558897</td>
                            <td className='d-flex justify-content-between'>
                                <button className='btn btn-success'><RemoveRedEyeIcon /></button>
                                <button className='btn btn-warning'><EditIcon /></button>
                                <button className='btn btn-danger'><DeleteIcon /></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Joe</td>
                            <td>joe@gmail.com</td>
                            <td>Developer</td>
                            <td>8122558897</td>
                            <td className='d-flex justify-content-between'>
                                <button className='btn btn-success'><RemoveRedEyeIcon /></button>
                                <button className='btn btn-warning'><EditIcon /></button>
                                <button className='btn btn-danger'><DeleteIcon /></button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}
