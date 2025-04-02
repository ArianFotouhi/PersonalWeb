# 🌐 Personal Portfolio - Arian Fotouhi

A personal portfolio website built with **Angular 15**, designed to showcase projects, certifications, and skills. Deployed using **GitHub Pages**.

---

## 🚀 Quick Start

### 🔧 Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Angular CLI](https://angular.io/cli) installed globally:

```bash
npm install -g @angular/cli
🛠️ Local Development
Start a local development server:

bash
Copy
Edit
npm install
ng serve
Then visit: http://localhost:4200

✅ The app auto-reloads when you save changes.

⚙️ Building the App
To build the project for production:

bash
Copy
Edit
ng build --base-href "https://arianfotouhi.github.io/PersonalWeb/"
This creates a dist/ folder with deployable files.

🚢 Deploying to GitHub Pages
Make sure the angular.json is configured correctly with:

json
Copy
Edit
"outputPath": "dist/your-project-name",
Then deploy with Angular CLI:

bash
Copy
Edit
ng deploy --base-href=/PersonalWeb/
Or manually:

bash
Copy
Edit
npx angular-cli-ghpages --dir=dist/your-project-name
💡 Your site will be live at: https://arianfotouhi.github.io/PersonalWeb/

🧪 Testing
Run unit tests:

bash
Copy
Edit
ng test
🧩 Making Feature Changes
Here are some tips if you're modifying or adding to the portfolio:

➕ Add New Project or Certificate
Add the image to:

bash
Copy
Edit
src/assets/projects/
or
src/assets/certificate/
Update the respective HTML section with:

html
Copy
Edit
<img src="https://arianfotouhi.github.io/PersonalWeb/assets/projects/new-project.jpg" />
🎨 Style or Content Edits
Modify components in src/app/

Global styles: src/styles.css

Meta tags / page title: src/index.html

🔧 Generate New Angular Features
bash
Copy
Edit
ng generate component new-section
ng generate service api
🗂 Project Structure
bash
Copy
Edit
src/
├── app/                  # Angular components
├── assets/
│   ├── certificate/      # Certificates shown in gallery
│   └── projects/         # Project thumbnails
├── environments/
├── index.html
├── styles.css
🙌 Contributions
Pull requests are welcome if you'd like to improve or suggest features.

📄 License
This project is open-sourced under the MIT License.

✨ Author
Arian Fotouhi

GitHub

vbnet
Copy
Edit

Let me know if you want a version with badges, GitHub Actions CI/CD, or links to demo videos!