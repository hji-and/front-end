export function Footer() {
  return (
    <footer className="ml-80 bg-gray-50 px-16 py-16">
      <div className="max-w-4xl">
        <div className="grid grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div>
            <h4 className="text-2xl mb-6">Let's work together</h4>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Name"
                className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-[#00d9c0]"
              />
              <input 
                type="email" 
                placeholder="Email"
                className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-[#00d9c0]"
              />
              <textarea 
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-300 focus:outline-none focus:border-[#00d9c0]"
              ></textarea>
              <button 
                type="submit"
                className="bg-[#00d9c0] text-black px-8 py-3 hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-2xl mb-6">Get in touch</h4>
            <div className="space-y-4 text-gray-600">
              <p>hello@email.com</p>
              <p>+1 234 567 890</p>
              <p className="pt-4">
                New York, NY<br />
                United States
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-300 flex justify-between items-center text-sm text-gray-500">
          <p>© 2025 All rights reserved</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-700">Privacy Policy</a>
            <a href="#" className="hover:text-gray-700">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
