import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
            {...rest} 
            render={(props) => {
                return localStorage.getItem('email') ? (
                    <Component {...props} /> 
                ) : (
                    <Redirect to={{
                        pathname: "/"
                    }}
                    />
                )
            }}
        />
    )
}

export default PrivateRoute