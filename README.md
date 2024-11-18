# AI Hair Analysis Web App

This project is a full-stack AI-based hair analysis web application. It is built using React, TypeScript, TensorFlow, Clerk, Stripe, and Node.js. The app analyzes hair conditions using a trained machine learning model, determining whether hair is healthy, has dandruff, is thinning/balding, or greasy.

## Features

- Upload hair images or use a camera for live analysis.
- AI-powered detection of hair conditions (healthy, dandruff, thinning/balding, greasy).
- Secure user authentication with Clerk.
- Subscription management with Stripe integration.
- Responsive design for use on desktop and mobile devices.

## Tech Stack

- **Frontend:** React, TypeScript, Clerk, TailwindCSS
- **Backend:** Node.js, Express
- **Machine Learning:** TensorFlow (Google Teachable Machine)
- **Payment Integration:** Stripe

## Prerequisites

Before setting up the project, ensure that you have the following installed:

- **Node.js** (16.x or higher)
- **npm** or **yarn**
- **Stripe Account** (for payment integration)
- **Clerk Account** (for authentication)

## Project Structure

```plaintext
├── backend/
│   ├── .env             # Environment variables for backend
│   ├── index.js         # Express server setup
├── frontend/
│   ├── .env             # Environment variables for frontend
│   ├── src/             # React source code
│   ├── components/      # Reusable React components
│   ├── pages/           # Page-specific React components
│   ├── styles/          # TailwindCSS styling
├── README.md            # Project documentation
