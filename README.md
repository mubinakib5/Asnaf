# Asnaf Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components. This portfolio showcases academic achievements, projects, skills, and professional experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light theme support
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Complete SEO setup with metadata, sitemap, robots.txt, and JSON-LD structured data
- **Performance**: Built with Next.js 14 and optimized for speed
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Type Safe**: Full TypeScript support for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter & DM Sans (Google Fonts)
- **Theme**: next-themes for dark/light mode

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── about/             # About page
│   ├── awards/            # Awards & achievements
│   ├── contact/           # Contact page
│   ├── courses/           # Academic courses
│   ├── cv/                # CV/Resume page
│   ├── projects/          # Projects listing
│   │   └── [slug]/        # Dynamic project pages
│   ├── research/          # Research page
│   ├── skills/            # Skills & expertise
│   ├── training/          # Training & certifications
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Dynamic sitemap
│   ├── robots.ts          # Robots.txt
│   └── manifest.ts        # PWA manifest
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Navigation header
│   ├── footer.tsx        # Footer component
│   ├── theme-provider.tsx # Theme context
│   ├── theme-toggle.tsx  # Theme switcher
│   └── structured-data.tsx # JSON-LD schema
├── data/                 # Data files
│   ├── index.ts          # Main data exports
│   ├── personal.ts       # Personal information
│   ├── projects.ts       # Projects data
│   ├── skills.ts         # Skills data
│   ├── awards.ts         # Awards data
│   ├── training.ts       # Training data
│   ├── courses.ts        # Courses data
│   ├── research.ts       # Research data
│   └── navigation.ts     # Navigation config
└── lib/                  # Utility functions
    └── utils.ts          # Helper utilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/asnaf-portfolio.git
   cd asnaf-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

Update your personal information in `src/data/personal.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other fields
}
```

### Projects

Add your projects in `src/data/projects.ts`. Each project should include:

- Basic information (title, description, year)
- Technologies used
- Links (GitHub, demo, etc.)
- Detailed sections (objectives, features, methodology, results)

### Skills

Update your skills in `src/data/skills.ts` with categories and proficiency levels.

### Other Data

Update the following files with your information:
- `src/data/awards.ts` - Awards and achievements
- `src/data/training.ts` - Training and certifications
- `src/data/courses.ts` - Academic courses
- `src/data/research.ts` - Research work

### Styling

The project uses Tailwind CSS for styling. You can:
- Modify `src/app/globals.css` for global styles
- Update the Tailwind config in `tailwind.config.js`
- Customize shadcn/ui components in `src/components/ui/`

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure the project settings:
     - Framework Preset: Next.js
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Deploy!

3. **Update URLs**
   After deployment, update the following files with your actual domain:
   - `src/data/personal.ts` (siteConfig.url)
   - `src/app/sitemap.ts` (baseUrl)
   - `src/app/robots.ts` (sitemap URL)

### Other Platforms

The project can also be deployed to:
- **Netlify**: Use the Next.js build settings
- **Railway**: Connect your GitHub repo
- **DigitalOcean App Platform**: Use Node.js buildpack

## 📊 SEO Features

- **Metadata**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific metadata
- **Sitemap**: Dynamic sitemap generation
- **Robots.txt**: Search engine crawler instructions
- **JSON-LD**: Structured data for rich snippets
- **Manifest**: PWA support

## 🎨 Theme Support

The portfolio includes:
- Light and dark theme support
- System preference detection
- Smooth theme transitions
- Persistent theme selection

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Optimized for all screen sizes
- Touch-friendly navigation

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/asnaf-portfolio/issues).

## 📞 Support

If you have any questions or need help with setup, feel free to reach out:

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

**Built with ❤️ using Next.js and modern web technologies**
