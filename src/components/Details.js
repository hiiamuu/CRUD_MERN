import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WorkIcon from '@mui/icons-material/Work';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Details() {
    return (
        <div className='container mt-3'>
            <h2 style={{ fontWeight: 350 }}>Welcome Joe Root</h2>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="add_btn">
                        <button className='btn btn-warning mx-2'><EditIcon /></button>
                        <button className='btn btn-danger'><DeleteIcon /></button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className='mt-3'>Name: <span style={{ fontWeight: 400 }} >Joe Root</span></h3>
                            <h3 className='mt-3'>Age: <span style={{ fontWeight: 400 }}>23</span></h3>
                            <p className='mt-3'><MailOutlineIcon />Email: <span>joeroot@gmail.com</span> </p>
                            <p className='mt-3'><WorkIcon />Occuption: <span>Webdeveloper</span> </p>
                        </div>

                        <div className="right_view col-lg-6 col-md-6 col-12">
                            <p className='mt-5'><PhoneAndroidIcon />Mobile: <span>+91 9122558842</span> </p>
                            <p className='mt-3'><LocationOnIcon />Location: <span>Puducherry</span> </p>
                            <p className='mt-3'>Description: <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, a.</span> </p>
                        </div>
                    </div>


                </CardContent>
            </Card>
        </div>
    )
}

export default Details