# MTG Commander Collection Manager

A full-stack web application for managing a personal Magic: The Gathering collection.

Built using **Node.js**, **Express**, **EJS**, **MongoDB**, **Mongoose**, **Bootstrap**, and the **Scryfall API**, this application allows users to quickly import cards from the official Scryfall database, manage their personal collection, and track owned quantities.

---

## Features

### Collection Management

- Create new cards
- View all cards in the collection
- View detailed information for each card
- Edit existing cards
- Delete cards
- Track owned card quantities
- Update quantities directly from the collection page

### Scryfall API Integration

- Live autocomplete while typing card names
- Automatically imports:
  - Card name
  - Mana cost
  - Type line
  - Oracle text
  - Rarity
  - Card image
- Eliminates manual data entry for most card information

### Data Validation

- Required field validation
- Rarity validation using Mongoose enums
- Quantity validation
  - Minimum quantity of 1
  - Whole numbers only
- Invalid card ID detection
- Missing card detection
- Centralized Express error handling

### User Interface

- Responsive Bootstrap interface
- Dark theme
- Hover-based quantity editing on the collection page
- Auto-filled Add Card form using Scryfall

---

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend

- EJS
- Bootstrap 5
- JavaScript
- Fetch API

### APIs

- Scryfall REST API

---

## Installation

Clone the repository:

```bash
git clone https://github.com/D-Settle/mtg-pal.git
```

Install dependencies:

```bash
npm install
```

Start MongoDB locally.

(Optional) Seed the database with sample cards:

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

---

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

---

## Current Functionality

- ✅ Full CRUD operations
- ✅ RESTful routing
- ✅ MongoDB persistence
- ✅ Quantity tracking
- ✅ Live Scryfall autocomplete
- ✅ Automatic card importing
- ✅ Server-side validation
- ✅ Centralized error handling

---

## Future Improvements

- Commander deck builder
- Commander color identity validation
- 100-card deck validation
- Multiple print selection
- Collection search
- Filtering and sorting
- User authentication
- Individual user collections
- Collection statistics
- Wishlist support
- Deploy application

---

## Challenges

Some of the more interesting problems solved during development include:

- Integrating the Scryfall API to automatically populate card information.
- Parsing Magic type lines into supertypes, card types, and subtypes for easier storage and editing.
- Implementing reusable async middleware and centralized Express error handling.
- Designing a schema that validates user input while remaining flexible enough for future deck-building features.

---

## Author

**Dan Settle**

Built as a portfolio project while learning full-stack web development with Node.js, Express, MongoDB, and REST API integration.