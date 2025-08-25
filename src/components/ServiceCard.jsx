import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';

const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const renderServiceList = (services) => (
    <ul className="space-y-2">
      {services.map((item, index) => (
        <li key={index} className="flex items-start space-x-2">
          <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
          <span className="text-gray-700 text-sm">{item}</span>
        </li>
      ))}
    </ul>
  );

  const renderCategory = (category, index) => (
    <div key={index} className="mb-6 last:mb-0">
      <h4 className="text-lg font-semibold text-gray-900 mb-3">
        {category.title}
      </h4>
      {category.subtitle && (
        <p className="text-sm text-gray-600 mb-3 italic">
          {category.subtitle}
        </p>
      )}
      {category.description && (
        <p className="text-gray-600 mb-3">
          {category.description}
        </p>
      )}
      {category.services && renderServiceList(category.services)}
      {category.eligibleCategories && (
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-800 mb-2">Eligible Categories:</p>
          <ul className="space-y-1">
            {category.eligibleCategories.map((cat, catIndex) => (
              <li key={catIndex} className="text-sm text-gray-700 ml-4">
                • {cat}
              </li>
            ))}
          </ul>
        </div>
      )}
      {category.dependentServices && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm font-medium text-blue-800 mb-2">For Dependents:</p>
          {renderServiceList(category.dependentServices)}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white rounded-lg card-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {service.title}
            </h3>
            {service.subtitle && (
              <p className="text-sm text-primary font-medium mb-3">
                {service.subtitle}
              </p>
            )}
            <p className="text-gray-600">
              {service.description}
            </p>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-4 p-2 text-gray-500 hover:text-primary transition-colors"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {isExpanded && (
          <div className="border-t border-gray-200 pt-6">
            {/* Handle different service structures */}
            {service.categories && service.categories.map((category, index) => 
              renderCategory(category, index)
            )}
            
            {service.services && !service.categories && (
              <div className="mb-6">
                {renderServiceList(service.services)}
              </div>
            )}

            {service.authorities && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  Health Authorities:
                </h4>
                {renderServiceList(service.authorities)}
              </div>
            )}

            {service.attestationServices && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.attestationServices.title}
                </h4>
                <p className="text-gray-600 mb-3">
                  {service.attestationServices.description}
                </p>
                {renderServiceList(service.attestationServices.services)}
                {service.attestationServices.note && (
                  <p className="text-sm text-gray-600 mt-3 italic">
                    {service.attestationServices.note}
                  </p>
                )}
              </div>
            )}

            {service.translationServices && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.translationServices.title}
                </h4>
                <p className="text-gray-600 mb-3">
                  {service.translationServices.description}
                </p>
                {renderServiceList(service.translationServices.services)}
                {service.translationServices.note && (
                  <p className="text-sm text-gray-600 mt-3 italic">
                    {service.translationServices.note}
                  </p>
                )}
              </div>
            )}

            {service.types && (
              <div className="space-y-6">
                {service.types.map((type, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3 mb-3">
                      <span className="text-2xl">{type.icon}</span>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {type.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {type.description}
                        </p>
                      </div>
                    </div>
                    {type.features && renderServiceList(type.features)}
                    {type.tagline && (
                      <p className="text-primary font-medium text-sm mt-3">
                        {type.tagline}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {service.platforms && (
              <div className="space-y-6">
                {service.platforms.map((platform, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {platform.title}
                    </h4>
                    
                    {platform.requirements && (
                      <div className="mb-4">
                        <p className="font-medium text-gray-800 mb-2">Requirements:</p>
                        {renderServiceList(platform.requirements)}
                      </div>
                    )}
                    
                    {platform.process && (
                      <div className="mb-4">
                        <p className="font-medium text-gray-800 mb-2">Process:</p>
                        {renderServiceList(platform.process)}
                      </div>
                    )}
                    
                    {platform.bestFor && (
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Best For:</span> {platform.bestFor}
                      </p>
                    )}
                    
                    {platform.note && (
                      <p className="text-sm text-gray-600 italic mt-2">
                        <span className="font-medium">Note:</span> {platform.note}
                      </p>
                    )}
                    
                    {platform.idealFor && (
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Ideal For:</span> {platform.idealFor}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {service.quickChecklist && (
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h4 className="text-lg font-semibold text-green-800 mb-3">
                  📌 Quick Checklist to Get Started:
                </h4>
                {renderServiceList(service.quickChecklist)}
              </div>
            )}

            {service.supportServices && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">
                  Need Help? We provide full support for:
                </h4>
                {renderServiceList(service.supportServices)}
              </div>
            )}

            {service.additionalServices && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  💼 Additional Support Services:
                </h4>
                {renderServiceList(service.additionalServices)}
              </div>
            )}

            {service.note && (
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800 italic">
                  {service.note}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
