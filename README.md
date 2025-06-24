<h2 align="center">
  Welcome to PlacePicker<br/>
  <a href="https://place-picker-gilt.vercel.app/" target="_blank">Live Demo</a> |
  <a href="https://github.com/TihomirDenev/PlacePicker" target="_blank">GitHub Repo</a>
</h2>
<div align="center">
  <img src="public/logo.png" alt="Place Picker" style="height: 160px;" />
</div>

---

# 📝 Description

**PlacePicker** is a dynamic web app that lets users browse, select, and manage their favorite places. The app features a responsive UI, real-time updates, and robust error handling.  
**Live Demo:** [https://place-picker-gilt.vercel.app/](https://place-picker-gilt.vercel.app/)

- Built with Angular for the frontend and Vercel serverless functions for the backend.
- All data (places, user favorites) is managed via API endpoints.
- Error handling is user-friendly, with modal dialogs for any issues.

---

# 🗃️ Technologies Used

- **Frontend:** Angular, TypeScript, HTML, CSS
- **Backend:** Vercel Serverless Functions (Node.js)
- **UI Enhancements:** Custom CSS, Angular signals, modal dialogs
- **Hosting:** [Vercel](https://vercel.com/)

---

# 💡 Features

- Interactive list of beautiful places
- Add/remove favorites with instant feedback
- Responsive design for all devices
- Modal-based error handling for a smooth user experience

---

# 🚀 Getting Started (Local Development)

1. **Clone the repository:**

   ```bash
   git clone https://github.com/TihomirDenev/PlacePicker.git
   cd PlacePicker
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run locally with Vercel (recommended):**

   - Install Vercel CLI if you haven't:
     ```bash
     npm install -g vercel
     ```
   - Start the local dev server:
     ```bash
     vercel dev
     ```
   - Open the provided URL (usually http://localhost:3000).

4. **(Optional) Run Angular and backend separately (not recommended):**
   - Start backend: `cd backend && npm install && npm start`
   - Start frontend: `cd .. && ng serve`
   - Update API URLs in the frontend if needed.

---

# ⚠️ Notes on Persistence

- On Vercel, data changes (add/remove favorites) are not persistent and reset periodically. For production, connect to a real database.

---

# ✨ Contributing

Contributions are welcome! Please open an issue or submit a pull request.

---

# 📇 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
