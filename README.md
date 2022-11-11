# 18-Social-Network-API

## Challenge User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```


## Challenge Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```


## General Info

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. Over the last part of this course, several of the technologies that social networking platforms use in their full-stack applications will be used. Because the foundation of social networking platform applications is data, it’s important that to understand how to build and structure the API first.

This repo is a build of an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This application uses Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages, the JavaScript date library Moment.js was used to format timestamps.


## Applied Technologies

* [NPM](https://www.npmjs.com/)
* [Node.js](https://nodejs.org/en/docs/)
* [Express.js](https://expressjs.com/en/guide/routing.html)
* [MongoDB](https://www.mongodb.com/docs/?_ga=2.229266782.313161828.1668155735-1617627790.1667263281)
* [Mongoose ODM](https://mongoosejs.com/docs/guide.html)
* [Moment.js](https://momentjs.com/docs/)


## Application Functionality

The following videos demo the user and thought routes for CRUD operations as well as adding and removing friends from users and adding and removing reactions from thoughts:

![James Li Social Network API](./assets/18-social-network-api-demo-gif-part1.gif)

![James Li Social Network API](./assets/18-social-network-api-demo-gif-part2.gif)



Links to the video demos:
* Part 1 - User Routes CRUD operations & adding/removing friends: https://drive.google.com/file/d/1D6u7rXXCEOcZS04PQTlDGmq3hywdZdR1/view
* Part 2 - Thought Routes CRUD operations & adding/removing reactions: https://drive.google.com/file/d/17W7ngLZ9b95-1drlnkxQm4jiaQ4TzWSQ/view
