# Deployment Fix for Next.js Detection Error

## Problem
The deployment platform was trying to detect Next.js but this is a **React + Vite** project, causing the error:
```
Error: No Next.js version detected. Make sure your package.json has "next" in either "dependencies" or "devDependencies".
```

## Solution Applied

### 1. Updated `vercel.json`
The `vercel.json` file has been updated to explicitly configure the build process:

```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "framework": null,
  "installCommand": "pnpm install",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Key changes:**
- `"framework": null` - Disables auto-detection, preventing Next.js detection
- `"buildCommand": "pnpm build"` - Explicitly uses Vite build
- `"outputDirectory": "dist"` - Specifies Vite's output directory
- `"installCommand": "pnpm install"` - Uses pnpm for dependencies

### 2. For Other Deployment Platforms

**Netlify:**
Create a `netlify.toml` file:
```toml
[build]
  command = "pnpm build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Generic Platforms:**
- **Build Command:** `pnpm build`
- **Output Directory:** `dist`
- **Install Command:** `pnpm install`
- **Framework:** Static Site / SPA (not Next.js)

## Deployment Checklist

- [x] ✅ `vercel.json` configured with explicit framework settings
- [x] ✅ Build command set to `pnpm build`
- [x] ✅ Output directory set to `dist`
- [x] ✅ SPA routing configured (rewrites to index.html)

## Next Steps

1. **Commit the changes:**
   ```bash
   git add vercel.json
   git commit -m "Fix: Configure Vite build for deployment (not Next.js)"
   git push
   ```

2. **Redeploy:**
   - If using Vercel: The platform will automatically redeploy with the new settings
   - If using other platforms: Trigger a new deployment

3. **Verify:**
   - Check that the build uses Vite (not Next.js)
   - Verify routing works correctly for all pages
   - Test all 65+ dynamic routes

## Important Notes

⚠️ **This is a Figma Make Project:**
- If you're seeing this error in Figma Make's preview, it's an internal platform issue
- The fixes above are for external deployment (Vercel, Netlify, etc.)
- Figma Make has its own build system and doesn't need these configs

⚠️ **Do NOT add Next.js as a dependency:**
- This will cause conflicts with React Router and Vite
- The solution is to disable framework detection, not to add Next.js

## Troubleshooting

**Still seeing Next.js errors?**
1. Clear deployment cache
2. Verify `vercel.json` is in the root directory
3. Check that no `.vercel` folder is cached with old settings
4. Try removing the project from Vercel and re-importing it

**Build failing?**
1. Make sure pnpm is available: `pnpm --version`
2. Verify dependencies install correctly: `pnpm install`
3. Test build locally: `pnpm build`
4. Check that `dist` folder is created

## Additional Configuration (if needed)

If you need environment variables for Supabase backend:
```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RESEND_API_KEY=your_resend_api_key
```

These should be configured in your deployment platform's environment variables section.
