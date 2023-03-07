import React from "react";

const Gallery = (props) => {
    const { handleLoggedIn, user } = props

    const handleSignOut = () => {
        localStorage.removeItem('email')
        handleLoggedIn()
        props.history.push('/')
    }

    return (
        <div>
            <div>
                <div className="mt-5">
                    <div className="row">
                        <div className="col-md-6" >
                            <h5> Gallery </h5>
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
                </div>
            </div>
            <hr />
            <div style={{ textAlign: "center" }}>
                <h2>Coming Soon</h2>
            </div>
        </div>
    )
}

export default Gallery