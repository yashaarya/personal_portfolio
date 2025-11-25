# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This site showcases my projects, skills, and professional background with a beautiful, animated design.

## 🚀 Features

### Core Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, colorful design with gradient accents and smooth animations
- **Single Page Application**: Smooth scrolling navigation between sections
- **Project Showcase**: Filterable project gallery with live demos and GitHub links
- **Skills Display**: Categorized skills with visual proficiency indicators
- **Contact Form**: Interactive contact form with validation
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance**: Optimized images, lazy loading, and fast loading times

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **React Hook Form**: Form handling with validation
- **Intersection Observer**: Scroll-triggered animations
- **Lucide React**: Beautiful, consistent icon set
- **Next.js 14**: Latest features including App Router

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### Dependencies
- **lucide-react** - Icon library
- **react-hook-form** - Form management
- **@hookform/resolvers** - Form validation integration
- **yup** - Schema validation

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
personal_portfolio/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page (single page portfolio)
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable React components
│   │   ├── Hero.tsx           # Hero section
│   │   ├── About.tsx          # Introduction section
│   │   ├── Projects.tsx       # Projects showcase
│   │   ├── Skills.tsx         # Skills section
│   │   ├── Contact.tsx        # Contact section
│   │   ├── Navigation.tsx     # Smooth scroll navigation
│   │   └── Footer.tsx         # Footer section
│   ├── data/                  # Content data
│   │   ├── projects.ts        # Projects data
│   │   ├── skills.ts          # Skills data
│   │   └── personal.ts        # Personal info
│   ├── types/                 # TypeScript type definitions
│   │   └── index.ts           # Project, Skill types
│   └── utils/                 # Utility functions
│       └── helpers.ts         # Helper functions
├── public/                    # Static assets
│   ├── images/               # Project images, profile photo
│   └── icons/                # Social media icons
├── package.json              # Dependencies
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 📝 Customization

### Personal Information
Edit `src/data/personal.ts` to update:
- Your name and title
- Professional tagline
- About section content
- Contact information
- Social media links

### Projects
Edit `src/data/projects.ts` to:
- Add your projects
- Update project descriptions
- Set technologies used
- Add live demo and GitHub links
- Mark featured projects

### Skills
Edit `src/data/skills.ts` to:
- Update your technical skills
- Adjust skill levels
- Modify skill categories

### Styling
- **Colors**: Modify `tailwind.config.js` to update the color scheme
- **Fonts**: Change fonts in `src/app/globals.css`
- **Animations**: Update animations in `src/app/globals.css`

### Images
Add your images to the `public/images/` directory:
- `profile.jpg` - Your professional headshot
- `project1.jpg`, `project2.jpg`, etc. - Project screenshots

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Configure build settings: Build command `npm run build`, Publish directory `out`

### Other Platforms
The built project can be deployed to any static hosting service like GitHub Pages, AWS S3, or CloudFront.

## 📱 Sections

### Hero Section
- Professional introduction with name and title
- Call-to-action buttons
- Profile image
- Social media links

### About Section
- Detailed professional background
- Personal information and interests
- Key strengths and features

### Projects Section
- Filterable project gallery
- Project cards with images and descriptions
- Technology tags
- Live demo and GitHub links
- Featured project highlighting

### Skills Section
- Categorized skill display
- Visual proficiency indicators
- Frontend, Backend, and Tools categories

### Contact Section
- Interactive contact form
- Direct contact information
- Social media links
- Form validation and submission

## 🎨 Design Features

### Responsive Design
- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Optimized navigation for all devices

### Animations
- Scroll-triggered animations using Intersection Observer
- Hover effects on interactive elements
- Smooth transitions between states
- Loading animations

### Color Scheme
- Primary: Purple to Pink gradient
- Secondary: Blue accents
- Neutral: White and light gray backgrounds
- Accent: Emerald for success states

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Form handling by [React Hook Form](https://react-hook-form.com/)

---

**Created with ❤️ by [Your Name]**

If you have any questions or want to collaborate, feel free to reach out!

---

## 📧 Contact

- **Email**: your.email@example.com
- **GitHub**: https://github.com/yourusername
- **LinkedIn**: https://linkedin.com/in/yourprofile