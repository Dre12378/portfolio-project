import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = ({target: {name,value}}) => {
        setForm({...form, [name]:value});
    }


    //service_oap83ka

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await emailjs.send('service_oap83ka', 'template_fzvyyuu',
                {
                    from_name: form.name,
                    to_name: 'Andre',
                    from_email: form.email,
                    to_email: 'andrepdeguzman@gmail.com',
                    message: form.message
                },
                'syBRcGElM0r1JJg8l');
            setLoading(false);
            alert('Message has been sent.');
            setForm({
                name: '',
                email: '',
                message: '',
            })
        }
        catch (e) {
            console.log(e);
            setLoading(false);
            alert('Something went wrong!');
        }
        setLoading(true);


    }

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="assets/terminal.png" alt="terminal" className="absolute inset-0 min-h-screen"/>
                <div className="contact-container">
                    <h3 className="head-text">Let' talk</h3>
                    <p className="text-leg text-white-600 mt-3">
                        Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
                    </p>
                    <form ref={formRef} className="mt-12 flex flex-col space-y-7" onSubmit={handleSubmit}>
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Full Name"
                                />
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="sampleemail@gmail.com"
                            />
                            <span className="field-label">Message</span>
                            <textarea
                                type="text"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={4}
                                required
                                className="field-input"
                                placeholder="Hi, I wanna give you a job..."
                            />
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
