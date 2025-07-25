# RoboCup UAE Website

A modern, responsive website for RoboCup UAE - the premier robotics competition in the United Arab Emirates.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth scrolling, hover effects, and dynamic navigation
- **Competition Information**: Detailed information about all RoboCup leagues
- **News & Events**: Latest updates and upcoming events
- **Contact Form**: Functional contact form with validation

## Structure

```
robocup-ae-website/
├── index.html              # Main homepage
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # JavaScript functionality
├── images/                # Image assets
├── pages/
│   ├── about.html         # About page
│   ├── competitions.html  # Competitions page
│   ├── news.html         # News page
│   ├── events.html       # Events page
│   └── contact.html      # Contact page
└── README.md             # This file
```

## Deployment

### GitHub Pages Deployment

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to repository Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Custom Domain Setup (robocup.ae)

1. In your repository, create a file named `CNAME` in the root directory
2. Add your domain `robocup.ae` to the CNAME file
3. Configure your domain's DNS settings:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

## Customization

### Colors
The main color scheme uses:
- Primary: #667eea (Blue gradient start)
- Secondary: #764ba2 (Purple gradient end)
- Text: #333 (Dark gray)
- Background: #f8f9fa (Light gray)

### Fonts
- Primary font: Inter (Google Fonts)
- Icons: Font Awesome 6

### Content Updates
- Update team information in the about section
- Add real news articles and events
- Replace placeholder contact information
- Add actual competition dates and details

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized CSS and JavaScript
- Lazy loading for images
- Minimal external dependencies
- Fast loading times

## Contact

For questions about this website, contact:
- Email: info@robocup.ae
- Website: https://robocup.ae

## License

© 2024 RoboCup UAE. All rights reserved.
