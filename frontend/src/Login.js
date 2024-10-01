import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';
import s1 from './image/s1.png';
import s2 from './image/s2.png';
import s3 from './image/s3.png';
import s4 from './image/s4.png';
import s5 from './image/s5.png';
import axios from "axios";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateForm = () => {
        let isValid = true;

        if (!email) {
            setEmailError("Email is required");
            isValid = false;
        } else if (!validateEmail(email)) {
            setEmailError("Invalid email format");
            isValid = false;
        } else {
            setEmailError("");
        }

        if (!password) {
            setPasswordError("Password is required");
            isValid = false;
        } else {
            setPasswordError("");
        }

        return isValid;
    };

    const LoginUser = async () => {
        if (!validateForm()) {
            return; 
        }

        try {
            const response = await axios.get(
                `http://localhost:5000/Login?email=${email}&password=${password}`
            );

            if (response.data.status === "success") {
                localStorage.setItem("userdata", JSON.stringify(response.data));
                localStorage.setItem("loginstatus", "true");
                toast.success("Welcome Back! You have successfully logged in.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(() => {
                    window.location.replace("/Homepage");
                }, 2000);
            } else {
                toast.error("Login Failed: Invalid details provided. Please try again.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            toast.error("An error occurred during login. Please try again later.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className="container center p-4 w-5">
            <Design>
                <div className="BOX col d-flex">
                    <div className="rounded mt-2 mb-2 p-3 w-50 border">
                        <Carousel>
                            <CarouselItem>
                                <div className="text-center p-5">
                                    <img className="who center" alt='home' src={s1} />
                                    <div className="p-5">
                                        <h4 className="text-center mb-4">Know your Medicines</h4>
                                        <p className="m-0">View medicine information like usage, side effects and</p>
                                        <p>cheaper substitutes before you take them.</p>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="text-center p-5">
                                    <img className="who" alt='home' src={s2} />
                                    <div className="p-5">
                                        <h4 className="text-center mb-4">Make Healthcare Simpler</h4>
                                        <p className="m-0">Get medicine information, order medicines, book lab</p>
                                        <p>tests and consult doctors online from the comfort of</p>
                                        <p>your home.</p>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="text-center p-5">
                                    <img className="who" alt='home' src={s3} />
                                    <div className="p-5">
                                        <h4 className="text-center mb-4">Medicine, Home Delivered</h4>
                                        <p className="m-0">Order any medicines or health product and we'll deliver</p>
                                        <p>it for free. Enjoy discounts on everything.</p>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="text-center p-5">
                                    <img className="who" alt='home' src={s4} />
                                    <div className="p-5">
                                        <h4 className="text-center mb-4">Lab Tests at Home</h4>
                                        <p className="m-0">Book any test from any lab. We'll collect the sample</p>
                                        <p>and send the reports. Save up to 80% every time.</p>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="text-center p-5">
                                    <img className="nature" alt='homeimages' src={s5} />
                                    <div className="p-5">
                                        <h4 className="text-center mb-4">Health Related Queries?</h4>
                                        <p className="m-0">Consult our certified doctors from anywhere, anytime,</p>
                                        <p>and for free. We guarantee your privacy.</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                    <div className="rounded mt-2 mb-2 p-3 border">
                        <h3 className="login mt-3 text-center">Login</h3>
                        <p className="first mb-3">Get access to your orders, lab tests & doctor consultations</p>
                        <h6 className="second mb-1 ms-5 fw-bold">Enter Email ID or Mobile Number</h6>
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError(""); 
                            }}
                            value={email}
                            type="email"
                            placeholder=""
                            className="form-control ms-5 w-75 mb-3"
                        />
                        {emailError && <div className="text-danger ms-5 mb-3">{emailError}</div>}
                        <h6 className="second mb-1 ms-5 fw-bold">Enter Password</h6>
                        <input
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setPasswordError(""); 
                            }}
                            value={password}
                            type="password"
                            placeholder=""
                            className="form-control ms-5 w-75 mb-3"
                        />
                        {passwordError && <div className="text-danger ms-5 mb-3">{passwordError}</div>}
                        <button
                            className="btn btn-info w-75 ms-5 mt-3 mb-4"
                            onClick={LoginUser}
                        >
                            LOGIN
                        </button>
                        <div className="red">
                            <h6 className="mr-5">New on 1mg?</h6>
                            <h6 className="text-danger ms-1" onClick={() => window.location.replace('/Signup')}>
                                Signup
                            </h6>
                        </div>
                        <p className="text-center p-2">
                            By logging in, you agree to our
                            <div className="space mt-2 mb-2">
                                <a href="#">Terms and Conditions</a>
                                <p>&</p>
                                <a href="#"> Privacy Policy</a>
                            </div>
                            <p className="text-center text-danger">Need Help? Get In Touch</p>
                        </p>
                    </div>
                </div>
                <ToastContainer />
            </Design>
        </div>
    );
};

export default Login;

const Design = styled.div`
    .BOX {
        margin-top: 200px;
    }
`;
