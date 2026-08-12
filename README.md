# MTG Commander Collection Manager

A full-stack web application for managing a personal Magic: The Gathering card collection.

Built using **Node.js**, **Express**, **EJS**, **MongoDB**, **Mongoose**, **Bootstrap**, and the **Scryfall API**, this application allows users to search for Magic cards, select specific printings and finishes, add them to a personal collection, and manage their collection through an interactive interface.

---

## Features

### Collection Management

- Add cards to the collection
- View all cards in the collection
- View detailed card information
- Edit existing collection entries
- Delete cards
- Track owned card quantities
- Update quantities without reloading the page
- Automatically merge duplicate entries when the same printing and finish are selected

### Scryfall API Integration

- Live autocomplete while typing card names
- Select from available printings of a card
- Select available finishes for each printing
- Automatically imports:
  - Card name
  - Mana cost
  - Type line
  - Supertypes
  - Card types
  - Subtypes
  - Oracle text
  - Colors
  - Color identity
  - Rarity
  - Set name and set code
  - Collector number
  - Card image
  - Format legalities
- Stores Scryfall and Oracle IDs for card identification

### Printing and Finish Management

- Track specific card printings
- Track set and collector number
- Track foil and nonfoil finishes
- Change printing or finish from the Edit Card modal
- Dynamically preview a selected printing before saving
- Merge quantities when an edit would create a duplicate printing and finish combination

### Search, Filtering, and Sorting

- Search the collection by card name
- Filter cards by card type
- Filter by rarity
- Filter by finish
- Filter by color
- Sort collection results
- Dynamically update the displayed collection

### Card Details

- View card information in a dedicated modal
- Display graphical mana symbols
- View Oracle text with inline mana symbols
- View card type information
- View the specific set and collector number
- View and update quantity owned
- View format legalities
- View when a collection entry was last updated
- Edit or delete cards directly from the Card Details modal

### Format Legalities

Format legality information is retrieved from Scryfall and stored with each card.

The application currently displays legality information for:

- Commander
- Standard
- Pioneer
- Modern
- Legacy
- Vintage
- Pauper

This information will also support Commander deck validation in future versions of the application.

### Data Validation and Error Handling

- Required field validation
- Rarity validation using Mongoose enums
- Quantity validation
  - Minimum quantity of 1
  - Whole numbers only
- Invalid card ID detection
- Missing card detection
- Scryfall API error handling
- Centralized Express error handling
- Asynchronous route error handling

### User Interface

- Responsive Bootstrap 5 interface
- Dark theme
- Modal-based Add Card interface
- Modal-based Card Details interface
- Modal-based editing
- Live card previews
- Custom mana-symbol rendering
- Hover-based quantity controls
- Dynamic updates using the Fetch API

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

### API

- Scryfall REST API

---

## Installation

Clone the repository:

```bash
git clone https://github.com/D-Settle/mtg-pal.git
```

Move into the project directory:

```bash
cd mtg-pal
```

Install dependencies:

```bash
npm install
```

Start MongoDB locally.

Optionally seed the database with sample cards:

```bash
node seeds/index.js
```

Run the application:

```bash
node app.js
```

Or with Nodemon:

```bash
nodemon app.js
```

Visit:

```text
http://localhost:3000
```

---

## Project Structure

```text
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
- ✅ Live Scryfall autocomplete
- ✅ Automatic card importing
- ✅ Multiple printing selection
- ✅ Foil and nonfoil finish tracking
- ✅ Quantity tracking
- ✅ Duplicate collection entry merging
- ✅ Modal-based card creation and editing
- ✅ Card Details modal
- ✅ Mana-symbol rendering
- ✅ Collection search
- ✅ Collection filtering
- ✅ Collection sorting
- ✅ Format legality tracking
- ✅ Server-side validation
- ✅ Centralized error handling
- ✅ Dynamic client-side updates

---

## Future Improvements

- Commander deck builder
- Commander selection and validation
- Commander color identity validation
- Commander legality validation
- 100-card deck validation
- Card-count validation
- User authentication
- Individual user collections
- Individual user decks
- Collection statistics
- Wishlist support
- React frontend
- Deployment

---

## Challenges

Some of the more interesting problems solved during development include:

- Integrating the Scryfall API to automatically retrieve card information while minimizing manual data entry.
- Supporting multiple physical printings and finishes of the same Magic card.
- Updating card previews dynamically when users select different printings.
- Preventing duplicate collection entries by merging quantities for matching printing and finish combinations.
- Parsing Magic type lines into supertypes, card types, and subtypes for structured storage.
- Storing color identity and format legality information for future Commander deck validation.
- Rendering Scryfall mana notation as graphical mana symbols throughout the interface.
- Updating collection data dynamically without requiring full page reloads.
- Implementing Mongoose validation and centralized Express error handling.

---

## Author

**Dan Settle**

Built as a portfolio project while learning and applying full-stack web development with Node.js, Express, MongoDB, Mongoose, JavaScript, Bootstrap, and REST API integration.