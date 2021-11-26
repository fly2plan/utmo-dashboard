import React, { useLayoutEffect, useState } from 'react';
import { useAuth, useUser } from '../../contexts/auth';
import { Credentials } from '../../contexts/auth';
import { useHistory } from 'react-router-dom';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useMutation } from 'react-query';
import { AxiosResponse } from 'axios';
import './login.css';


const Login: React.FC<any> = () => {
    const auth = useAuth();
    const user = useUser();
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const submitCredentials = useMutation<AxiosResponse<Credentials>, Error, Credentials>(auth.login)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = e.target;
        switch (name) {
            case "username":
                setUsername(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
        };
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        submitCredentials.mutate({ username, password })
    };


    useLayoutEffect(() => {
        if (user) {
            history.push('/plan');
        }
    }, [user]);

    return (
        <div className="login-page" >
            <h1 className="mb-3" >
                UTMO Dashboard
            </h1>
            <Form noValidate onSubmit={handleSubmit} >
                <Form.Group className="login-page-username" controlId="formUsername">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Username"
                        className="mb-3"
                    >
                        <Form.Control name="username" type="text" placeholder="Username" onChange={handleInputChange} isInvalid={submitCredentials.isError} />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                        className="mb-3"
                    >
                        <Form.Control name="password" type="password" placeholder="Password" onChange={handleInputChange} isInvalid={submitCredentials.isError} />
                        <Form.Control.Feedback type="invalid">
                            {submitCredentials.isError ? submitCredentials.error!.message : ""}
                        </Form.Control.Feedback>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="login-page-status" >
                    {submitCredentials.isLoading ? (
                        <div>
                            <div className="login-page-hidden mb-3">
                                ''
                            </div>
                            <div className='spinner' />
                        </div>
                    ) : (
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    )}
                </Form.Group>
            </Form>
        </div >
    );
}

export default Login;