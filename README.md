# Event Hiring App

A full-stack application to create and manage event-based hiring requirements with a multi-step form workflow.

## Live Demo

- Frontend: https://frontend-eight-sigma-17.vercel.app/
- Backend API: https://event-hiring-app.onrender.com/api/events

> Note: Backend is on Render's free tier — first request may take 30–60 seconds due to cold start.

## Tech Stack

**Frontend:** Next.js, React.js

**Backend:** Node.js, Express.js

**Database:** MongoDB

**Deployment:** Vercel (Frontend), Render (Backend)

## Features

**Multi-step hiring form:**

- Step 1 — Event basics: name, type, date range, location, venue, and category
- Step 2 — Dynamic fields based on category:
  - Planner → Budget, Guest count
  - Performer → Performer type, Duration
  - Crew → Crew type, Member count
- Step 3 — Review entered data before submission
- Step 4 — Submit to backend API and store in MongoDB

**Form UX:**
- Field validation with disabled submit until complete
- Loading state during submission
- Toast notifications for success and error states
- Responsive UI

## Project Structure

```
event-hiring-app/
│
├── frontend/          # Next.js UI
│
├── backend/           # Express API + MongoDB
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── index.js
│
└── README.md
```

## Local Setup

**1. Clone the repository**

```bash
git clone https://github.com/karthiknani229-art/event-hiring-app.git
cd event-hiring-app
```

**2. Backend setup**

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file inside `/backend`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

**3. Frontend setup**

```bash
cd frontend
npm install
npm run dev
```

## Key Design Decisions

- Dynamic field rendering based on selected category avoids unnecessary form complexity
- Flexible MongoDB schema using a `details` object handles varying category-specific fields
- Review step before submission reduces incorrect entries
- Validation applied at each step, not just on final submit

## Author

Penta Karthik — [GitHub](https://github.com/karthiknani229-art)
