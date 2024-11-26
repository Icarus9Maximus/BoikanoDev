const Contact = () => {
  return (
    <section className="bg-gray-100 py-2 px-6 sm:px-12 lg:px-24" id="contact">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Get In Touch
            </h2>
            <p className="text-lg text-gray-800">Excited to connect with companies seeking a responsible frontend or full-stack developer to join their team. Having an interest in crafting responsive and user-friendly web applications, I&apos;m always looking for new challenges that would be positively influenced by my technical skills. Whether you need a developer who can develop seamless user experiences or a full-stack developer, I will enjoy hearing from you.</p><br />
            <p className="text-2xl text-gray-800 mb-11"> Let&apos;s make something amazing happen!</p>
            <a
            href="mailto:ranapeboikano9@gmail.com"
            className="border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Get in Touch
          </a>
        </div>
        {/* <div className="flex flex-wrap justify-center gap-3 mt-6">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48"><path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path></svg>
        </div> */}
        <Footer />
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-4">
        <div className="text-center">
          <p className="text-lg">Connect with me:</p>
        </div>
        <ul className="flex space-x-6">
          <li>
            <a
              href="https://www.linkedin.com/in/boikano-ranape-a18622257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition"
            >
              {/* LinkedIn Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.229c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.229h-3v-5.6c0-1.335-.021-3.053-1.859-3.053-1.859 0-2.141 1.452-2.141 2.956v5.697h-3v-10h2.879v1.367h.041c.401-.756 1.378-1.551 2.837-1.551 3.032 0 3.593 1.996 3.593 4.59v5.594z" />
              </svg>
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
            <path d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.2.48 2.5.73 3.8.73a1 1 0 011 1v3.51a1 1 0 01-1 1C10.01 21.65 2.35 14 2.35 4.35a1 1 0 011-1h3.51a1 1 0 011 1c0 1.3.25 2.6.73 3.8a1 1 0 01-.27 1.11l-2.2 2.2z" />
            </svg>
            <a href="tel:+27649746246" className="text-white hover:text-blue-500 transition">
            +27 64 974 6246
            </a>
          </li>
          <li>
            <a
              href="mailto:ranapeboikano9@gmail.com"
              className="text-white hover:text-blue-500 transition"
            >
              {/* Email Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12.713l11.985-6.713h-23.97l11.985 6.713zm11.985-8.713c.009.069.015.138.015.207v14.812c0 1.103-.897 2-2 2h-20c-1.103 0-2-.897-2-2v-14.812c0-.069.005-.138.015-.207l11.985 6.713 11.985-6.713z" />
              </svg>
            </a>
          </li>

        </ul>
      </div>
    </footer>
  );
};

export default Contact
