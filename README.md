# Student Management System

An Angular 16 project built for the ITI assignment to practice core Angular concepts through a simple student management application.

## Project Overview

This application allows users to:

- View all students in a table
- Add a new student using a form
- Delete a student from the list
- Open a student details page

The project demonstrates the Angular features required in the assignment, including routing, services, `BehaviorSubject`, `Observable`, async pipe, `@Input`, `@Output`, structural directives, and template binding.

## Built With

- Angular 16
- TypeScript
- RxJS
- Bootstrap 5

## Application Routes

- `/home` - Welcome page
- `/students` - Students table
- `/add-student` - Add student form
- `/student/:id` - Student details page

## Main Features

- Shared student data managed through `StudentsService`
- Student list updates automatically after adding or deleting a record
- Parent-child communication between `StudentsComponent` and `StudentTableComponent`
- Template-driven form using `FormsModule`
- Responsive UI with Bootstrap and custom styling

## Project Structure

```text
src/app
|-- features
|   |-- home
|   |-- notfound
|   |-- students
|       |-- add-student
|       |-- student-details
|       |-- student-table
|       |-- students
|-- models
|   |-- student.model.ts
|-- services
|   |-- students.service.ts
|-- shared
|   |-- components
|       |-- navbar
```

## Angular Concepts Used

- Interpolation
- Property binding
- Event binding
- `*ngFor`
- `*ngIf`
- Angular routing
- Services
- `BehaviorSubject`
- `Observable`
- Async pipe
- `@Input`
- `@Output`

## How To Run

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open the browser at:

```text
http://localhost:4200/
```

## Deployment to GitHub Pages

### Prerequisites

- A GitHub account
- Git installed on your machine
- The project initialized as a Git repository

### Setup Instructions

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository named `student-management`
   - Do not initialize with README (we already have one)

2. **Install Dependencies** (if not already done):

```bash
npm install
```

3. **Deploy to GitHub Pages**

Run the deployment command:

```bash
npm run deploy
```

This command will:

- Build the project in production mode
- Deploy the dist folder to the `gh-pages` branch

4. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to "Pages" section
   - Select `gh-pages` branch as the source
   - Save

5. **Access Your App**
   - Your app will be available at: `https://yourusername.github.io/student-management/`

### First-Time Setup with GitHub

If this is your first time pushing to GitHub:

```bash
git init
git add .
git commit -m "Initial commit: Student Management System"
git branch -M main
git remote add origin https://github.com/yourusername/student-management.git
git push -u origin main
npm run deploy
```

### Subsequent Deployments

After the initial setup, any future deployments just require:

```bash
npm run deploy
```

## Useful Commands

Run the development server:

```bash
npm start
```

Build the project:

```bash
npm run build
```

Run tests:

```bash
npm test
```

## Verification Notes

- TypeScript app compilation was checked with `tsconfig.app.json`
- Spec compilation was checked with `tsconfig.spec.json`
- On this machine, `ng build` reached bundle generation and then failed with a local Windows `spawn EPERM` environment error, which appears environment-related rather than a source-code issue

## Sample Student Fields

Each student record includes:

- `id`
- `firstName`
- `lastName`
- `age`
- `gender`
- `email`
- `phone`
- `address`
- `city`
- `country`
- `department`
- `level`
- `GPA`
- `enrollmentDate`
- `isActive`

## Author

Prepared as part of the Angular Student Management assignment.
