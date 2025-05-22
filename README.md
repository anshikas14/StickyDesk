# StickyDesk

StickyDesk is a React-based digital sticky notes application that allows users to create, edit, move, and delete notes in a flexible, interactive interface. The application uses Appwrite as its backend service for data storage and management.

## Overview

StickyDesk provides a virtual sticky note board where users can:

- Create new notes
- Edit note content
- Drag and reposition notes
- Change note colors
- Delete notes
- Auto-save content changes

## Technology Stack

- **Frontend**: React 19.0.0
- **Backend**: Appwrite 17.0.0
- **Build Tool**: Vite 6.1.0
- **Package Manager**: Yarn/NPM

## Project Structure

```
stickydesk/
├── public/              # Public assets
├── src/                 # Source files
│   ├── appwrite/        # Appwrite configuration and database functions
│   │   ├── config.js    # Appwrite client configuration
│   │   └── databases.js # Database CRUD operations
│   ├── assets/          # Static assets like images, JSON files
│   ├── components/      # Reusable UI components
│   │   ├── AddButton.jsx     # Component for adding new notes
│   │   ├── Color.jsx         # Color selection component
│   │   ├── Controls.jsx      # Control panel component
│   │   ├── DeleteButton.jsx  # Component for deleting notes
│   │   └── NoteCard.jsx      # Main note card component
│   ├── context/         # React context providers
│   │   └── NoteContext.jsx # Note state management
│   ├── icons/           # Icon components
│   ├── pages/           # Page components
│   │   └── NotesPage.jsx  # Main page displaying notes
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   ├── main.jsx         # Entry point
│   └── utils.js         # Utility functions
├── index.html           # HTML entry point
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
└── .gitignore           # Git ignore file
```

## Setup Instructions

### Prerequisites

- Node.js (latest LTS version recommended)
- An Appwrite account and project

### Environment Setup

Create a `.env` file in the root directory with the following variables:

```
VITE_ENDPOINT=your_appwrite_endpoint
VITE_PROJECT_ID=your_appwrite_project_id
VITE_DATABASE_ID=your_appwrite_database_id
VITE_COLLECTION_NOTES_ID=your_appwrite_collection_id
```

### Installation

1. Clone the repository

   ```
   git clone https://github.com/your-username/stickydesk.git
   cd stickydesk
   ```
2. Install dependencies

   ```
   npm install
   # or with yarn
   yarn
   ```
3. Start the development server

   ```
   npm run dev
   # or with yarn
   yarn dev
   ```
4. Build for production

   ```
   npm run build
   # or with yarn
   yarn build
   ```

## Appwrite Setup

1. Create an Appwrite project
2. Create a database
3. Create a collection called "notes" with the following schema:
   - `body` (String): The content of the note
   - `position` (String): JSON string of the x,y coordinates
   - `colors` (String): JSON string of color settings for the note

## Key Features and Implementation

### Note Management

The application uses React Context (`NoteContext.jsx`) to manage the state of notes across components. The context provides:

- List of notes
- Selected note
- Loading state

### Note Component

The `NoteCard.jsx` component handles:

- Displaying note content
- Dragging functionality
- Auto-growing textarea
- Auto-saving content changes
- Z-index management for overlapping notes

### Utility Functions

- `setNewOffset`: Calculates new position of dragged notes
- `autoGrow`: Automatically adjusts textarea height
- `setZIndex`: Manages stacking order of notes
- `bodyParser`: Handles parsing of note content

### Database Operations

Appwrite database operations are abstracted in `databases.js` which provides:

- `create`: Create new notes
- `update`: Update existing notes
- `delete`: Delete notes
- `get`: Retrieve a specific note
- `list`: List all notes
