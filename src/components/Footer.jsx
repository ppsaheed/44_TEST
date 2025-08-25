import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { companyInfo } from '../data/services';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: companyInfo.socialMedia.instagram },
    { name: 'Facebook', icon: Facebook, url: companyInfo.socialMedia.facebook },
    { name: 'LinkedIn', icon: Linkedin, url: companyInfo.socialMedia.linkedin },
    { name: 'YouTube', icon: Youtube, url: companyInfo.socialMedia.youtube },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">44</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">44 Digital Business Services </h3>
                <p className="text-gray-400">{companyInfo.motto}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {companyInfo.description}
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a 
                  href={`https://${companyInfo.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Official Website
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">{companyInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <div>
                  <div className="text-gray-300">{companyInfo.mobile}</div>
                  <div className="text-gray-300">{companyInfo.landline}</div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Globe size={18} className="text-primary flex-shrink-0" />
                <a 
                  href={`https://${companyInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {companyInfo.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Made with ❤️ in UAE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
