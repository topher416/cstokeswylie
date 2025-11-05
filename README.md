# Cassandra Stokes-Wylie - Portfolio Website

A modern, responsive portfolio website for theatre professional and arts administrator Cassandra Stokes-Wylie.

## 🎭 About

This website showcases Cassandra's extensive experience in theatre administration, literary management, community engagement, and fundraising. Built with React and Tailwind CSS, it provides a clean, professional platform to highlight her career achievements and expertise.

## 🚀 Tech Stack

- **React 19** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **GitHub Pages** - Static site hosting

## 🎨 Features

- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Scrolling** - Intuitive navigation between sections
- **Interactive Timeline** - Expandable experience cards
- **Performance Section** - Complete acting credits with AEA status
- **Critical Acclaim** - Reviews from regional publications and award recognition
- **Portfolio Projects** - Award-winning productions including Edgerton Foundation winners
- **SEO Optimized** - Meta tags highlighting awards and achievements
- **Accessible** - WCAG compliant with keyboard navigation

## 📂 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx       # Sticky navigation with smooth scroll
│   ├── Hero.jsx             # Landing section with CTA
│   ├── About.jsx            # Biography and education
│   ├── Experience.jsx       # Professional timeline (administrative)
│   ├── Performance.jsx      # Acting credits and performance history
│   ├── Portfolio.jsx        # Featured projects and productions
│   ├── CriticalAcclaim.jsx  # Reviews, quotes, and awards
│   ├── Skills.jsx           # Areas of expertise
│   ├── Contact.jsx          # Contact information and availability
│   └── Footer.jsx           # Site footer with links
├── assets/
│   └── images/          # Image assets
├── index.css            # Global styles and Tailwind
└── App.jsx              # Main application component
```

## 🛠️ Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment

The site is configured to deploy to GitHub Pages with a custom domain (cassandrastokeswylie.com).

```bash
# Build and prepare for deployment
npm run deploy
```

Then push the `dist` folder to the `gh-pages` branch or deploy via GitHub Actions.

## 🎨 Color Palette

- **Primary** - Deep slate blue (#2C3E50)
- **Accent** - Warm sienna (#A0522D)
- **Background** - Off-white (#FAF9F6)
- **Text** - Dark blue-gray (#2C3E50)

## 📝 Content Updates

To update content:

1. **Personal Information** - Edit `src/components/Hero.jsx` and `src/components/About.jsx`
2. **Experience** - Modify the `experiences` array in `src/components/Experience.jsx`
3. **Portfolio Items** - Update `portfolioItems` in `src/components/Portfolio.jsx`
4. **Contact Details** - Edit `src/components/Contact.jsx` and `src/components/Footer.jsx`

## 🖼️ Adding Images

Replace placeholder images by:

1. Adding images to `src/assets/images/`
2. Importing in the relevant component
3. Replacing the placeholder div with an `<img>` tag

Example:
```jsx
import headshot from '../assets/images/headshot.jpg';
// Replace placeholder with:
<img src={headshot} alt="Cassandra Stokes-Wylie" />
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

This is a personal portfolio site. For suggestions or improvements, please contact Cassandra directly.

## 📄 License

© 2024 Cassandra Stokes-Wylie. All rights reserved.

## 📧 Contact

- **Email**: cstokeswylie@gmail.com
- **Phone**: 801.750.2670
- **LinkedIn**: [linkedin.com/in/cassandra-stokes-wylie](https://www.linkedin.com/in/cassandra-stokes-wylie)
- **Website**: [cassandrastokeswylie.com](https://cassandrastokeswylie.com)
