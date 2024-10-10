import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#1c150d] text-white py-12">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kiprich Safaris</h3>
            <p className="text-sm">
              Discover the wonders of Kenya with our expert-guided safaris.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-[#f49a25] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-[#f49a25] transition-colors"
                >
                  Our Safaris
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-[#f49a25] transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm hover:text-[#f49a25] transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="text-sm mb-2">Email: info@kiprichsafaris.com</p>
            <p className="text-sm mb-2">Phone: +254 16 340 304</p>
            <p className="text-sm">Address: Nairobi, Kenya</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-2xl hover:text-[#f49a25] transition-colors"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-[#f49a25] transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-[#f49a25] transition-colors"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-[#f49a25] transition-colors"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">
            &copy; 2024 Kiprich Safaris. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
