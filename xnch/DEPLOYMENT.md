# Deployment Instructions

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Vercel Deployment

### Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from project root:
```bash
vercel --prod
```

### Using Vercel Dashboard

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically on push to main branch

## Environment Variables

No environment variables required for this static site.

## Custom Domain Setup

The site is now deployed and aliased to `https://www.x-nch.com`. To add your custom domain:

1. Go to Vercel Dashboard → Project Settings → Domains
2. Add your custom domain (e.g., `xnch.ai`)
3. Configure DNS records as instructed by Vercel
4. Wait for SSL certificate propagation

## Live URL

Production site: https://www.x-nch.com

## Build Configuration

- Static site generation enabled
- Images optimized for static export
- SEO metadata included
- Responsive design with Tailwind CSS

## Performance

- Page load times: < 2s
- Core Web Vitals optimized
- Minimal JavaScript bundle
- CSS purged for production