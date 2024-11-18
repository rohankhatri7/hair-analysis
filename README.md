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
```
## Environment Variables

Create `.env` files for both the backend and frontend.

### Backend `.env`

```plaintext
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Frontend `.env`
```
VITE_CLERK_FRONTEND_API=your_clerk_frontend_api
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

## Steps to Run the Application

### 1. Clone the Repository
```
git clone https://github.com/yourusername/hair-analysis.git
cd hair-analysis
```

### 2. Set Up the Backend
```
cd backend
npm install
# Add your environment variables to backend/.env.
npm start
```

### 3. Set Up the Frontend
```
cd frontend
npm install
# Add your environment variables to frontend/.env.
npm run dev
```

### 4. Access the Application
#### Frontend: Open your browser and go to http://localhost:5173
#### Backend: API is accessible at http://localhost:5050



## Docker Compose Setup

The project is containerized using Docker Compose for easier setup.

### Steps to Run the Application

1. Clone the repository
```
git clone https://github.com/yourusername/hair-analysis-web-app.git
cd hair-analysis-web-app
```
2. Create the .env files as described above.
3. Run Docker Compose
```
docker-compose up --build
```
4. Access the application:
  Frontend: http://localhost:3000
  Backend API: http://localhost:5050

## Running Locally without Docker

### Backend Setup (Node.js + Express)

1. Navigate to the backend directory: cd backend
2. Create the .env file as mentioned above.
3. Install dependencies
```
npm install
```
5. Start the server
```
npm run dev
```

## How to Use

- Sign Up: Create an account using Clerk.
- Select Plan: Choose a subscription plan via Stripe.
- Analyze Hair: Upload a hair image or use your webcam.
- View the AI's analysis of your hair health (healthy, dandruff, thinning/bald, or greasy).
- Track Progress: Manage analysis results during your session (note: results are not persisted).

## Features in Development

- Improved AI models for detailed hair condition analysis.
- Adding user history for past analyses.
- Multi-language support for global accessibility.

## Contributing

Feel free to open issues or pull requests if you find bugs or have suggestions for improvements.

## License

This project is licensed under the MIT License.

## Contact

For any questions or support, contact rohankhatri0507@gmail.com.



