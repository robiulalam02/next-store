# Next Store | Ecommerce Website

Project Description
This is a simple Next.js 15 application demonstrating public and protected pages with basic authentication using NextAuth.js. Users can view a landing page, browse products, see product details, and, once authenticated, access a protected dashboard to add new products.
Core Features:

Landing page with Navbar, Hero, Product Highlights, and Footer.

Public product list and detailed product pages.

Authentication via NextAuth (Google or credentials).

Protected Add Product page accessible only to logged-in users.

Optional enhancements like loading spinners, toast notifications, and theme toggle.

Setup & Installation

Clone the Repository
git clone https://github.com/your-username/nextjs-product-app.git

cd nextjs-product-app

Install Dependencies
npm install

Environment Variables
Create a .env.local file in the root directory and add the following (update with your own credentials):
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-nextauth-secret

If using a database for product storage:
DATABASE_URL=your-database-connection-string

Run the Development Server
npm run dev
Open http://localhost:3000
 to view the app.

Build for Production
npm run build
npm start

Route Summary

/ : Landing page with Navbar, Hero, Product Highlights, Footer (Public)
/login : Login page with NextAuth authentication (Public)
/products : List of all products (Public)
/products/[id] : Product details page (Public)
/dashboard/add-product : Form to add a new product (Protected, authenticated users only)
/api/products : API route to fetch products (Public)
/api/products/add : API route to add a product (Protected)

Technologies Used

Next.js 15 (App Router)

NextAuth.js for authentication

React for frontend components

Optional: Tailwind CSS, toast notifications, theme toggler

Features to Enhance

Loading spinners on form submission

Toast messages on successful product addition

Light/Dark theme toggle