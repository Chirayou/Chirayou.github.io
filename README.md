# Chirayou Bista — Portfolio

Personal portfolio homepage for **Chirayou Bista**, Master's student in Computer Science specializing in **Machine Learning in Digital Healthcare**.

## Technology Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Custom CSS design system with Dark/Light theme toggle
- **Deployment**: Automated via GitHub Actions to GitHub Pages (`Chirayou.github.io`)

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production distribution
npm run build
```

## GitHub Pages Setup

This repository includes an automated GitHub Actions deployment workflow in `.github/workflows/deploy.yml`.

To enable it on GitHub:
1. Go to your repository **Settings** on GitHub.
2. Select **Pages** from the left sidebar.
3. Under **Build and deployment -> Source**, select **GitHub Actions**.
4. Push your code to `main` — GitHub will automatically build and deploy your React site to `https://chirayou.github.io`!
