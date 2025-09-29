# Bhoomi Jain - Data Science Portfolio

A responsive portfolio website showcasing data science skills, projects, and experience.

## 🚀 Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Data Science Focus**: Specialized sections highlighting ML projects and technical skills
- **Interactive Elements**: Smooth scrolling, typing animations, and hover effects
- **Resume Integration**: Downloadable resume with comprehensive data science experience

## 📁 Project Structure

```
portfolioprojects/
├── index.html              # Main portfolio webpage
├── styles/
│   └── style1.css          # Styling and responsive design
├── scripts/
│   └── script1.js          # Interactive functionality
├── images/
│   ├── background01.jpg    # Background image
│   ├── favicon.ico         # Website icon
│   └── Myphoto.png        # Profile photo (update with your photo)
├── resume-content.html     # Resume template (convert to PDF)
└── README.md              # This file
```

## 🛠️ Setup Instructions

### 1. Update Profile Photo
- Replace `images/Myphoto.png` with your professional headshot
- Recommended dimensions: 400x400px
- Format: PNG or JPG

### 2. Create Resume PDF
- Open `resume-content.html` in your browser
- Update the content with your actual information:
  - Contact details
  - Professional experience
  - Education background
  - Technical skills
  - Projects and certifications
- Print to PDF or use browser's "Save as PDF" option
- Save as `data-science-resume.pdf` in the main folder

### 3. Customize Content
Update the following sections in `index.html`:
- **Personal Information**: Name, title, contact details
- **About Section**: Your professional summary
- **Skills**: Add/remove technical skills with proficiency levels
- **Projects**: Update with your actual data science projects
- **Services**: Modify based on your service offerings
- **Social Media Links**: Update href attributes with your profiles

### 4. Social Media Links
Update the social media links in the navigation:
```html
<div class="media-icons">
  <a href="https://linkedin.com/in/your-profile"><i class="fab fa-linkedin-in"></i></a>
  <a href="https://github.com/your-username"><i class="fab fa-github"></i></a>
  <a href="https://kaggle.com/your-profile"><i class="fab fa-kaggle"></i></a>
</div>
```

## 🎨 Customization

### Colors
The primary color scheme uses:
- Primary Blue: `#4070f4`
- Dark Blue: `#0E2431`
- Light Blue: `#56a2e5`

To change colors, update the CSS variables in `style1.css`.

### Skills Section
Update skill percentages in the HTML:
```html
<div class="box">
  <div class="topic">Python</div>
  <div class="per">95%</div>
</div>
```

### Projects Section
Add new projects by duplicating the project box structure:
```html
<div class="box">
  <div class="icon">
    <i class="fas fa-chart-bar"></i>
  </div>
  <div class="topic">Project Title</div>
  <p>Project description...</p>
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🔧 Technical Features

### JavaScript Functionality
- Sticky navigation on scroll
- Mobile menu toggle
- Smooth scrolling between sections
- Typing animation for main heading
- Skill bar animations
- Interactive contact button

### CSS Features
- Flexbox and Grid layouts
- CSS animations and transitions
- Font Awesome icons integration
- Custom scrollbar styling
- Hover effects and interactions

## 🚀 Deployment

### Local Development
1. Open `index.html` in a web browser
2. Use Live Server extension in VS Code for hot reload

### Web Hosting
1. Upload all files to your web hosting provider
2. Ensure the folder structure is maintained
3. Update any absolute paths to relative paths if needed

### GitHub Pages
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Enable GitHub Pages in repository settings
4. Access your portfolio at `https://username.github.io/repository-name`

## 📧 Contact Information

To update contact information:
1. Update email, phone, and location in `resume-content.html`
2. Update social media links in `index.html`
3. Ensure contact button functionality works correctly

## 🔄 Regular Updates

Keep your portfolio current by:
- Adding new projects as you complete them
- Updating skills and proficiency levels
- Refreshing your resume content
- Adding new certifications and achievements
- Updating your professional photo

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: This portfolio has been customized from the original template to focus specifically on data science and machine learning expertise. All content should be updated with your actual professional information before deployment.