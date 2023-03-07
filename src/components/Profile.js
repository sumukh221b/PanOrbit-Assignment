import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = (props) => {
    const { id } = props.match.params
    const { handleLoggedIn, getUserID, getUser } = props

    const [user, setUser] = useState({})
    const [lat, setLat] = useState('')
    const [lng, setLng] = useState('')

    useEffect(() => {
        axios.get('https://panorbit.in/api/users.json')
            .then((response) => {
                const result = response.data.users
                handleLoggedIn()
                const user = result.find(user => user.id == id)
                getUserID(user.id)
                getUser(user)
                localStorage.setItem('email', user.email)
                setUser(user)
                setLat(user.address && user.address.geo.lat)
                setLng(user.address && user.address.geo.lng)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [id])

    const handleSignOut = () => {
        localStorage.removeItem('email')
        handleLoggedIn()
        props.history.push('/')
    }

    return (
        <div>
            <div className="mt-5">
                <div className="row">
                    <div className="col-md-6" >
                        <h5> Profile </h5>
                    </div>
                    <div className="col-md-6">
                        <div className="dropdown">
                            <a data-bs-toggle="dropdown" style={{ textDecoration: 'none' }} aria-expanded="false">
                                <img src={user.profilepicture} style={{ width: '30px', height: '30px', borderRadius: '15px' }} alt="user" /> {user.name}
                            </a>
                            <ul className="dropdown-menu dropdown-menu-light w-50">
                                <li>
                                    <div className="row my-2">
                                        <div className="col d-flex justify-content-center"> <img src={user.profilepicture} style={{ width: '150px', height: '150px', borderRadius: '75px' }} alt="user" /> </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col text-center"> {user.name} </div>
                                    </div>
                                    <div className="row my-2">
                                        <div className="col text-center"> {user.email} </div>
                                    </div>
                                    <hr />
                                    <div className="row my-1">
                                        <div className="col text-center"> <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1003.jpeg" style={{ width: '30px', height: '30px', borderRadius: '15px' }} alt="user-2" /> Clementine Bauch </div>
                                    </div>
                                    <hr />
                                    <div className="row my-1 ">
                                        <div className="col text-center"> <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1004.jpeg" style={{ width: '30px', height: '30px', borderRadius: '15px' }} alt="user-3" /> Patricia Lebsack </div>
                                    </div>
                                    <hr />
                                    <div className="row my-2">
                                        <div className="col d-flex justify-content-center"> <button className="btn btn-danger" onClick={handleSignOut} >Signout</button> </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <img src={user.profilepicture} style={{ width: '250px', height: '250px', borderRadius: '125px' }} alt="user" />
                        </div>
                        <div>
                            <h3> {user.name} </h3>
                        </div>
                        <div>
                            <h5> Username : {user.username} </h5>
                            <h5> e-mail : {user.email} </h5>
                            <h5> Phone : {user.phone} </h5>
                            <h5> Website : {user.website} </h5>
                        </div>
                        <hr />
                        <div>
                            <h4>Company</h4>
                            <h5> Name : {user.company && user.company.name} </h5>
                            <h5> catchphrase : {user.company && user.company.catchPhrase} </h5>
                            <h5> bs : {user.company && user.company.bs} </h5>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mt-3">
                            <div>
                                <h4>Address:</h4>
                            </div>
                            <div>
                                <h5> Street : {user.address && user.address.street} </h5>
                                <h5> Suite : {user.address && user.address.suite} </h5>
                                <h5> City : {user.address && user.address.city} </h5>
                                <h5> Zipcode : {user.address && user.address.zipcode} </h5>
                            </div>
                        </div>
                        <div className="mt-3">
                            <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.6a3d46d8812aac7571ec16b1c25451f0&center=${lat},${lng}&zoom=10&size=550x550&format=png&maptype=roadmap|${lat},${lng}&markers=icon:tiny-red-cutout|${lat},${lng}`} alt="map" />
                            <div>
                                <p style={{ textAlign: "right" }}>Lat : <b> {lat} </b>  Long: <b> {lng} </b> </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-end">
                                <a className="btn btn-primary float-right" style={{ width: "300px" }} data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Chat</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="collapse multi-collapse" id="multiCollapseExample1">
                                    <div className="card card-body" style={{ width: "300px", marginLeft: "200px" }}>
                                        <div>
                                            <ul className="list-group">
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1003.jpeg" style={{ width: '30px', height: '30px', borderRadius: '15px' }} alt="user-2" /> <label>Clementine Bauch</label>
                                                    <span className="badge bg-success start-100 translate-middle p-1 border border-light rounded-circle">{' '}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1004.jpeg" style={{ width: '30px', height: '30px', borderRadius: '15px' }} alt="user-2" /> <label>Patricia Lebsack</label>
                                                    <span className="badge bg-success start-100 translate-middle p-1 border border-light rounded-circle">{' '}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" style={{ width: '30px', height: '30px', borderRadius: '15px' }} alt="user-2" /> <label>Ervin Howell</label>
                                                    <span className="badge bg-secondary start-100 translate-middle p-1 border border-light rounded-circle">{' '}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1005.jpeg" style={{ width: '30px', height: '30px', borderRadius: '15px' }} alt="user-2" /> <label>Chelsey Dietrich</label>
                                                    <span className="badge bg-secondary start-100 translate-middle p-1 border border-light rounded-circle">{' '}</span>
                                                </li>
                                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                                    <img src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1007.jpeg" style={{ width: '30px', height: '30px', borderRadius: '15px' }} alt="user-2" /> <label>Kurtis Weissnat</label>
                                                    <span className="badge bg-success start-100 translate-middle p-1 border border-light rounded-circle">{' '}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Profile