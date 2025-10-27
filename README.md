# Gameloft Project

## Project description

This project contains three parts that demonstrate different approaches to creating web applications to display a game catalog.

## Project structure

```
gameloft/
├── Part_1/          # The first part of the project (HTML/CSS)
├── Part_2/          # The second part of the project (CSS/JS)
├── Part_3/          # The third part of the project (React + TypeScript)
├── Questions/       # Questions and answers
└── README.md        
```

---

## Part_1

The first part of the project with basic implementation (HTML/CSS).

---

## Part_2

### Description
The second part of the project is a static website using pure CSS and JavaScript.

### Structure Part_2
```
Part_2/
├── css/                   # Styles
│   └── style.css          # Basic application styles
└── js/                    # JavaScript files
    ├── modal.js           # Modal window module
    └── finalePrice.js     # Calculation of the final price with discounts
```

### Main files Part_2

#### `index.html`
Home page with product catalog markup.

#### `css/style.css`
Contains all styles for:
- General page layout
- Product cards
- Modal window
- Responsive design

#### `js/modal.js`
Modal window functionality:
- Opening the image in full size when clicked
- Closing the modal window with a button or by clicking outside the image
- Handling events for all images on the page

#### `js/finalePrice.js`
Price calculation logic:
- Array of products with name, price and quantity
- `finalePrice()` function to calculate the total cost
- Automatic application of 10% discount for products with quantity more than 5 units

---

## Part_3

### Description
The third part of the project is a modern web application on React with TypeScript, Vite, and TailwindCSS.

### Technologies
- **React 18** - library for creating interfaces
- **TypeScript** - code typing
- **Vite** - build tool
- **TailwindCSS** - CSS framework for styling
- 
### Structure Part_3
```
Part_3/
├── public/                   # Static files
├── src/                      # Source code
│ │ ├── components/           # React components
│ │ ├── Carousel/             # Carousel component
│ │ ├── ProductCard/          # Product card component
│ │ ├── ImageModal/           # Modal window component
│ │ └── ScrollButton/         # Scroll button component
│ ├── constants/              # Constants
│ │ └── products.ts           # Product data
│ ├── types/                  # TypeScript types
│ │ ├── productTypes.ts       # Product type
│ │ └── selectedImageTypes.ts # Selected image type
│ ├── App.tsx                 # Main component
│ ├── App.css                 # App styles
│ └── main.tsx                # Entry point
├── index.html                # HTML template
├── package.json              # Project dependencies
├── vite.config.ts            # Vite configuration
└── tsconfig.json             # TypeScript configuration
```
