import React from 'react';
import { FaWhatsapp, FaFacebook, FaMapMarkedAlt, FaAddressCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-orange-600 text-white py-8"> {/* Changed background to orange */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Support Us</h2>
            <p>1805 136th Pl NE #104</p>
            <p>Bellevue, WA 98005</p>
            <h2 className="text-xl font-bold mb-2">---------</h2>
            <ul>
              <li className="mb-2"><Link to="/contact">Contact us</Link></li>
              <li className="mb-2"><a href="https://www.paypal.com/paypalme/SaiParivarFoundation" target={"_blank"} rel="noreferrer"
                                      className="text-gray-200 hover:text-white">Donate</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://chat.whatsapp.com/GY0E24mpiiCLtDNf7cLWze" target={"_blank"} rel="noreferrer"
                 className="text-green-500 hover:text-green-400"> {/* WhatsApp */}
                <FaWhatsapp className="w-6 h-6"/>
              </a>
              <a href="https://www.facebook.com/ShirdiSaiDhamBellevue" target={"_blank"} rel="noreferrer"
                 className="text-blue-500 hover:text-blue-400"> {/* Facebook */}
                <FaFacebook className="w-6 h-6"/>
              </a>
              <a href="https://maps.app.goo.gl/Pi6b2idtonBY5afNA" target={"_blank"} rel="noreferrer"
                 className="text-gray-950 hover:text-gray-500"> {/* Google Maps */}
                <FaMapMarkedAlt className="w-6 h-6"/>
              </a>
              <a href="https://maps.app.goo.gl/C5matwznBA3wccsv8" target={"_blank"} rel="noreferrer"
                 className="text-gray-950 hover:text-gray-500"> {/* Parking */}
                <FaAddressCard className="w-6 h-6"/>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul>
              <li className="mb-2"><Link to="/">Home</Link></li>
              <li className="mb-2"><Link to="/sai-baba">Sai Baba</Link></li>
              <li className="mb-2"><Link to="/guruji">Guruji</Link></li>
              <li className="mb-2"><Link to="/Pictures">Gallery</Link></li>
              <li className="mb-2"><Link to="/AboutUs">About us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;