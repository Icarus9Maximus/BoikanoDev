const About = () => {
  return (
    <section
      className="about-section bg-gray-100 py-16 px-6 sm:px-12 lg:px-24"
      id="about"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Who Am I?
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Eita da! I am a passionate full-stack developer from Boksburg, specializing in crafting web applications that are smooth and agile using the so-called PERN stack: PostgreSQL, Express.js, React, and Node.js. I believe that each challenge gives me the chance to express creativity with technical precision. This ensures that the front end and back end of my applications are user-friendly and durable.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Besides coding, strategic games and further education bring balance and inspiration into my life. I play chess to improve my strategic thinking, which is such an important skill in life and development. Learning French on Duolingo not only adds a new dimension to my ability to communicate but underpins my commitment to continuous personal and professional growth.
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
            I combine these varied interests in my professional life through trying to bring something new into every project on which I work. My aim is the creation of applications that are not only solid on technical merits but also further enhanced by a global perspective and foresight with respect to strategy. Lets create something amazing together!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#projects"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition"
          >
            View My Projects
          </a>
          <a
            href="mailto:ranapeboikano9@gmail.com"
            className="border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default About;