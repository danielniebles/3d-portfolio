import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal-background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let&apos;s talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Wheter you are looking to build a new website, improve your existing
            platform, or bring a unique project to life, I am here to help
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="field-input"
                placeholder="John Doe"
                required
              />
            </label>
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Your Name</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="field-input"
                placeholder="john.doe@gmail.com"
              />
            </label>
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="field-input"
                placeholder="Hi I'm interested in..."
                rows={5}
                required
              />
            </label>
            <button type="submit" className="field-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
      {/* <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <div className="relative flex items-center px-4 py-2 bg-gray-800/40 backdrop-blur-md border-b border-gray-500/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.25)_10%,_rgba(0,0,0,0)_60%)] pointer-events-none"></div>

          <div className="relative flex space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_6px_#ff5f57]"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_6px_#ffbd2e]"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_6px_#28c840]"></span>
          </div>

          <div className="flex-grow"></div>
          <div className="relative text-gray-400 text-xl">+</div>
        </div>

        <div className="h-32 bg-black"></div>
      </div> */}
    </section>
  );
};

export default Contact;
