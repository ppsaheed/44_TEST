import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { companyInfo } from '../data/services';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo purposes, just log to console
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [companyInfo.mobile, companyInfo.landline],
      action: `tel:${companyInfo.mobile.replace(/\s/g, '')}`
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: [companyInfo.email],
      action: `mailto:${companyInfo.email}`
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: [companyInfo.address],
      action: 'https://maps.google.com/?q=Office+G21+The+Market+Mall+DIP+1+Dubai'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 9:00 AM - 8:30 PM', 'Sunday: 10:00 AM - 4:00 PM'],
      action: null
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: companyInfo.socialMedia.instagram, color: 'hover:text-pink-500' },
    { name: 'Facebook', icon: Facebook, url: companyInfo.socialMedia.facebook, color: 'hover:text-blue-600' },
    { name: 'LinkedIn', icon: Linkedin, url: companyInfo.socialMedia.linkedin, color: 'hover:text-blue-700' },
    { name: 'YouTube', icon: Youtube, url: companyInfo.socialMedia.youtube, color: 'hover:text-red-600' },
  ];

  const serviceOptions = [
    'MOHRE Services (Tasheel)',
    'Immigration Services (GDRFA & Amer)',
    'Dubai Economy & Tourism (DET) Services',
    'Golden Visa Services',
    'External Approvals',
    'Tawjeeh Services',
    'Tadbeer Services',
    'DHA & MOH Licensing',
    'Attestation & Translation',
    'Insurance Services',
    'E-commerce Setup',
    'Other / General Inquiry'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-primary text-white section-padding">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl opacity-90">
              Ready to simplify your UAE government transactions? Get in touch with our expert team for personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg card-shadow hover:bg-white transition-colors duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {info.action && detailIndex === 0 ? (
                          <a 
                            href={info.action}
                            className="hover:text-primary transition-colors"
                            target={info.action.startsWith('http') ? '_blank' : undefined}
                            rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 card-shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                      placeholder="Please describe your requirements or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2" size={20} />
                  </button>
                </form>
              )}
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-lg p-8 card-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Location
                </h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="text-gray-400 mx-auto mb-2" size={48} />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">
                      Office G21, The Market Mall<br />
                      DIP 1, Dubai, UAE
                    </p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Office+G21+The+Market+Mall+DIP+1+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  View on Google Maps
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg p-8 card-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <p className="text-gray-600 mb-6">
                  Stay connected with us on social media for updates, tips, and success stories.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 transition-colors duration-200 ${social.color}`}
                        aria-label={social.name}
                      >
                        <IconComponent size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-primary text-white rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="opacity-90 mb-6">
                  For urgent matters, call us directly or send a WhatsApp message.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+971561644144"
                    className="block w-full bg-white text-primary text-center py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    📞 Call: +971 56 164 4144
                  </a>
                  <a
                    href={`https://wa.me/971561644144?text=Hello, I'm interested in your services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                  >
                    💬 WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
