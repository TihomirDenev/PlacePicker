<h2 align="center">
  Welcome to the PlacePicker<br/>
  <a href="https://github.com/TihomirDenev/PlacePicker" target="_blank">Check it out on GitHub</a>
</h2>
<div align="center">
  <img src="public/logo.png" alt="Place Picker" style="height: 160px;" />
</div>


# 📝 Description
- Place Picker is a dynamic web application that enables users to interactively select and manage their favorite places from a list. The application features a user-friendly interface where places are displayed, and users can click to add them to their favorites. This action triggers a backend service that processes the addition and updates the user's favorite list in real-time. Conversely, users can also remove places from their favorites, which updates both the frontend display and the backend data store accordingly.

- The application is built using Angular, providing a robust and responsive client-side experience. It interacts with a backend service built on Node.js, which handles all data management tasks, including storing, retrieving, and updating places in a database. This ensures that user preferences are persisted across sessions and that data consistency is maintained.

- Furthermore, the Place Picker includes an advanced error handling mechanism. When the application encounters a data transmission error or a failure in API responses, it triggers a modal dialog via an error service. This modal provides users with a friendly notification about the issue and potential steps to resolve it, enhancing the overall user experience by managing expectations and maintaining interaction continuity.

# 🗃️ Technologies Used

- **_Frontend:_** JavaScript, Angular, TypeScript, HTML, CSS
- **_Backend:_** Node.js
- **_UI Enhancements:_** CSS for styling, Angular Material for modal implementation
- **_Error Handling:_** Custom error service with modal alerts for user-friendly error messages

# 💡 Features

- **_Interactive list_** of places with the option to add or remove favorites
- **_Real-time updates_** of user preferences using Angular’s efficient data binding and state management
- **_Error handling_** with a modal popup to ensure users are informed of any issues during their session
- **_Responsive Design:_** Works seamlessly across various devices and screen sizes.

# ✅ Getting Started

1. Clone the Place Picker [GitHub repository](https://github.com/TihomirDenev/PlacePicker) locally:

```bash
https://github.com/TihomirDenev/PlacePicker.git
```

2. Navigate to the project directory:

```bash
cd PlacePicker
```

3. Install Dependencies Before running the project.

```bash
npm install
```

4. Start the Backend Service - Navigate to the Backend folder within the project directory:

```bash
cd backend
```

5. Start the backend service by running:

```bash
npm run start
```

6. Start the Frontend Application
- Open a new terminal window or tab, and navigate back to the root directory of the Place Picker project if you are not already there.

```bash
npm run start
```

# ✨ Contributing

- I welcome contributions to the Place Picker project! If you have suggestions, feel free to open an issue or submit a pull request.

# 📇 License

- This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
