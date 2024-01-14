# Volk Task Tracker

## Description

Volk Task Tracker is an intuitive and efficient task management application designed to help users organize and track their tasks. Utilizing a PostgreSQL database, it allows users to input tasks and store important task-related information. The application's user-friendly interface and robust backend ensure a seamless task management experience.

### Features

- **Task Management**: Users can input tasks with details such as:
  - Task Name
  - Due Date
  - Priority Level
  - Task Group (for grouping similar tasks)
- **Unique Task IDs**: Each task is automatically assigned a unique ID for easy tracking.
- **Prioritization and Organization**: Tasks can be prioritized and organized into different groups.

### Technical Overview

1. **Database Setup (PostgreSQL)**

   - Install PostgreSQL.
   - Create a new database for the application.
   - Design and create tables for task management.
   - Implement security measures for database access.

2. **Backend Setup (Node.js & Express)**

   - Initialize a Node.js project with necessary dependencies.
   - Set up an Express server to handle API requests.
   - Implement CRUD operations for task management.
   - Ensure error handling and logging.

3. **Frontend Setup (React, HTML, CSS)**

   - Create a React app for the user interface.
   - Develop components for task display and manipulation. These components will consist of:
     - App Compnent: Top level component which will manage global state, theme, and current view
     - Navbar component - Side navbar with buttons to trigger different views/actions
     - Task List Component - Each task will be a task card
     - Task Card Component - Represent each individual task with pertinent data as well as an option to edit, delete, or complete the task
     - TaskForm Component - a form to create or edit tasks
     - Dark/Light Component - a toggle componenet to switch themes
   - Implement state management for a responsive UI.
   - Style the application for a user-friendly experience.
   - Connect frontend to backend using `axios`.

4. **Testing**

   - Conduct unit tests for backend and frontend components.
   - Perform integration testing to ensure system cohesiveness.

5. **Deployment**

   - Optimize the application for production.
   - Select and utilize hosting services for both frontend and backend.
   - Deploy the application ensuring environment configurations are set.

6. **Maintenance and Updates**
   - Regularly monitor, update, and maintain the application.
   - Continuously improve features based on user feedback.

### Contributing

Guidelines for how to contribute to the project.

### License

N/A

### Contact

Ryan Barfield

Message me on Github or LinkedIn

### Acknowledgements

@Prime Digital Academy for the opportunity

---

This project is more than just a task tracker; it's a solution designed to enhance productivity and organizational efficiency.
