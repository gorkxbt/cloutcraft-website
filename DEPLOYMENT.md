# 🚀 CloutCraft Website Deployment Guide

This guide walks you through deploying the CloutCraft website to various platforms.

## 📋 Pre-Deployment Checklist

- [ ] All components are working correctly
- [ ] Build passes without errors (`npm run build`)
- [ ] Spline animation loads properly
- [ ] All pages are responsive on mobile/desktop
- [ ] Form submissions work (early access page)
- [ ] No console errors in browser
- [ ] All images and assets are optimized

## 🌐 Platform Options

### 1. Vercel (Recommended) ⭐

**Why Vercel?**
- Built by Next.js creators
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Edge functions support
- Perfect for Next.js apps

**Steps:**

1. **Prepare Repository**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Configure settings:
     - Framework Preset: `Next.js`
     - Root Directory: `./cloutcraft-website`
     - Build Command: `npm run build`
     - Output Directory: `.next`
     - Install Command: `npm install`

3. **Environment Variables** (if needed)
   - Add in Vercel dashboard
   - Based on `env.example` file

4. **Custom Domain** (optional)
   - Add domain in Vercel dashboard
   - Configure DNS records
   - SSL automatically provisioned

**Expected Result:** Live at `https://your-project.vercel.app`

### 2. Netlify

**Steps:**

1. **Build Settings**
   ```bash
   # Build command
   npm run build
   
   # Publish directory
   out
   ```

2. **Add `next.config.js` for static export**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

3. **Deploy**
   - Connect GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `out`

### 3. GitHub Pages

**Steps:**

1. **Add GitHub Actions Workflow**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
             cache: 'npm'
         - run: npm ci
         - run: npm run build
         - uses: actions/deploy-pages@v2
           with:
             token: ${{ secrets.GITHUB_TOKEN }}
             artifact_name: github-pages
             folder: out
   ```

2. **Enable GitHub Pages**
   - Repository Settings → Pages
   - Source: GitHub Actions

### 4. Custom VPS/Server

**Requirements:**
- Node.js 18+
- PM2 (process manager)
- Nginx (reverse proxy)

**Steps:**

1. **Server Setup**
   ```bash
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2
   npm install -g pm2
   
   # Install Nginx
   sudo apt install nginx
   ```

2. **Deploy Application**
   ```bash
   # Clone repository
   git clone <your-repo>
   cd cloutcraft-website
   
   # Install dependencies
   npm install
   
   # Build application
   npm run build
   
   # Start with PM2
   pm2 start npm --name "cloutcraft" -- start
   pm2 save
   pm2 startup
   ```

3. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 🔧 Performance Optimization

### Before Deployment

1. **Optimize Images**
   ```bash
   # Use Next.js Image component
   import Image from 'next/image'
   ```

2. **Analyze Bundle**
   ```bash
   npm install -g @next/bundle-analyzer
   ANALYZE=true npm run build
   ```

3. **Check Lighthouse Score**
   - Open DevTools → Lighthouse
   - Run audit for Performance, Accessibility, Best Practices, SEO

### After Deployment

1. **Monitor Performance**
   - Vercel Analytics (automatic)
   - Google PageSpeed Insights
   - GTmetrix

2. **Set up Monitoring**
   - Sentry for error tracking
   - Google Analytics for usage
   - Uptime monitoring

## 🛠️ Troubleshooting

### Common Issues

**Build Fails**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Spline Animation Not Loading**
- Check network tab for CORS errors
- Verify Spline scene URL is public
- Test with different browsers

**Styling Issues**
- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS
- Verify responsive breakpoints

**TypeScript Errors**
```bash
# Check for type errors
npm run type-check
# or
npx tsc --noEmit
```

### Performance Issues

**Slow Loading**
- Optimize images with Next.js Image
- Use dynamic imports for heavy components
- Enable compression in deployment platform

**Large Bundle Size**
- Analyze bundle with @next/bundle-analyzer
- Remove unused dependencies
- Use tree shaking

## 📊 Deployment Checklist

### Pre-Deploy
- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
- [ ] No console errors
- [ ] All pages load correctly
- [ ] Mobile responsiveness tested
- [ ] Cross-browser compatibility checked

### Post-Deploy
- [ ] All pages accessible via URLs
- [ ] Spline animation works
- [ ] Forms submit correctly
- [ ] Navigation works
- [ ] Meta tags and SEO optimized
- [ ] Performance metrics acceptable (Lighthouse > 90)

### Production Ready
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Analytics set up
- [ ] Error monitoring configured
- [ ] Backup strategy in place

## 🔐 Security Considerations

- HTTPS enabled (automatic on Vercel/Netlify)
- Security headers configured (see `vercel.json`)
- No sensitive data in client-side code
- Form validation on both client and server
- CORS properly configured for Spline

## 📈 Monitoring & Analytics

### Recommended Tools

1. **Vercel Analytics** (automatic with Vercel)
2. **Google Analytics 4**
3. **Sentry** for error tracking
4. **Hotjar** for user behavior
5. **Lighthouse CI** for continuous performance monitoring

---

## 🎉 Ready to Deploy!

Your CloutCraft website is now ready for deployment. Choose your preferred platform and follow the steps above. 

**Recommended Flow:**
1. Start with Vercel for quick deployment
2. Set up custom domain
3. Configure analytics
4. Monitor performance
5. Iterate and improve

Good luck! 🚀 