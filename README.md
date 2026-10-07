Workout Tracker – Your Complete Training Companion

Workout Tracker is a fitness tracking application built using React and Capacitor. It is designed to help users manage their daily workouts, keep track of nutrition, and monitor their training progress over time.

The application works on both web and Android and stores user data locally, so there is no need to create an account or use a backend server.

Website: https://fitnesstracker-flame.vercel.app

Features
Workout Tracking

The application provides a 6-day workout program from Monday to Saturday, with rest days included in the schedule.

Users can:

View the workout planned for each day.

Track exercises, sets, repetitions, and rest periods.

Use a rest timer between sets.

Mark individual sets as completed.

View exercise details, coaching tips, and form guidance.

See their workout completion progress.

Nutrition

The app also includes a basic nutrition guide. It provides pre-planned meal recommendations along with information about daily macros and healthy eating habits.

The nutrition section is intended to help users follow their workout plan along with a suitable diet.

Progress Tracking

The progress section allows users to see their training history and consistency.

It includes:

Workout attendance calendar.

Weekly, monthly, and yearly statistics.

Current workout streak.

Workout completion percentage.

Charts for viewing progress over time.

Charts and visualizations are created using Recharts.

Other Features

Some additional features of the application include:

No login or authentication required.

Data is stored locally on the device.

Works without a backend.

Offline-first functionality.

Responsive design for mobile and desktop.

Dark theme.

Newspaper-inspired user interface.

Local data persistence.

Technologies Used
Frontend

React 18.3+

Vite 5.3+

Capacitor 8.3+

React is used for building the user interface, while Vite is used as the development server and build tool. Capacitor is used to package the application for Android.

Styling

The application uses regular CSS with CSS variables for colors and other design settings.

The layout is designed using a mobile-first responsive approach so that it can work on different screen sizes.

Charts

Recharts is used to display the progress charts and other graphical information.

Storage

The application uses the browser's LocalStorage API to save workout information.

There is currently no backend database. All information remains on the user's device.

Deployment

The web version is deployed using Vercel.

An Android version can also be built as an APK using Capacitor and the Android project included in the repository.

Platform Support

The application currently supports:

Web browsers such as Chrome, Firefox, Safari, and Edge.

Android devices running Android 5.0 or later.

Getting Started
Requirements

Before running the project, make sure the following are installed:

Node.js 16 or later

npm or yarn

JDK 11 or later for Android development

Android Studio if you want to work directly with the Android project

Installation

First, clone the repository:

git clone https://github.com/ruthwik11/FitnessTracker.git
cd FitnessTracker


Install the project dependencies:

npm install


Start the development server:

npm run dev


The application will normally be available at:

http://localhost:3000

Building the Web Version

To create a production build, run:

npm run build


The generated production files will be placed in the dist folder.

You can also preview the production build locally using:

npm run preview

Project Structure

The main project structure is organized as follows:

FitnessTracker/
├── src/
│   ├── components/
│   │   ├── Workout.jsx
│   │   ├── Progress.jsx
│   │   ├── NutritionPage.jsx
│   │   ├── Timer.jsx
│   │   ├── Checklist.jsx
│   │   ├── AttendanceCalendar.jsx
│   │   ├── ExerciseDetail.jsx
│   │   └── ui/
│   │       ├── OrnamentDivider.jsx
│   │       └── EditionBadge.jsx
│   │
│   ├── data/
│   │   └── workoutData.js
│   │
│   ├── utils/
│   │   └── storage.js
│   │
│   ├── main.jsx
│   └── style.css
│
├── android/
│   ├── app/
│   ├── gradle/
│   └── build.gradle
│
├── index.html
├── package.json
├── vite.config.js
├── capacitor.config.json
└── README.md


The components folder contains the main React components used by the application.

The workout program and nutrition information are stored in src/data/workoutData.js.

The LocalStorage-related functions are handled inside src/utils/storage.js.

The android folder contains the Android project generated and managed through Capacitor.

How Data Is Stored

The application does not use a server or database for storing workout information.

Instead, workout data is saved in the browser's LocalStorage.

This means that:

Data remains available between sessions.

No workout information is sent to a server.

Each device has its own separate data.

Clearing the browser data can remove the saved workouts.

