# CloutCraft Website 🚀

A modern, interactive website for CloutCraft - the first AI platform for crypto influence on X (Twitter). Built with Next.js 15, TypeScript, Tailwind CSS, and featuring stunning Spline 3D animations.

## ✨ Features

- **🎨 Modern Design**: Beautiful gradient-based UI with playful colors
- **🌟 Interactive 3D Background**: Spline animation on homepage
- **📱 Responsive Design**: Mobile-first approach with perfect mobile UX
- **⚡ Performance Optimized**: Fast loading with Next.js 15 App Router
- **🎭 Smooth Animations**: Hover effects and transitions throughout
- **🧩 Modular Architecture**: Highly factorized component structure
- **♿ Accessible**: WCAG compliant with semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3.4.17
- **Fonts**: Quicksand (Google Fonts)
- **3D Graphics**: Spline (@splinetool/react-spline)
- **Deployment**: Vercel (recommended)

## 🎨 Design System

### Color Palette
- **Primary**: `#FFFFFF` (White)
- **Accent**: `#FFCC00` (Yellow)
- **Blue**: `#66CCFF`, `#33CCCC`, `#3366CC`
- **Pink**: `#FF99CC`
- **Purple**: `#CCCCFF`
- **Grays**: `#333333`, `#DDDDDD`
- **Reds**: `#FF3333`, `#FF9933`

### Typography
- **Font Family**: Quicksand (weights: 300-700)
- **Responsive Sizing**: Mobile-first approach

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── GradientBackground.tsx
│   │   ├── GradientText.tsx
│   │   ├── AnimatedButton.tsx
│   │   └── PageLayout.tsx
│   ├── home/                  # Homepage components
│   │   └── HeroSection.tsx
│   ├── about/                 # About page components
│   │   ├── FeatureCard.tsx
│   │   └── CloutTokenSection.tsx
│   ├── demo/                  # Demo page components
│   │   ├── PhoneMockup.tsx
│   │   ├── AppIcon.tsx
│   │   └── ChatInterface.tsx
│   ├── early-access/          # Early access components
│   │   ├── EarlyAccessForm.tsx
│   │   └── SuccessMessage.tsx
│   ├── Header.tsx             # Global header
│   └── Footer.tsx             # Global footer
└── app/                       # Next.js App Router
    ├── page.tsx              # Homepage
    ├── about/page.tsx        # About page
    ├── demo/page.tsx         # Demo page
    ├── early-access/page.tsx # Early access page
    ├── layout.tsx            # Root layout
    └── globals.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd cloutcraft-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 🌐 Pages

- **Homepage** (`/`) - Hero section with Spline animation
- **About** (`/about`) - Platform information and features
- **Demo** (`/demo`) - Interactive phone mockup with AI chat
- **Early Access** (`/early-access`) - Beta signup form

## 📦 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Connect your GitHub repository on [Vercel](https://vercel.com)
   - Auto-deployment on every push to main branch
   - Environment: `Node.js 18.x`

### Manual Build

```bash
npm run build
npm start
```

### Environment Variables

No environment variables required for basic functionality.

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for mobile and desktop
- **Bundle Size**: Optimized with Next.js automatic code splitting

## 🧩 Component Architecture

### Reusable Components
- **GradientText**: Text with gradient styling variants
- **AnimatedButton**: Buttons with hover animations and rotations
- **GradientBackground**: Page-specific animated backgrounds
- **PageLayout**: Universal layout with Header/Footer

### Design Patterns
- **Composition over Inheritance**
- **Single Responsibility Principle**
- **Consistent Props Interface**
- **TypeScript for Type Safety**

## 🔧 Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

## 🎨 Customization

### Adding New Pages
1. Create page in `src/app/new-page/page.tsx`
2. Use `PageLayout` wrapper
3. Add navigation link in `Header.tsx`

### Adding New Components
1. Create in appropriate subfolder under `src/components/`
2. Follow naming convention: `PascalCase.tsx`
3. Include TypeScript interfaces
4. Use Tailwind classes for styling

### Modifying Colors
Update Tailwind config or use CSS custom properties in `globals.css`

## 🐛 Known Issues

- None currently reported

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is private and proprietary to CloutCraft.

## 📞 Support

For questions or support, please contact the development team.

---

**Built with ❤️ for the CloutCraft community**
