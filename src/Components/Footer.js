import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t  from-gray-900  to-black text-white lg:mt-32 pt-16 pb-8 px-4    sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
              MovieFlow
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your ultimate destination for discovering, exploring, and enjoying
              the world of cinema. From classics to the latest releases, we
              bring movies to life.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: FaGithub, href: "#", label: "GitHub" },
                { icon: FaLinkedin, href: "#", label: "LinkedIn" },
                { icon: FaTwitter, href: "#", label: "Twitter" },
                { icon: FaInstagram, href: "#", label: "Instagram" },
                { icon: FaYoutube, href: "#", label: "YouTube" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["Home", "Movies", "TV Shows", "New Releases", "Trending"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Categories
            </h3>
            <ul className="space-y-3">
              {[
                "Action",
                "Comedy",
                "Drama",
                "Thriller",
                "Horror",
                "Romance",
                "Sci-Fi",
                "Documentary",
              ].map((genre) => (
                <li key={genre}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {genre}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4">
              Get the latest movie news and updates.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 MovieFlow. All rights reserved.
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "DMCA",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center text-gray-400 text-sm">
              Made with <FaHeart className="text-red-500 mx-1" /> by Mr Syed
              Naveeth S
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 ">
          <p className="text-gray-500 text-xs">
            MovieFlow uses the TMDb API but is not endorsed or certified by
            TMDb.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
