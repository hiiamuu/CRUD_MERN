import React from 'react'

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="add_btn mb-2 mt-2">
                    <button className='btn btn-secondary'>Add Data</button>
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
                                <button className='btn btn-success'><i class="fa-solid fa-eye"></i></button>
                                <button className='btn btn-warning'><i class="fa-solid fa-pen-to-square"></i></button>
                                <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Joe</td>
                            <td>joe@gmail.com</td>
                            <td>Developer</td>
                            <td>8122558897</td>
                            <td className='d-flex justify-content-between'>
                                <button className='btn btn-success'><i class="fa-solid fa-eye"></i></button>
                                <button className='btn btn-warning'><i class="fa-solid fa-pen-to-square"></i></button>
                                <button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}
