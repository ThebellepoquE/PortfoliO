# 🎨 Ione Rodríguez Portfolio

Personal portfolio application built with React showcasing the work and skills of **Ione Rodríguez Uraga**, Full Stack Developer.

## 🚀 Getting Started

### Prerequisites
- Node.js v14.21.0+
- npm v6.14.17+
- PowerShell (Windows)

### Installation
```powershell
# Clone the repository
git clone [your-repo-url]
cd THEBELLEPOQUE

# Install dependencies
npm install
```

### Development
```powershell
npm start
```
The application will run on **http://localhost:3000**

### Production Build
```powershell
npm run prod
```

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React** 16.13.1
- 🗃️ **Redux** 4.0.5 (State Management)
- 🧭 **React Router** 5.1.2 (Navigation)
- 🎨 **SCSS/Sass** (Styling)
- 📦 **Webpack** 4.20.2 (Bundling)
- 🔄 **Babel** 7.12.x (Transpiling)

### Backend & API
- 🌐 **DevCamp Space API** (Portfolio data)
- 📡 **Axios** 0.21.1 (HTTP client)

### Tools & Utilities
- 🎯 **FontAwesome** (Icons)
- 🔧 **ESLint** (Code linting)
- 🎭 **Core-JS** (Polyfills)

## 📁 Project Structure
```
THEBELLEPOQUE/
├── src/
│   ├── components/
│   │   ├── app.js                    # Main app component
│   │   ├── navigation/               # Navigation components
│   │   │   └── navigation-container.js
│   │   ├── portfolio/                # Portfolio components
│   │   │   ├── portfolio-container.js
│   │   │   └── portfolio-item.js
│   │   └── pages/                    # Page components
│   │       ├── home.js
│   │       ├── about.js
│   │       ├── contact.js
│   │       └── blog.js
│   ├── reducers/                     # Redux reducers
│   ├── style/                        # SCSS styles
│   │   ├── main.scss                 # Main stylesheet
│   │   ├── layouts.scss              # Layout styles
│   │   └── navigation.scss           # Navigation styles
│   ├── bootstrap.js                  # App entry point
│   └── vendor.js                     # Third-party libraries
├── webpack/                          # Webpack configuration
│   ├── common.config.js
│   └── dev.config.js
├── static/                           # Static assets
└── package.json                      # Dependencies
```

## ✨ Features

- 🎨 **Modern UI/UX** with responsive design
- 🧭 **Single Page Application** with React Router
- 🔐 **Authentication system** for portfolio management
- 📱 **Mobile-first responsive design**
- 🎯 **Portfolio filtering** by categories
- 📝 **Blog system** with rich text editor
- 🚀 **Fast loading** with Webpack optimization
- 🎪 **Interactive hover effects** on portfolio items

## 🌐 Live Demo

**Portfolio URL:** [Your deployed URL here]  
**API Endpoint:** `https://ionerodriguez.devcamp.space/portfolio/portfolio_items`

## 🔧 Troubleshooting

### Common Issues

#### Clean installation (PowerShell)
```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm cache clean --force
npm install
```

#### SCSS compilation errors
```powershell
# Rebuild node-sass
npm rebuild node-sass
```

#### Port already in use
```powershell
# Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID [PID_NUMBER] /F
```

## 🚀 Deployment

### Build for production
```powershell
npm run prod
```

### Deploy to hosting service
Files will be generated in `/static/dist/` directory.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 👩‍💻 Author

**Ione Rodríguez Uraga**  
Full Stack Developer  

- 🌐 Portfolio: [Your website]
- 💼 LinkedIn: [Your LinkedIn]
- 📧 Email: [Your email]
- 🐙 GitHub: [@ThebellepoquE](https://github.com/ThebellepoquE/PortfoliO.git)

## 🙏 Acknowledgments

- Built following **DevCamp Bootcamp** curriculum
- Thanks to **Jordan Hudgens** for the excellent React course
- Portfolio API provided by **DevCamp Space**

---

⭐ **Star this repo if you found it helpful!** ⭐