# 4A00EZ62 Backend-kehitys

## Backend Development - Final Project

## Topic

### General Project

Most of us want to know where our money goes. You now have the chance to create a solution to that question. Create an application for tracking your personal expenses.

**OR**

### Fantasy Project

Like fantasy pizza, you can decide your own final project concept.
The idea must be approved by the teacher (DM the idea in ::slack:Slack).

### BACKEND DEVELOPMENT - FINAL PROJECT !

### BACKEND SERVER ADDRESS: https://sleepyhead-api.onrender.com/api/sleepyhead

- This project used to monitor sleep schedules for babies. You can enter dates, when the sleep starts and when it ends and then you can also
  mark the amount of sleep.

### WHY?

- This project exists mainly for educational purposes, but also for me and my girlfriend to test the app and schedule our babys sleep.

### TECH/FRAMEWORD USED

- Built with: Javascript, NodeJs, Express, Mysql, ENV.

### INSTALLATION

- If you clone this project to your computer you can enter ´npm install´ to install all of the necessary modules.

### TESTS

- Tests implemented for this project are: GET every entry, also with JSON format and GET entry by id.
- You can run the implemented tests using ´npm run test´in the terminal.

### HOW TO USE

- First git clone the project to your desired location on your computer and then you can open it using a code editor. (I used VS Code)
- Use npm install to install all the necessary modules used to run the project.
- To connect to the server use ´node index.js´command on your terminal to start "listening" the server.
- Open the ´localhost.rest´ file and you can see your options, which are:

  - GET ( This allows you to see all of your entries ).

  - GET by id ( You can find a specific entry using the id of it. Change the id number which is located last on the row.)

  - POST ( You can enter a new entry using POST. Just fill in the correct entries below and then "send the request".)

  - PUT ( You can update/change an entry already in the database. First select the id of an entry which you want to update and then fill in the correct entries below and "send the request".)

  - DELETE ( You can delete an entry by id. Use the same way as you would use "GET by id".)

  - You can also add entries using only SQL:
    INSERT INTO `sleepyhead` (`month`,`start`,`end`,`amount` ) VALUES ('2023-01-13',18.50,06.45,11.55); for example.

  ### SELF EVALUATION

  - I assume you can use numbers between the criteria ratings so I adjusted my own ratings with that.

  - Solution desing: I am sort of pleased with this project. There are obvious flaws for example you can only use id to GET, but all in all everything works ok at the moment. I had plans that the "amount of sleep" would have been somehow auto_incremented,
    but thats is also something I did not manage. The idea would have that it would have calculated the amount of sleep automatically based on "sleep start" and "sleep end".
    I would rate this maybe a 12.

  - Execution: I liked the approach on this project. If you had been paying attention during classes and doing home exercises you already had a great start to this project. I used my homework and also the course material to implement this project somewhat succesfully. I spent a lot of time with the problems I had and my goal was to only get the backend stuff to work. Frontend would have been a nice addition but the backend took a lot more time that I had in mind. So execution wise this project is lacking some core elements.
    I would rate this maybe 23-25. The backend is is deployed, reachable and always responds to API requests.

  - Requirements satisfaction: I am nevertheless satisfied with my project work. I could not get the ´get by category´to work and also some tests did not work. I don´t know why but the tests for PUT and DELETE refused to work, so I made a decision to not include them, since the project would not work properly. I decided it would be better for the project to work properly at some level and not work while trying to aim higher. This one is a bit harder to rate.. The main endpoints work so lets say 13.

  - Coding style: I think I learned a lot in this course and backend stuff overall feel to make a lot more sense to me. To my somewhat untrained eye the code looks very nice.
    The code is understandable and formatted ok. Maybe 15 or so.

  - Documentation: Spent quite a lot of time on README and API documentation. I feel like I did a good job on "how to use" etc.
    I would rate this a little over 10. Lets say 12. I wouldn´t say my documentation in concise and meaningful perhaps, but it is not partial or poorly written.

  Overall rating:
  A) 12
  B) 23
  C) 13
  D) 16
  E) 12
  = Rating of 76/100.
