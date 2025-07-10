# 🎨 Portfolio - Anish Seth

A modern, elegant, and fully responsive portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, featuring a beautiful classic dark theme with sophisticated animations and interactive elements.

## ✨ Features

### 🎭 **Beautiful Classic Theme**
- **Sophisticated Dark Design**: Rich dark color palette with warm accent colors
- **Classic Typography**: Elegant font combinations (Playfair Display, Inter, JetBrains Mono)
- **Smooth Animations**: Powered by Framer Motion for buttery-smooth interactions
- **Glass Morphism Effects**: Modern UI elements with backdrop blur and transparency
- **Responsive Design**: Fully optimized for all devices and screen sizes

### 🚀 **Modern Technology Stack**
- **Next.js 15**: Latest version with App Router and improved performance
- **TypeScript**: Full type safety and enhanced developer experience
- **Tailwind CSS**: Custom design system with beautiful color schemes
- **Framer Motion**: Advanced animations and micro-interactions
- **React 18**: Latest React features and optimizations

### 🎯 **Interactive Sections**
1. **Hero Section**: Animated introduction with terminal-style code display
2. **About Section**: Personal story with statistics and interactive image
3. **Skills Section**: Dynamic marquee with categorized technology showcase
4. **Projects Section**: Sophisticated project cards with hover effects
5. **Experience Section**: Professional timeline and achievements
6. **Education Section**: Academic background presentation
7. **Contact Section**: Functional contact form with validation

### 🔧 **Technical Highlights**
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Friendly**: Complete meta tags and structured data
- **Accessibility**: WCAG compliant with proper focus management
- **Type Safe**: Full TypeScript implementation with proper interfaces
- **Code Quality**: ESLint configuration and best practices

## 🛠️ **Technologies Used**

### **Frontend**
- Next.js 15.1.0
- React 18.3.1
- TypeScript 5.7.2
- Tailwind CSS 3.4.17
- Framer Motion 11.11.17

### **Styling & UI**
- Custom design system with CSS variables
- Glass morphism effects
- Responsive grid layouts
- Custom animations and transitions
- Dark theme with warm accents

### **Development Tools**
- ESLint for code quality
- Sass for advanced styling
- PostCSS for CSS processing
- Sharp for image optimization

### **Integrations**
- EmailJS for contact form
- Google Analytics support
- Social media links
- Resume download functionality

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js 18+ 
- npm or yarn or pnpm

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anish-2005/Portfolio--Anish-Seth.git
   cd Portfolio--Anish-Seth
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example env file
   cp .env.example .env
   
   # Add your environment variables
   NEXT_PUBLIC_GTM=your_google_tag_manager_id
   NEXT_PUBLIC_APP_URL=your_app_url
   EMAIL_ADDRESS=your_email
   # ... other variables
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📁 **Project Structure**

```
├── app/
│   ├── components/
│   │   ├── homepage/
│   │   │   ├── about/           # About section component
│   │   │   ├── hero-section/    # Hero/landing section
│   │   │   ├── skills/          # Skills showcase
│   │   │   ├── projects/        # Projects portfolio
│   │   │   ├── experience/      # Work experience
│   │   │   ├── education/       # Educational background
│   │   │   └── contact/         # Contact form
│   │   ├── navbar.tsx          # Navigation component
│   │   └── footer.tsx          # Footer component
│   ├── css/
│   │   ├── globals.scss        # Global styles and theme
│   │   └── card.scss          # Card component styles
│   ├── layout.tsx             # Root layout with theme
│   └── page.tsx               # Home page
├── utils/
│   └── data/                  # Data files (TypeScript)
│       ├── personal-data.ts   # Personal information
│       ├── projects-data.ts   # Projects showcase
│       ├── skills.ts          # Skills and technologies
│       ├── experience.ts      # Work experience
│       └── educations.ts      # Educational background
├── public/                    # Static assets
└── types/                     # TypeScript type definitions
```

## 🎨 **Customization**

### **Theme Colors**
The portfolio uses a sophisticated color palette defined in `tailwind.config.js`:

- **Primary**: Warm copper tones (`#d4845c`)
- **Accent**: Vibrant orange (`#f97316`) 
- **Secondary**: Cool grays for text
- **Dark**: Rich dark backgrounds

### **Personal Data**
Update your information in `utils/data/personal-data.ts`:

```typescript
export const personalData = {
  name: "Your Name",
  designation: "Your Title", 
  description: "Your bio...",
  email: "your@email.com",
  // ... other fields
};
```

### **Projects**
Add your projects in `utils/data/projects-data.ts`:

```typescript
export const projectsData = [
  {
    id: 1,
    name: "Project Name",
    description: "Project description...",
    tools: ["React", "Next.js", "TypeScript"],
    role: "Full Stack Developer",
    code: "https://github.com/...",
    demo: "https://demo-url.com",
    image: projectImage,
  },
  // ... more projects
];
```

## 📱 **Responsive Design**

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+
- **4K**: 1980px+ (optimized layouts)

## 🌟 **Key Features**

### **Animations & Interactions**
- Smooth page transitions
- Hover effects on all interactive elements
- Parallax scrolling effects
- Loading animations
- Micro-interactions for better UX

### **Performance**
- Optimized images with Next.js Image component
- Lazy loading for better performance
- Minimized bundle size
- Fast loading times

### **SEO & Accessibility**
- Complete meta tags
- Structured data
- Alt tags for images
- Keyboard navigation support
- Screen reader friendly

## 🔗 **Live Demo**

Visit the live portfolio: [https://portfolio-anish-seth-1.vercel.app/](https://portfolio-anish-seth-1.vercel.app/)

## 👨‍💻 **About the Developer**

**Anish Seth** - Web Developer & UI/UX Designer
- 🎓 BTech Computer Science Student at Techno Main Salt Lake
- 💼 Technical Team Member at Samarth Educational Club
- 🌟 Passionate about creating elegant web solutions
- 🚀 Currently transitioning to Full Stack Development

### **Connect with me:**
- **GitHub**: [Anish-2005](https://github.com/Anish-2005)
- **LinkedIn**: [anish-seth-202200290](https://www.linkedin.com/in/anish-seth-202200290/)
- **Twitter**: [@AnishSeth170734](https://x.com/AnishSeth170734)
- **Email**: anishseth0510@gmail.com

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 🤝 **Contributing**

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Anish-2005/Portfolio--Anish-Seth/issues).

## ⭐ **Show your support**

Give a ⭐️ if you like this project and find it helpful!

---

**Built with ❤️ by Anish Seth**