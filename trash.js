#! /bin/env node

(async () => {

	const bcrypt = require("bcryptjs");

	// Database
	const sequelize = require('./config/database');

	const User = require('./models/User');
	const Gig = require('./models/Gig');

	// Relationships
	User.hasMany(Gig);
	Gig.belongsTo(User);

	await sequelize.sync();
	console.log("tables created"); // create tables if not exist 
	// const users = User.findAll();
	// console.log(users);

	await User.create({
		username: 'a',
		email: 'a',
		password: bcrypt.hashSync('a', 14),
	});

	await User.create({
		username: 'b',
		email: 'b',
		password: bcrypt.hashSync('b', 14),
	});

	await Gig.bulkCreate([
  {
    title: "Build a Personal Portfolio Website",
    budget: "500",
    description: "Need a sleek, modern portfolio site with animations and a contact form.",
    technologies: "React, Next.js, Tailwind CSS, Framer Motion",
    userId: 1,
  },
  {
    title: "E-commerce Website Development",
    budget: "2000",
    description: "Looking for a full-fledged e-commerce platform with payment integration.",
    technologies: "Shopify, Liquid, JavaScript, GraphQL",
    userId: 1,
  },
  {
    title: "Create a Mobile App for Task Management",
    budget: "3000",
    description: "A task management app with push notifications and offline support.",
    technologies: "Flutter, Dart, Firebase, Firestore",
    userId: 1,
  },
  {
    title: "Custom WordPress Theme Development",
    budget: "800",
    description: "Need a unique WordPress theme built from scratch with SEO optimization.",
    technologies: "WordPress, PHP, MySQL, CSS, JavaScript",
    userId: 1,
  },
  {
    title: "AI Chatbot for Customer Support",
    budget: "2500",
    description: "Develop an AI-powered chatbot for handling customer queries automatically.",
    technologies: "Python, TensorFlow, NLP, OpenAI API",
    userId: 1,
  },
  {
    title: "Social Media Automation Tool",
    budget: "1500",
    description: "A tool to schedule and automate social media posts across platforms.",
    technologies: "Node.js, Puppeteer, MongoDB, Express",
    userId: 1,
  },
  {
    title: "Build a Crypto Trading Bot",
    budget: "5000",
    description: "A trading bot that integrates with Binance and Coinbase APIs.",
    technologies: "Python, WebSockets, Binance API, Pandas",
    userId: 1,
  },
  {
    title: "Design and Develop a SaaS Dashboard",
    budget: "4000",
    description: "Need a feature-rich SaaS dashboard with user authentication and analytics.",
    technologies: "React, Next.js, PostgreSQL, Prisma",
    userId: 1,
  },
  {
    title: "Landing Page for Marketing Campaign",
    budget: "600",
    description: "A high-converting landing page for a new product launch.",
    technologies: "HTML, CSS, JavaScript, GSAP",
    userId: 1,
  },
  {
    title: "Automate Data Entry with AI",
    budget: "3500",
    description: "Develop an AI-powered tool to extract and enter data automatically.",
    technologies: "Python, OCR, OpenCV, TensorFlow",
    userId: 1,
  },
  {
    title: "Develop a Custom CMS",
    budget: "4500",
    description: "A lightweight, fast content management system for blogs and portfolios.",
    technologies: "PHP, Laravel, MySQL, Vue.js",
    userId: 1,
  },
  {
    title: "Build a Job Board Platform",
    budget: "6000",
    description: "A job board site with user authentication and payment processing.",
    technologies: "Django, PostgreSQL, React, Stripe API",
    userId: 1,
  },
  {
    title: "Inventory Management System",
    budget: "3200",
    description: "A cloud-based inventory tracking system with barcode scanning support.",
    technologies: "Node.js, MongoDB, Express, React",
    userId: 1,
  },
  {
    title: "Build an AI-Powered Resume Screener",
    budget: "5000",
    description: "A tool to filter job applications using AI-based resume analysis.",
    technologies: "Python, TensorFlow, NLP, FastAPI",
    userId: 1,
  },
  {
    title: "Develop a Video Streaming Platform",
    budget: "10000",
    description: "A high-performance video streaming platform with real-time chat.",
    technologies: "React, WebRTC, Node.js, AWS S3",
    userId: 1,
  },
  {
    title: "Create a Multi-Vendor Marketplace",
    budget: "7500",
    description: "An online marketplace for multiple vendors with admin controls.",
    technologies: "Magento, PHP, MySQL, Vue.js",
    userId: 1,
  },
  {
    title: "Build a Financial Dashboard",
    budget: "5500",
    description: "A financial analytics dashboard with real-time data visualization.",
    technologies: "React, D3.js, Python, Flask",
    userId: 1,
  },
  {
    title: "Develop a Car Rental Booking System",
    budget: "4200",
    description: "An online booking system for car rentals with GPS tracking.",
    technologies: "Ruby on Rails, PostgreSQL, React, Google Maps API",
    userId: 1,
  },
  {
    title: "E-learning Platform with Quizzes",
    budget: "6300",
    description: "A web-based learning platform with quizzes and progress tracking.",
    technologies: "Django, React, PostgreSQL, GraphQL",
    userId: 1,
  },
  {
    title: "Build a Custom CRM for Sales Teams",
    budget: "7000",
    description: "A CRM system with sales tracking, analytics, and email automation.",
    technologies: "Node.js, Vue.js, MongoDB, AWS",
    userId: 1,
  },
]);
	console.log("Gigs inserted");

})();
