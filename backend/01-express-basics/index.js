// to use import syntax instead of the old const express = require("express"); you need to go to package.json file and instead of "type": "commonjs", replace it with "type": "module", otherwise it throws error

// Open your package.json file and change this line:
// "type": "commonjs"
// to
// "type": "module"

// If you don't change it → you will get a big error when using import

// What is the difference?
// "commonjs"        → old style, loads files one by one (synchronous)
// "module" (ESM)    → modern style, can load things smarter & faster (asynchronous friendly)
import express from "express";

// Define port in env and if in env not present it will take 4000 by default as you have assigned but in production it only can take with environment variable otherwise app will crash
const PORT = process.env.PORT || 4000;

// Create our mini web server using express
const app = express();

// When someone opens the main page (home page) → "/"
// generally we give a path which is this "/" here and a callback function in which two args which are request and response , for geting request and sending response to server respectively
// app.get("/", (req, res) => {
//   // We send back this message to the browser
//   res.send(
//     `<h1 style="text-align: center; color: green;">server is ready!</h1>`,
//   );
// });

app.get("/login", (req, res) => {
  res.send("Hello! Please login");
});

// get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "My mom laughed at me when I said I was going to build a car out of spaghetti.",
      author: "CurrentlyCurious",
    },
    {
      id: 2,
      joke: "No one should have been surprised by the rise of the USSR after World War II.",
      author: "Waltzer64",
    },
    {
      id: 3,
      joke: "Photographers are so violent.",
      author: "bean9914",
    },
    {
      id: 4,
      joke: "John Cena woke up from a coma",
      author: "B4ItSkl8s",
    },
    {
      id: 5,
      joke: "BREAKING NEWS: A man who took an Airline company to court after his luggage went missing has lost his case.",
      author: "Linalg2",
    },
  ];
  res.send(jokes);
});

// your app is listening on port here two args we need to provide port and a callback and log the value to get informed that it's working
app.listen(PORT, () => {
  // This message appears in your terminal so you know it's working
  console.log(`app is listening on http://localhost:${PORT}`);
});
