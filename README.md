# React Native To-Do List App (Expo + Expo Router)

This is a simple React Native To-Do List app built using **Expo** and **Expo Router** for navigation. The app allows users to **add**, **delete**, and **update** tasks efficiently.

## Features

-   Add new To-Do items
-   Update existing To-Do items
-   Delete To-Do items
-   Navigation using **Expo Router**

## Installation

### Prerequisites

Make sure you have **Node.js** and **Expo CLI** installed.

```sh
npm install -g expo-cli
```

### Clone the Repository

```sh
git clone https://github.com/sourin8590/React-Native-Todo-app.git
cd React-Native-Todo-app
```

### Install Dependencies

```sh
npm install
```

### Start the App

```sh
npx expo start
```

## Project Structure

```

.
├── src/
│   ├── app/
│   │   ├── _layout.js      # Navigation Layout
│   │   ├── addtodo.js      # Add To-Do Screen
│   │   ├── home.js         # Home Screen
│   │   ├── index.js        # Index Screen
│   ├── assets/
│   │   ├── fonts/          # Fonts Directory
│   │   ├── images/         # Images Directory
│   ├── components/
│   │   ├── AddButton.js    # Button Component for Adding To-Dos
│   │   ├── CustomButton.js # Custom Button Component
│   │   ├── CustomHeader.js # Custom Header Component
│   │   ├── TodoItem.js     # Individual To-Do Component
│   ├── redux/
│   │   ├── reducers/
│   │   ├── rootReducer.js  # Root Reducer
│   │   ├── store.js        # Redux Store
│   ├── utils/
│   │   ├── Constants.js    # Constants File
│   │   ├── Helpers.js      # Helper Functions
│   ├── .gitignore          # Git Ignore File
├── App.js                  # Main Entry File
├── package.json            # Package Configuration
├── README.md               # Project Documentation
```



## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
