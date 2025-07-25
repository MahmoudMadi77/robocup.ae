// RoboCup UAE Website Configuration
// Edit these values to customize your website

const siteConfig = {
    // Basic Site Information
    siteName: "RoboCup UAE",
    siteDescription: "Advancing robotics and AI in the United Arab Emirates through competitive innovation",
    siteUrl: "https://robocup.ae",

    // Contact Information
    contact: {
        email: "info@robocup.ae",
        phone: "+971 4 123 4567",
        address: "Dubai Knowledge Park, Dubai, UAE",
        socialMedia: {
            twitter: "https://twitter.com/robocupuae",
            linkedin: "https://linkedin.com/company/robocup-uae",
            instagram: "https://instagram.com/robocupuae",
            facebook: "https://facebook.com/robocupuae"
        }
    },

    // Organization Members
    organization: [
        {
            name: "Dr. Ahmed Al-Mansoori",
            position: "President",
            photo: "images/ahmed-almansoori.jpg",
            bio: "Leading robotics researcher with 15+ years experience"
        },
        {
            name: "Prof. Fatima Al-Zahra",
            position: "Vice President",
            photo: "images/fatima-alzahra.jpg",
            bio: "AI specialist and education advocate"
        },
        {
            name: "Dr. Mohammed bin Rashid",
            position: "Technical Director",
            photo: "images/mohammed-binrashid.jpg",
            bio: "Expert in autonomous systems and robotics"
        },
        {
            name: "Eng. Aisha Al-Nuaimi",
            position: "Education Coordinator",
            photo: "images/aisha-alnuaimi.jpg",
            bio: "STEM education specialist and program coordinator"
        }
    ],

    // News Articles
    news: [
        {
            title: "RoboCup UAE 2025 Registration Opens",
            date: "2025-03-15",
            excerpt: "Registration is now open for RoboCup UAE 2025, taking place in Dubai. Teams from across the region are invited to participate in this premier robotics competition.",
            link: "#news-1",
            featured: true
        },
        {
            title: "Partnership with UAE Universities",
            date: "2025-02-28",
            excerpt: "RoboCup UAE announces new partnerships with leading universities across the Emirates to promote robotics education and research.",
            link: "#news-2",
            featured: false
        },
        {
            title: "Junior League Expansion",
            date: "2025-02-10",
            excerpt: "The RoboCupJunior program expands to include more schools across the UAE, bringing robotics education to young innovators.",
            link: "#news-3",
            featured: false
        }
    ],

    // Upcoming Events
    events: [
        {
            title: "RoboCup UAE 2025",
            date: "2025-04-15",
            endDate: "2025-04-18",
            location: "Dubai World Trade Centre",
            description: "The premier robotics competition in the UAE featuring all major leagues and junior competitions.",
            registrationOpen: true,
            registrationLink: "#register-robocup-2025"
        },
        {
            title: "RoboCup Junior UAE Championship",
            date: "2025-06-10",
            endDate: "2025-06-12",
            location: "Abu Dhabi",
            description: "National championship for junior teams, qualifying event for international competitions.",
            registrationOpen: true,
            registrationLink: "#register-junior-championship"
        },
        {
            title: "Robotics Workshop Series",
            date: "2025-09-05",
            endDate: "2025-09-07",
            location: "Multiple Locations",
            description: "Educational workshops for students and educators across the UAE.",
            registrationOpen: false,
            registrationLink: "#register-workshops"
        }
    ],

    // Statistics
    stats: {
        participatingTeams: 50,
        universities: 15,
        emirates: 7,
        yearsActive: 8
    },

    // Leagues Information
    leagues: {
        soccer: {
            name: "RoboCupSoccer",
            description: "Autonomous robots playing soccer in various categories including Humanoid, Standard Platform, Middle Size, Small Size, and Simulation leagues.",
            categories: [
                "Humanoid League",
                "Standard Platform League", 
                "Middle Size League",
                "Small Size League",
                "Simulation League"
            ]
        },
        rescue: {
            name: "RoboCupRescue",
            description: "Robots designed for search and rescue operations in disaster scenarios, testing both physical robots and simulation systems.",
            categories: [
                "Robot League",
                "Simulation League"
            ]
        },
        home: {
            name: "RoboCup@Home",
            description: "Service robots operating in domestic environments, focusing on human-robot interaction and practical applications.",
            categories: [
                "Open Platform League",
                "Domestic Standard Platform",
                "Social Standard Platform"
            ]
        },
        industrial: {
            name: "RoboCupIndustrial",
            description: "Industrial automation and logistics challenges for robots in manufacturing and warehouse environments.",
            categories: [
                "RoboCup@Work",
                "Logistics League"
            ]
        },
        junior: {
            name: "RoboCupJunior",
            description: "Educational robotics competitions for students aged 14-19, fostering STEM education and innovation.",
            categories: [
                "Soccer",
                "OnStage", 
                "Rescue"
            ]
        }
    },

    // Theme Colors
    colors: {
        primary: "#2a5298",
        secondary: "#1e3c72", 
        accent: "#ffd700",
        background: "#f8f9fa",
        text: "#333333",
        textLight: "#666666"
    },

    // Feature Flags
    features: {
        enableAnimations: true,
        enableParallax: true,
        enableCounterAnimation: true,
        enableSmoothScroll: true,
        enableMobileMenu: true,
        enableFormValidation: true,
        enableNewsletterSignup: false,
        enableMultiLanguage: false
    },

    // SEO Settings
    seo: {
        keywords: "robotics, UAE, competition, AI, automation, education, STEM, Dubai, Abu Dhabi",
        author: "RoboCup UAE",
        robots: "index, follow",
        ogImage: "images/robocup-uae-og.jpg",
        twitterCard: "summary_large_image"
    },

    // Analytics
    analytics: {
        googleAnalyticsId: "", // Add your GA4 ID here
        facebookPixelId: "", // Add your Facebook Pixel ID here
        enableHotjar: false,
        hotjarId: ""
    }
};

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
}

// Make available globally in browser
if (typeof window !== 'undefined') {
    window.siteConfig = siteConfig;
}