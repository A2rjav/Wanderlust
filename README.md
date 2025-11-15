# 🏠 Wanderlust

A full-stack web application for listing and exploring rental properties around the world. Built with Node.js, Express, MongoDB, and EJS templating.

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://wanderlust.vercel.app)
[![GitHub](https://img.shields.io/badge/github-repository-blue.svg)](https://github.com/A2rjav/Wanderlust)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Database Setup](#database-setup)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- 🏡 **Browse Listings** - View a collection of rental properties from around the world
- ➕ **Create Listings** - Add new properties with details, images, and pricing
- ✏️ **Edit Listings** - Update existing property information
- 🗑️ **Delete Listings** - Remove unwanted listings
- 📝 **Detailed Views** - See comprehensive information about each property
- 🌍 **Location-based** - Properties organized by location and country
- 💰 **Price Display** - Clear pricing information in local currency
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- ✅ **Form Validation** - Client and server-side validation using Joi

## 🛠️ Tech Stack

**Frontend:**
- EJS (Embedded JavaScript Templates)
- Bootstrap 4
- Font Awesome Icons
- Custom CSS

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose ODM
- Method Override (for PUT and DELETE requests)

**Additional Tools:**
- dotenv (Environment variable management)
- Joi (Schema validation)
- EJS Mate (Layout support for EJS)

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) or local MongoDB
- [Git](https://git-scm.com/)

## 🚀 Installation

1. **Clone the repository**

```bash
git clone https://github.com/A2rjav/Wanderlust.git
cd Wanderlust
```

2. **Install dependencies**

```bash
npm install
```

3. **Create environment file**

Create a `.env` file in the root directory:

```bash
touch .env
```

## 🔐 Environment Variables

Add the following environment variables to your `.env` file:

```env
NODE_ENV=development
MONGODB_URL=your_mongodb_connection_string_here
PORT=3000
```

### Getting MongoDB Connection String:

1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a cluster (free tier available)
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database user password
6. Replace `<dbname>` with `wanderlust`

Example:
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/wanderlust?retryWrites=true&w=majority
```

## 💻 Running the Application

### Development Mode (with nodemon)

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The application will be available at `http://localhost:3000`

## 🗄️ Database Setup

### Initialize Sample Data

To populate your database with sample listings:

```bash
node init/index.js
```

This will:
- Connect to your MongoDB database
- Clear existing data
- Insert 29 sample property listings

### MongoDB Atlas Network Access

If using MongoDB Atlas, ensure you:
1. Go to **Network Access** in Atlas
2. Add IP Address → **Allow Access from Anywhere** (0.0.0.0/0)
3. This allows your application to connect from any location

## 🌐 Deployment

This project is configured for deployment on [Vercel](https://vercel.com).

### Deploy to Vercel

1. **Install Vercel CLI**

```bash
npm install -g vercel
```

2. **Login to Vercel**

```bash
vercel login
```

3. **Deploy**

```bash
vercel --prod
```

4. **Add Environment Variables**

In Vercel Dashboard:
- Go to your project → Settings → Environment Variables
- Add `MONGODB_URL`, `NODE_ENV`, and `PORT`
- Redeploy the application

### Alternative: GitHub Integration

1. Push your code to GitHub
2. Import repository in Vercel Dashboard
3. Add environment variables
4. Deploy automatically on every push

## 📁 Project Structure

```
Wanderlust/
├── init/
│   ├── data.js              # Sample listing data
│   └── index.js             # Database initialization script
├── models/
│   ├── listing.js           # Listing model schema
│   └── review.js            # Review model schema
├── public/
│   ├── css/
│   │   └── style.css        # Custom styles
│   └── js/
│       └── script.js        # Client-side JavaScript
├── services/
│   └── aiService.js         # AI service integration
├── utils/
│   ├── ExpressError.js      # Custom error handler
│   └── wrapasync.js         # Async error wrapper
├── views/
│   ├── includes/
│   │   ├── footer.ejs       # Footer partial
│   │   └── navbar.ejs       # Navigation bar partial
│   ├── layouts/
│   │   └── boilerplate.ejs  # Main layout template
│   └── listings/
│       ├── edit.ejs         # Edit listing page
│       ├── error.ejs        # Error page
│       ├── index.ejs        # All listings page
│       ├── new.ejs          # Create new listing page
│       └── show.ejs         # Single listing detail page
├── .env                     # Environment variables (not in repo)
├── .gitignore              # Git ignore rules
├── app.js                  # Main application file
├── package.json            # Dependencies and scripts
├── schema.js               # Joi validation schemas
└── vercel.json             # Vercel deployment config
```

## 🛣️ API Routes

### Listings

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Redirect to listings page |
| GET | `/listings` | Display all listings |
| GET | `/listings/new` | Show form to create new listing |
| POST | `/listings` | Create a new listing |
| GET | `/listing/:id` | Show single listing details |
| GET | `/listings/:id/edit` | Show form to edit listing |
| PUT | `/listings/:id` | Update a listing |
| DELETE | `/listings/:id` | Delete a listing |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Aarjav**

- GitHub: [@A2rjav](https://github.com/A2rjav)
- Project Link: [Wanderlust](https://github.com/A2rjav/Wanderlust)

## 🙏 Acknowledgments

- Sample images from [Unsplash](https://unsplash.com)
- Icons from [Font Awesome](https://fontawesome.com)
- UI framework by [Bootstrap](https://getbootstrap.com)

---

⭐ If you found this project helpful, please give it a star!
