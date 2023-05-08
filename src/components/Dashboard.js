import React, { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const [logindata, setLoginData] = useState([]);


    const history = useNavigate();

    const [show, setShow] = useState(false);

    var todayDate = new Date().toISOString().slice(0, 10);
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
         
            setLoginData(user);


            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate
            });

           
        }
    }

    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

    useEffect(() => {
        Birthday();
    }, [])

    return (
        <>
            {
                logindata.length === 0 ? "errror" :
                    <>
                        <h1 align="center">Dash Page</h1>
                        <h1 >Name: {logindata[0].name}</h1>
                        <h1>Email: {logindata[0].email}</h1>
                        <h1>Date of Birth: {logindata[0].date}</h1>
                        
                        <div class="text-center">
                        <Button onClick={userlogout}>LOG OUT</Button>
                        </div>

                  
                    
                    </>
            }
        </>
    )
}

export default Dashboard





















