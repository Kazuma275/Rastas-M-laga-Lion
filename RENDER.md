# 🚀 Deployment Guide for Render.com

## Configuration for Render

### Build Settings:

- **Build Command**: `npm run build:render`
- **Publish Directory**: `dist`
- **Node Version**: 18 or higher

### Environment Variables:

- `NODE_ENV`: `production`

### Auto-Deploy:

- ✅ Branch: `main`
- ✅ Build on every push

### Manual Deploy Steps:

1. Connect your GitHub repo to Render
2. Select **Static Site**
3. Set build command: `npm run build:render`
4. Set publish directory: `dist`
5. Deploy!

The site will be available at: `https://your-app-name.onrender.com`

### Key differences from GitHub Pages:

- No basename needed for Render
- Different routing configuration
- Optimized build process

### Troubleshooting:

If build fails, try:

1. Check Node.js version (should be 18+)
2. Clear cache and rebuild
3. Check build logs for specific errors
