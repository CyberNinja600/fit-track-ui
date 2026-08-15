# FitTrack UI Documentation

This folder contains the local project resources and current frontend contract notes used during the development of the FitTrack UI.

## Resources used by this project

- FitTrack brand / product reference
  - FitTrack application concept and biometric fitness system
- React + Vite frontend
  - `react`
  - `react-dom`
  - `vite`
  - `@vitejs/plugin-react`
- TypeScript
  - `typescript`
  - `@types/react`
  - `@types/react-dom`
- Routing
  - `react-router-dom`
- State / data handling
  - `zustand`
  - `@tanstack/react-query`
  - `axios`
- Styling / UI system
  - `tailwindcss`
  - `postcss`
  - `autoprefixer`
  - custom App.css / index.css styling
- Icons
  - local Codicon font asset copied into `src/assets/codicon/`
  - `@vscode/codicons` package reference used as a source for the local asset set
- API backend target
  - Laravel auth server at `http://127.0.0.1:8000`

## Current page data expectations

This section reflects the state of the app right now: the pages are intentionally empty shells while the backend contract and real dataset integrations are still being developed.

### 1) Login page

Expected auth flow:
- Email and password are submitted to the Laravel auth endpoint.
- Request shape:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- Success response expected from backend:
  ```json
  {
    "data": {
      "accessToken": "string",
      "refreshToken": "string",
      "expiresIn": 3600,
      "user": {
        "id": "string",
        "email": "user@example.com",
        "name": "string",
        "role": "member | trainer",
        "createdAt": "ISO-8601 date string"
      }
    },
    "status": 200,
    "message": "string"
  }
  ```
- Stored locally in `localStorage` via `STORAGE_KEYS.ACCESS_TOKEN`, `REFRESH_TOKEN`, and `USER`.

### 2) Register page

Expected registration flow:
- Requires name, email, password, and role selection.
- Request shape:
  ```json
  {
    "name": "Full Name",
    "email": "user@example.com",
    "password": "password123",
    "role": "member"
  }
  ```
- Success response should mirror the login response payload and create the authenticated user session.

### 3) Dashboard page

Current state:
- Placeholder page with no live widgets.
- Expected future data:
  ```json
  {
    "overview": {
      "totalPrograms": 0,
      "activePrograms": 0,
      "completedTasks": 0,
      "upcomingSessions": 0
    },
    "recentActivity": [],
    "schedule": []
  }
  ```
- This page is expected to be driven by a backend dashboard endpoint, currently represented by `API_ENDPOINTS.DASHBOARD_DATA`.

### 4) Programs page

Current state:
- Placeholder page with a single CTA to create a new program.
- Expected future data:
  ```json
  {
    "data": [
      {
        "id": "string",
        "name": "string",
        "description": "string",
        "trainerId": "string",
        "weeks": 0,
        "members": [],
        "createdAt": "ISO-8601 date string",
        "updatedAt": "ISO-8601 date string"
      }
    ]
  }
  ```
- Primary endpoints expected:
  - `GET /programs`
  - `POST /programs`
  - `GET /programs/:id`
  - `PATCH /programs/:id`
  - `DELETE /programs/:id`

### 5) Create Program page

Current state:
- Placeholder page.
- Expected payload for creation:
  ```json
  {
    "name": "Program Name",
    "description": "Program description",
    "trainerId": "string",
    "weeks": 4
  }
  ```
- Expected backend response:
  ```json
  {
    "data": {
      "id": "string",
      "name": "string",
      "description": "string",
      "trainerId": "string",
      "weeks": 4,
      "members": [],
      "createdAt": "ISO-8601 date string",
      "updatedAt": "ISO-8601 date string"
    },
    "status": 200,
    "message": "string"
  }
  ```

### 6) Program detail page

Current state:
- Placeholder page.
- Expected data for a single program:
  ```json
  {
    "data": {
      "id": "string",
      "name": "string",
      "description": "string",
      "trainerId": "string",
      "trainer": {
        "id": "string",
        "email": "string",
        "name": "string",
        "role": "trainer",
        "createdAt": "ISO-8601 date string"
      },
      "weeks": 4,
      "members": [
        {
          "id": "string",
          "email": "string",
          "name": "string",
          "role": "member",
          "createdAt": "ISO-8601 date string"
        }
      ],
      "createdAt": "ISO-8601 date string",
      "updatedAt": "ISO-8601 date string"
    }
  }
  ```
- Related endpoints expected:
  - `GET /programs/:id`
  - `POST /programs/:id/join`
  - `POST /programs/:id/leave`
  - `GET /programs/:id/members`

### 7) Edit Program page

Current state:
- This page is still a builder shell and is not yet wired to live backend data.
- Expected future payloads:
  - Fetch existing program by `id`
  - Update program metadata / weekly plan structure
  - Save draft and deploy actions
- Expected structure for weekly content:
  ```json
  {
    "programId": "string",
    "weekNumber": 1,
    "startDate": "ISO-8601 date string",
    "endDate": "ISO-8601 date string",
    "days": [
      {
        "id": "string",
        "dayOfWeek": 0,
        "date": "ISO-8601 date string",
        "tasks": []
      }
    ]
  }
  ```

### 8) Program calendar page

Current state:
- Placeholder page.
- Expected future data:
  ```json
  {
    "programId": "string",
    "weeks": [
      {
        "id": "string",
        "weekNumber": 1,
        "startDate": "ISO-8601 date string",
        "endDate": "ISO-8601 date string",
        "days": [
          {
            "id": "string",
            "dayOfWeek": 1,
            "date": "ISO-8601 date string",
            "tasks": []
          }
        ]
      }
    ]
  }
  ```
- Expected endpoints:
  - `GET /programs/:programId/weeks`
  - `GET /programs/:programId/weeks/:weekId`
  - `GET /programs/:programId/weeks/:weekId/days`
  - `GET /programs/:programId/weeks/:weekId/days/:dayId`

### 9) Current user / auth session

Expected user model:
```json
{
  "id": "string",
  "email": "user@example.com",
  "name": "Full Name",
  "role": "member | trainer",
  "createdAt": "ISO-8601 date string"
}
```

Expected auth endpoints:
- `POST /auth/login`
- `POST /auth/register`
- `POST /auth/logout`
- `POST /auth/refresh`
- `GET /auth/me`

## Notes for implementation

- The current frontend does not yet depend on live program data; all routes are intentionally shell pages.
- The backend is expected to drive the real app state once the Laravel API is fully integrated.
- All route constants and API endpoint names are defined in `src/constants/index.ts` and should be treated as the canonical contract target for future backend work.
- Frontend pages should be kept aligned to the route structure represented by `ROUTES` and `API_ENDPOINTS` in that file.