Workout information is stored using a date-based key such as:

workout_YYYY-MM-DD


A typical stored workout object looks like this:

{
  date: "YYYY-MM-DD",
  day: "MONDAY",
  exercises: [
    {
      id: "exercise_1",
      name: "Barbell Bench Press",
      sets: 4,
      reps: "6-8",
      completedSets: 3
    }
  ],
  completed: false,
  stepsCompleted: false,
  timestamp: "ISO timestamp"
}

Storage Functions

The storage utilities are located in:

src/utils/storage.js


Some of the main functions include:

saveWorkoutProgress() – saves the current workout progress.

loadWorkoutProgress() – loads previously saved workout data.

getMonthlyAttendance() – calculates monthly workout statistics.

getCurrentStreak() – calculates the current training streak.

clearAllData() – removes all saved workout data.

Backing Up Data

Since the application uses LocalStorage, users can manually export their workout data from the browser console.

For example:

const allData = {};

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);

  if (key.startsWith('workout_')) {
    allData[key] = localStorage.getItem(key);
  }
}

console.log(JSON.stringify(allData));


The output can then be saved somewhere as a backup.

Customizing the Workout Program

The training program can be changed by editing:

src/data/workoutData.js


For example:

export const workoutData = {
  MONDAY: {
    day: 'MONDAY',
    color: '#FF6B6B',
    focus: 'Chest & Triceps',
    exercises: [
      {
        id: 'exercise_1',
        name: 'Barbell Bench Press',
        sets: 4,
        reps: '6-8',
        rest: 180
      }
    ]
  }
};


Other workout days can be modified in the same file.

The nutrition plan is also stored in workoutData.js and can be changed there.

Customizing the Design

Most of the visual styling is handled in:

src/style.css


Colors can be changed through the CSS variables.

The layout and individual components can be modified by editing the corresponding JSX files inside the src/components folder.

The overall theme can also be changed by modifying the colors and other styles in style.css.

Available Commands
Development
npm run dev


Starts the development server.

Production Build
npm run build


Creates the production version of the web application.

Preview
npm run preview


Runs the production build locally for testing.

Android
npm run android:build


Builds the web application and syncs it with the Android project.

npm run android:open


Opens the Android project in Android Studio.

Linting
npm run lint


Runs ESLint to check the source code.

Android Development

The project includes an Android application inside the android directory.

Capacitor is used to connect the React application with the Android platform.

After making changes to the web application, the Android project can be updated using the Android build command.

Android Studio can then be used to build and test the application on an emulator or physical device.

Deployment

The web application can be deployed to Vercel.

One way to deploy it is by installing the Vercel CLI:

npm i -g vercel


Then run:

vercel


The project can also be connected to a Git repository and deployed automatically through Vercel.

Privacy and Security

The application is designed to keep user workout data on the device.

There is no user authentication system and no backend database.

The application does not send workout information to a remote server and does not currently include tracking or analytics.

There are some limitations because the data is stored locally. For example, clearing browser storage can remove the saved workout history, and data does not automatically synchronize between different devices.

Troubleshooting
Workout data is not being saved

If workout information is not being saved, check that LocalStorage is enabled in the browser.

You can also open the browser developer console and check for JavaScript errors.

If necessary, clear the browser cache and try again.

Port 3000 is already being used

If another application is already using port 3000, the Vite configuration can be changed.

Open vite.config.js and change the port:

server: {
  port: 3001
}


After changing the port, restart the development server.

Contributing

Contributions are welcome.

Developers can contribute by:

Reporting bugs.

Suggesting new features.

Improving the existing UI.

Submitting pull requests.

Improving documentation.

Fixing issues in the code.

Project Goals

The main goal of Workout Tracker is to provide a simple and distraction-free way to stay consistent with training.

The application was designed around a few main ideas:

Help users maintain consistency with their workouts.

Make workout tracking quick and simple.

Allow users to track progress without creating an account.

Keep the application usable without a backend.

Store information locally on the user's device.

Provide a clean and visually different interface.

License

This project is open source and intended for personal and educational use.

Support

If you find a problem with the application or have a question about the project, you can open an issue in the GitHub repository or review the existing documentation and source code.

Built with ❤️ by Surya
