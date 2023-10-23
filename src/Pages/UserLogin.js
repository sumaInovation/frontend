import React, { useState } from 'react'

const Userlogin = () => {

    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const sendData = (e) => {
        e.preventDefault();
        
        /*   post request */
        fetch("https://backend-p18d.onrender.com/", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                name: UserName,
                password: Password
            })
        })
            .then(res => res.json())
            .then(d => { alert(d.message) })
    }
    return (
        <>
            <br />
            <br />
            <br />
            <center>
                <div style={{ width: "25%" }}>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                            <form onSubmit={sendData}>
                                <div className="text-center mb-3">
                                    <p>Sign in</p>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="email" id="loginName" class="form-control"
                                        onChange={e => { setUserName(e.target.value) }} />
                                    <label className="form-label" for="loginName">Email</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" id="loginPassword" class="form-control"
                                        onChange={e => { setPassword(e.target.value) }} />
                                    <label className="form-label" for="loginPassword">Password</label>
                                </div>

                                <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>





                            </form>
                        </div>


                    </div>

                </div>
            </center>
        </>



    )

}

export default Userlogin
