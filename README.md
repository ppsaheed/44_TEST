# 44 Digital Business Services - Website

_Last deployment triggered at: 2025-08-16 01:16 AM_

A modern, responsive website for 44 Digital Business Services, a UAE-based company specializing in government transactions and business services.

## 🌟 Features

- **Modern Design**: Clean, professional UAE-inspired design with gold accents
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite + React for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessible**: ARIA labels and keyboard navigation support
- **Interactive**: Smooth animations and hover effects

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 44-digital-business-services
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run deploy` - Deploy to GitHub Pages

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   └── ServiceCard.jsx # Service display component
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── Services.jsx    # Services listing page
│   └── Contact.jsx     # Contact page
├── data/               # Data and content
│   └── services.js     # Company and services data
├── App.jsx             # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎨 Design System

### Colors
- **Primary Blue**: `#1e40af` - Main brand color
- **UAE Gold**: `#D4AF37` - Accent color for Golden Visa services
- **Secondary Gray**: `#64748b` - Supporting text color

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body Text**: Regular weight (400)

### Components
- **Buttons**: Primary and secondary variants with hover states
- **Cards**: Shadow effects with hover animations
- **Forms**: Clean inputs with focus states

## 📱 Pages Overview

### Home Page
- Hero section with company motto
- "From Visitor to Visionary" success story
- Feature highlights
- Services preview
- Call-to-action sections

### Services Page
- Comprehensive service listings
- Search and filter functionality
- Expandable service cards with detailed information
- All UAE government services covered

### Contact Page
- Contact form with validation
- Company information cards
- Social media links
- Map integration placeholder
- WhatsApp and phone quick actions

## 🌐 Services Covered

- **MOHRE Services (Tasheel)** - Labor and employment services
- **Immigration Services** - Visa and residency services
- **Business Licensing** - DET and trade license services
- **Golden Visa** - 10-year residency programs
- **External Approvals** - Specialized licensing approvals
- **Attestation & Translation** - Document services
- **Insurance Services** - Compliance and protection
- **E-commerce Setup** - Online business solutions

## 🚀 Deployment

### GitHub Pages (Recommended)

1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. The GitHub Action will automatically deploy on push to main branch

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder contents to your web server

### Environment Configuration

For different deployment environments, update the `base` path in `vite.config.js`:

```javascript
// For GitHub Pages
base: '/repository-name/'

// For custom domain
base: '/'
```

## 🔧 Customization

### Adding New Services
1. Edit `src/data/services.js`
2. Add new service object to `servicesData`
3. Update service categories in `Services.jsx` if needed

### Styling Changes
- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Use Tailwind classes

### Content Updates
- Company information: `src/data/services.js` - `companyInfo` object
- Success story: `src/data/services.js` - `storyContent` object

## 📞 Contact Information

**44 Digital Business Services **
- **Address**: Office G21, The Market Mall, DIP 1, Dubai
- **Mobile**: +971 56 164 4144
- **Landline**: +971 4 335 0776
- **Email**: ask@44digital.ae
- **Website**: www.44digital.ae

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software belonging to 44 Digital Business Services.

## 🆘 Support

For technical support or questions about the website:
- Email: ask@44digital.ae
- Phone: +971 56 164 4144

---

**Built with ❤️ in UAE** | © 2025 44 Digital Business Services

_Note: This line was added to trigger a new deployment to GitHub Pages._
