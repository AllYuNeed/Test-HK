# Logo Setup Instructions

## Adding the Hookimpex Logo

To complete the setup, please add the Hookimpex logo image to the project:

### Steps:

1. **Save the logo image** (the circular logo with iron, steam, and "hi" branding)
2. **Rename it to:** `hookimpex-logo.png`
3. **Place it in the `/public` folder** at the root of the project
   - Path should be: `/public/hookimpex-logo.png`

### File Structure:
```
hookimpex-website/
├── public/
│   ├── hookimpex-logo.png  ← Add logo here
│   └── logo.svg
├── src/
└── ...
```

### After Adding:

The logo will automatically appear in:
- ✅ Navigation header (top-left)
- ✅ Footer (company info section)

### Deployment:

Once the logo is added, commit and push:

```bash
git add public/hookimpex-logo.png
git commit -m "Add Hookimpex logo"
git push origin main
```

Vercel will automatically redeploy with the new logo!

---

**Note:** The code is already configured to use `/hookimpex-logo.png`. Just add the image file and it will work immediately.
