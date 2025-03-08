# React Module Federation Template

This repository is a template for building a **React micro frontend (MFE)** application using **Module Federation 2.0** with **RSBuild**.

## 🚀 Features
- **Micro Frontend Architecture** using Webpack Module Federation
- **RSBuild** for fast and optimized builds
- **React 19 Support**
- **Host & Remote Setup** for easy integration
- **Docker & Nginx** for production deployment

## 📦 Installation
```sh
# Clone & reinitialize the repository
git clone https://github.com/syahrizalfauzi/react_mfe_template.git
cd react_mfe_template
rm -rf .git
git init

# Install dependencies
npm install

# Initialize .env file
cp .env.example .env

```

> [!IMPORTANT]
> Make sure to change the project name in package.json

## 🏗️ Running the Application
```sh
npm run dev
```
This starts both the **host (port 2000)**.

## 🔧 Configuration
The Module Federation settings are defined in `module-federation.config.ts` and `.env`:
```js
// List of dependencies that should be singletons, e.g. react, react-router, component library, etc.
const singletons = ['react', 'react-dom'];

// List of remotes that should be shared, e.g. components, utils, etc.
// Set the URL from .env
const remotes = {
  federation_remote: process.env.FEDERATION_REMOTE_URL,
};
```

## 📦 Docker Deployment
### Build and Run with Docker
```sh
docker build -t <IMAGE_NAME> .
docker run -p <PORT>:80 <IMAGE_NAME>
```
