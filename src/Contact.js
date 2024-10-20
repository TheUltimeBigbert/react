import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="text-center">
            {submitted ? (
                <SubmissionSuccess formData={formData} />
            ) : (
                <form onSubmit={handleSubmit}>
                    <h1>Contact Me</h1>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <textarea name="message" placeholder="Message" onChange={handleChange} required></textarea>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

const SubmissionSuccess = ({ formData }) => {
    return (
        <div>
            <h2>Thank you, {formData.name}! Your message has been sent.</h2>
            <p>Email: {formData.email}</p>
            <p>Message: {formData.message}</p>
        </div>
    );
};

export default Contact;