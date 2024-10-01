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

const Signup = () => {
    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(""); 
    const [formError, setFormError] = useState(""); 
    const CreateAccount = async () => {
        
        if (!fname || !email || !password) {
            setFormError("All fields are required."); 
            return;
        }


        if (!email.includes('@')) {
            setEmailError("Please enter a valid email address with '@'."); 
            return;
        } else {
            setEmailError(""); 
        }

        try {
            const response = await axios.get(
                `http://localhost:5000/Signup?fname=${fname}&email=${email}&password=${password}`
            );

            if (response.data.status === 'success') {
                toast.success("Your account has been successfully created. Redirecting to login...", {
                    position: "top-right"
                });
                setTimeout(() => {
                    window.location.replace('/Login');
                }, 2000);
            } else {
                toast.error("Account creation failed. Please try again.", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    };

    return (
        <div className="container center p-4">
            <Design>
                <div className="BOX row">
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
                    <div className="col-md-5">
                        <div className="rounded border p-3">
                            <h3 className="login mt-4 text-center">Sign Up</h3>
                            <p className="first text-center">Create your Account</p>
                            <p className="second ms-5 mb-1 fw-bold">Full Name</p>
                            <input
                                onChange={(e) => setFname(e.target.value)}
                                placeholder="Enter your Full Name"
                                className="form-control ms-5 w-75 mb-3 me-5"
                            />
                            <p className="second ms-5 mb-1 fw-bold">Email</p>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your Email"
                                className="form-control ms-5 w-75 mb-1 me-5"
                            />
                            {emailError && <p className="text-danger ms-5">{emailError}</p>} 
                            
                           
                            <p className="second ms-5 mb-1 fw-bold">Password</p>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Enter your Password"
                                className="form-control ms-5 w-75 mb-3 me-5"
                            />

        
                            {formError && <p className="text-danger ms-5">{formError}</p>}

                            <button
                                className="btn btn-info w-75 ms-5 mt-1 mb-2 me-5"
                                onClick={CreateAccount}
                            >
                                CREATE ACCOUNT
                            </button>

                            <div className="red">
                                <h6 className="mr-5">Already have an account?</h6>
                                <h6 className="text-danger ms-1 mb-2" onClick={() => window.location.replace('/Login')}>
                                    Login
                                </h6>
                            </div>

                            <p className="text-center mb-2">
                                By signing up, you agree to our
                                <div className="space">
                                    <a href="#">Terms and Conditions</a>
                                    <p>&</p>
                                    <a href="#">Privacy Policy</a>
                                </div>
                                <p className="text-center text-danger">Need Help? Get In Touch</p>
                            </p>
                        </div>
                    </div>
                </div>

                <ToastContainer />
            </Design>
        </div>
    );
};

export default Signup;
const Design = styled.div`
    .BOX {
        margin-top: 200px;
    }
`