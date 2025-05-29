# 🚀 Interactive CV Website

A modern, responsive CV/Resume website built with HTML, CSS, and JavaScript featuring beautiful animations, dark/light theme toggle, and interactive elements.

## ✨ Features

- **🌓 Dark/Light Theme Toggle** - Seamless theme switching with persistent storage
- **📱 Fully Responsive** - Perfect display on all devices and screen sizes
- **🎯 Smooth Animations** - Engaging scroll-triggered animations and transitions
- **🧭 Interactive Navigation** - Smooth scrolling with active section highlighting
- **📊 Animated Skills Bars** - Visual representation of technical skills
- **📈 Counter Animations** - Animated statistics and achievements
- **💼 Project Showcase** - Interactive project cards with hover effects
- **📮 Contact Form** - Functional contact form with validation
- **✨ Particle Effects** - Subtle background particle animation
- **🎨 Modern Design** - Clean, professional aesthetic with gradients

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with custom properties and animations
- **JavaScript (ES6+)** - Interactive functionality and animations
- **Font Awesome** - Icon library
- **Google Fonts** - Poppins font family

## 🚀 Getting Started

### Local Development
1. **Clone or download** this repository
2. **Open** `index.html` in your web browser
3. **Customize** the content with your personal information

### Publishing to GitHub

#### Option 1: Create New Repository (Recommended)
1. **Create a new repository** on GitHub named `your-username.github.io` (for personal site) or any name you prefer
2. **Add remote origin**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
   ```
3. **Push to GitHub**:
   ```bash
   git branch -M main
   git push -u origin main
   ```

#### Option 2: Using GitHub CLI
```bash
gh repo create YOUR_REPOSITORY_NAME --public --source=. --remote=origin --push
```

### Deploy to GitHub Pages
1. Go to your repository **Settings** → **Pages**
2. Select **Source**: Deploy from a branch
3. Choose **Branch**: main
4. Click **Save**
5. Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`

### Live Development Server
For local development with live reload:
```bash
npx live-server --port=3000 --host=localhost --open=/
```

## 📁 Project Structure

```
interactive-cv-website/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styles and animations
├── js/
│   └── script.js           # JavaScript functionality
├── .github/
│   └── copilot-instructions.md
└── README.md               # Project documentation
```

## 🎨 Customization

### Personal Information
Edit the following sections in `index.html`:
- Hero section (name, title, description)
- About section (bio, stats)
- Experience section (job history)
- Skills section (technical skills)
- Projects section (portfolio items)
- Contact section (contact details)

### Styling
Modify CSS custom properties in `styles.css`:
- Colors and gradients
- Fonts and typography
- Spacing and layout
- Animation timings

### Functionality
Extend JavaScript features in `script.js`:
- Add new animations
- Customize form handling
- Implement additional interactivity

## 🎯 Key Sections

### 🏠 Hero Section
- Eye-catching introduction
- Professional profile image
- Social media links
- Call-to-action buttons

### 👤 About Section
- Personal bio
- Career timeline
- Animated statistics

### 💼 Experience Section
- Work history cards
- Job descriptions
- Company details

### 🛠️ Skills Section
- Technical skills with progress bars
- Categorized by frontend, backend, and tools
- Animated skill level indicators

### 📂 Projects Section
- Portfolio showcase
- Project images and descriptions
- Technology tags
- Live demo and source code links

### 📞 Contact Section
- Contact information
- Working contact form
- Form validation

## 🌟 Features Breakdown

### Theme Management
- Automatic theme detection
- Smooth theme transitions
- Persistent theme preference
- Custom theme toggle button

### Navigation System
- Fixed navigation bar
- Mobile hamburger menu
- Smooth scrolling to sections
- Active section highlighting
- Auto-hide on scroll (mobile)

### Animation System
- Scroll-triggered animations
- Counter animations
- Skill bar animations
- Particle background effects
- Hover effects and transitions

### Form Management
- Real-time validation
- Success/error notifications
- Responsive form design
- Accessible form controls

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (320px - 767px)

## 🎨 Color Scheme

### Light Theme
- Primary: #667eea
- Secondary: #764ba2
- Accent: #f093fb
- Background: #ffffff
- Text: #2d3748

### Dark Theme
- Background: #1a202c
- Cards: #2d3748
- Text: #f7fafc
- Maintained accent colors for consistency

## ⚡ Performance

- Optimized CSS with custom properties
- Efficient JavaScript with event delegation
- Lazy loading for animations
- Minimal external dependencies
- Clean, semantic HTML structure

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements, consider sharing them back with the community!

## 📞 Support

If you have any questions or need help customizing the website, feel free to reach out or create an issue in the repository.

---

**Made with ❤️ for developers who want to showcase their skills in style!**
