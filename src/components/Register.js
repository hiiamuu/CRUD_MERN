import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Register() {

    const [input, setinput] = useState({
        name: "", email: "",
        age: "", mobile: "",
        work: "", add: "",
        desc: ""
    })
    const setdata = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target;
        setinput((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const addinput = async (e) => {
        e.preventDefault();

        const { name, email, age, mobile, work, add, desc } = input;
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, age, mobile, work, add, desc
            })
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 404 || !data) {
            alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else {
            alert("Registration Successful");
            console.log("Registration Successful");
        }

    }

    return (
        <div className="container">
            <NavLink to="/">home</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" onChange={setdata} value={input.name} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">email</label>
                        <input type="email" onChange={setdata} value={input.email} name="email" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">age</label>
                        <input type="text" onChange={setdata} value={input.age} name="age" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Mobile</label>
                        <input type="number" onChange={setdata} value={input.mobile} name="mobile" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Work</label>
                        <input type="text" onChange={setdata} value={input.work} name="work" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" onChange={setdata} value={input.add} name="add" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" className="form-label">Description</label>
                        <textarea onChange={setdata} value={input.desc} name="desc" className="form-control" id="" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit" onClick={addinput} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>

    )
}
