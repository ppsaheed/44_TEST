import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Users, Clock, Shield } from 'lucide-react';
import { companyInfo, storyContent } from '../data/services';

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Quick turnaround times for all government transactions'
    },
    {
      icon: Shield,
      title: 'Fully Compliant',
      description: 'Complete adherence to UAE government regulations'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals handling your paperwork'
    },
    {
      icon: Star,
      title: 'Trusted Service',
      description: 'Hundreds of satisfied clients across the UAE'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fadeInUp">
              <span className="text-gradient">{companyInfo.motto}</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 animate-fadeInUp animation-delay-200">
              {companyInfo.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-400">
              <Link to="/services" className="btn-primary">
                Explore Services
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose 44 Digital?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We don't just process transactions. We build legacies. We turn visitors into visionaries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 rounded-lg card-shadow bg-white hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {storyContent.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {storyContent.subtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Story Introduction */}
            <div className="bg-white rounded-lg p-8 card-shadow mb-8">
              {storyContent.story.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {storyContent.achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-lg p-6 card-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {achievement.title}
                  </h3>
                  <ul className="space-y-2">
                    {achievement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="bg-primary text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Your Story Could Be Next
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Ready to turn your vision into reality? Let's start your UAE success story today.
                </p>
                <Link to="/contact" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center">
                  Start Your Journey
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From business setup to Golden Visa, we handle every aspect of your UAE journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '🇦🇪 MOHRE Services',
                description: 'Complete workforce management and labor compliance solutions',
                features: ['Quota Management', 'Labour Cards', 'Work Permits', 'Contract Processing']
              },
              {
                title: '🛂 Immigration Services',
                description: 'Full immigration support from arrival to settlement',
                features: ['Visa Processing', 'Golden Visa', 'Family Visas', 'PRO Services']
              },
              {
                title: '🏢 Business Licensing',
                description: 'Complete business setup and licensing solutions',
                features: ['Trade License', 'Amendments', 'Renewals', 'External Approvals']
              },
              {
                title: '🟡 Golden Visa',
                description: '10-year UAE residency for investors and professionals',
                features: ['Property Investment', 'Professional Category', 'Family Inclusion', 'Fast Processing']
              },
              {
                title: '📋 Attestation Services',
                description: 'Document attestation and translation services',
                features: ['MOFA Attestation', 'Embassy Services', 'Certified Translation', 'Legal Documents']
              },
              {
                title: '🛡️ Insurance Services',
                description: 'Comprehensive insurance solutions for compliance',
                features: ['Health Insurance', 'Labour Insurance', 'Vehicle Insurance', 'ILOE Coverage']
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 card-shadow hover:bg-white transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={14} />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
