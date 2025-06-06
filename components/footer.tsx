"use client";
import { Twitter, Linkedin, Mail, Send, MessageCircleMore } from "lucide-react";

export default function Footer() {
  return (
    <div className="text-white px-6 py-12 mt-12 bg-black/80">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Viraj.</h2>
          <p className="text-[#d6d6d6]">
            Powering growth for the decentralized future. We build, scale, and
            sustain communities in Web3.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-[#d6d6d6] text-sm">
            <li className="hover:text-[#e0d6cf] transition cursor-pointer">Home</li>
            <li className="hover:text-[#e0d6cf] transition cursor-pointer">About Us</li>
            <li className="hover:text-[#e0d6cf] transition cursor-pointer">Works</li>
            <li className="hover:text-[#e0d6cf] transition cursor-pointer">Article</li>
            <li className="hover:text-[#e0d6cf] transition cursor-pointer">Book a Call</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-4">Stay Updated</h3>
          <p className="text-[#d6d6d6] mb-3 text-sm">
            Subscribe to our newsletter for updates on Web3 trends and
            campaigns.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="rounded-md px-3 py-2 text-white border-white text-sm w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-[#e0d6cf] transition flex items-center gap-1"
            >
              <Send className="w-4 h-4" /> Subscribe
            </button>
          </form>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-white">
            <a href="#" className="hover:text-[#e0d6cf]" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#e0d6cf]" aria-label="Discord">
              <MessageCircleMore className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#e0d6cf]" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@web3mark.com"
              className="hover:text-[#e0d6cf]"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white pt-6 text-sm text-[#d6d6d6] text-center">
        <p>&copy; {new Date().getFullYear()} Viraj. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#" className="hover:text-[#e0d6cf]">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#e0d6cf]">
            Terms of Service
          </a>
        </div>
        <div>Made with ❤️ by Viraj</div>
      </div>
    </div>
  );
}
