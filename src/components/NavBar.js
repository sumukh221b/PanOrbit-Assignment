import React, { useState, useEffect } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import Profile from "./Profile";
import axios from "axios";
import Gallery from "./Gallery";
import Posts from "./Posts";
import ToDo from "./ToDo";

const NavBar = (props) => {
    const { handleLoggedIn, isLoggedIn } = props

    const [users, setUsers] = useState([])
    const [userId, setUserId] = useState('')
    const [user, setUser] = useState({})

    const getUserID = (id) => {
        setUserId(id)
    }

    const getUser = (user) => {
        setUser(user)
    }

    useEffect(() => {
        axios.get('https://panorbit.in/api/users.json')
            .then((response) => {
                const usersResponse = response.data.users
                setUsers(usersResponse)
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [])

    return (
        <div>
            {
                isLoggedIn ? (
                    <div className="nav nav-pills mb-3 mt-3">
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <Link className="btn btn-primary nav-link active" aria-selected="true" to={`/profile/${userId}`} style={{ textDecoration: 'none' }} > Profile </Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link to="/posts" className="btn btn-primary nav-link" aria-selected="true" style={{ textDecoration: 'none' }} > Posts </Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link className="btn btn-primary nav-link" aria-selected="true" to="/gallery" style={{ textDecoration: 'none' }}> Gallery </Link>
                            </li>
                            <li className="nav-item" role="presentation">
                                <Link className="btn btn-primary nav-link" aria-selected="true" to="/todo" style={{ textDecoration: 'none' }} >ToDo</Link>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div >
                        <div className="d-flex justify-content-center mt-3">
                            <div className="card rounded" style={{ width: "500px" }}>
                                <div className="d-flex justify-content-center mb-3">
                                    <div> <h4> Select an account </h4> </div>
                                </div>
                                <ul className="list-group list-group-flush">
                                    {
                                        users.map(user => {
                                            return <li key={user.id} style={{ listStyle: 'none' }} className="list-group-item" > <img src={user.profilepicture} style={{ height: '20px', width: '20px', borderRadius: '10px' }} alt='users' /> <Link to={`/profile/${user.id}`} style={{ textDecoration: 'none' }} > {user.name} </Link> </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
            <Route path="/profile/:id" render={(props) => {
                return <Profile {...props} handleLoggedIn={handleLoggedIn} getUserID={getUserID} getUser={getUser} />
            }} />
            <Route path="/gallery" render={(props) => {
                return <Gallery {...props} handleLoggedIn={handleLoggedIn} user={user} />
            }} />
            <Route path="/posts" render={(props) => {
                return <Posts {...props} handleLoggedIn={handleLoggedIn} user={user} />
            }} />
            <Route path="/todo" render={(props) => {
                return <ToDo {...props} handleLoggedIn={handleLoggedIn} user={user} />
            }} />
        </div>
    )
}

const WrappedComponent = withRouter(NavBar)

export default WrappedComponent