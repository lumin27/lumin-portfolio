import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_wy33a1i",
        "template_u3u5rzl",
        {
          from_name: form.name,
          to_name: "Luumin",
          from_email: form.email,
          to_email: "luumin369@gmail.com",
          message: form.message,
        },
        "4T4YvwSuFzD5YAKyP"
      );

      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='c-space my-20' id='contact'>
      <div
        className='relative min-h-screen flex items-center
       justify-center flex-col'>
        <div className='contact-container'>
          <h3 className='head-text'>Let's talk</h3>
          <p className='text-lg text-white-600 mt-3'>
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'd love to hear from
            you.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col space-y-7'>
            <label className='space-y-3'>
              <span className='field-label'>Full Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='John Doe'
              />
            </label>

            <label htmlFor='' className='space-y-3'>
              <span className='field-label '>Email</span>
              <input
                type='text'
                name='email'
                value={form.email}
                onChange={handleChange}
                required
                className='field-input'
                placeholder='johndoe@gmail.com'
              />
            </label>

            <label htmlFor='' className='space-y-3'>
              <span className='field-label '>Your message</span>
              <textarea
                name='message'
                value={form.message}
                onChange={handleChange}
                required
                rows={`sm: 4 md: 5`}
                className='field-input'
                placeholder='Hi, I wanna give you a job...'
              />
            </label>

            <button className='field-btn' type='submit' disabled={loading}>
              {loading ? "Sending..." : "Send Message"}

              <img
                src='/assets/arrow-up.png'
                alt='arrow-up'
                className='field-btn_arrow'
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
