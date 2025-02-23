export default function Contact() {
    return (
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center">Contact Me</h2>
        <form className="mt-8 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-4 bg-gray-800 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 bg-gray-800 rounded-lg"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 mb-4 bg-gray-800 rounded-lg"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  }