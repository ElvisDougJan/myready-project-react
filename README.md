# MyReads Project 

### UDACITY React Developer

## Description

"MyReads" is a project where you should display all the books divided into stages, read, currently reading  and want to read, using custom components to display each one separately, and a second page to list books found through the search made by user, being able to add your home page in one of the three previously mentioned categories.

## Features

* List shelves categorized in main screen <br>
  
   - Current Reading <br>
   - Want To Read <br>
   - Read <br>

* Button to move the book from one bookcase to another

* Search page for most searched terms
   - Common Terms<br><br>
    ```bash
    'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat',
    'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket',
    'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education',
    'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer',
    'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make',
    'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production',
    'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh',
    'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
    ```
    
## Developer

### Structure

```
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── api/BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── components # Helpful images for your app. Use at your discretion.
    │   ├── Home.js # Is a default component to for manipulate yours childs components
    │   ├── ListBooksRading.js # Component for listem all books currently reading
    │   ├── ReadBooks.js # Component for listem all books already read
    │   ├── SearchBar.js # Parent component to display child component books via props
    │   ├── SearchBook.js # Component to list all the books found in the search
    ├── App.css # Global styles. You probably won't need to change anything here.
    └── my-css.js # Extra CSS created for new stylings
```

## Instructions to Run Application

### Install Dependencies

```bash
npm i or yarn
```

### Run application

- Development

```bash
npm run start or yarn start
```

- Access to development Application

```bash
http://localhost:3000
```

- Production

```bash
npm run build or yarn build
```

This folder .build has generated, here contain your production files, and you can upload to your server. 