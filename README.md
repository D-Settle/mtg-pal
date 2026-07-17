# MTG Commander Collection Manager

A full-stack web application for managing a personal Magic: The Gathering Commander collection.

Built using Express, EJS, MongoDB, and Mongoose, this application allows users to create, view, edit, and delete cards in their personal collection.

## Features

- Create new cards
- View all cards in the collection
- View detailed information for each card
- Edit existing cards
- Delete cards
- Store card images using image URLs
- Store Oracle text with proper formatting
- Parse and store card type information
- Responsive interface built with Bootstrap

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Bootstrap 5

## Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Install dependencies:

```bash
npm install
```

Start MongoDB locally.

Seed the database (optional):

```bash
node seeds/index.js
```

Run the application:

```bash
node app.js
```

or

```bash
nodemon app.js
```

Visit:

```
http://localhost:3000
```

## Project Structure

```
.
├── models/
├── views/
├── public/
├── seeds/
├── app.js
└── README.md
```

## Future Improvements

- Search by card name
- Filter by color identity
- Filter by card type
- Scryfall API integration
- Deck builder
- User authentication
- Personal user collections

## Author

Your Name