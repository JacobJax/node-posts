# 🍃node-posts 
Simple Node JS API. Live demo available  [here](https://nodeposts.herokuapp.com/posts)

## Languages and technologies 🛠
- Node JS
- Express
- MongoDB

## Installation💾

### Requirements
1. [Node JS](https://nodejs.org/)
1. [Mongo DB Atlas account](https://www.mongodb.com/atlas/database)

### Steps
1. Run `git clone https://github.com/JacobJax/node-posts.git`
1. Run `cd node-posts` to navigate to the project folder
1. Run `npm install` to install dependencies


## Running project ⚙
After cloning the project, installing node modules and creating a Mongo DB Atlas account, create a `.env` file.
In the `.env` file, add your connection string from Mongo DB atlas which looks something like this `mongodb+srv://<username>:<password>@cluster0.wwoebgl.mongodb.net/?retryWrites=true&w=majority`.

Set `DB_CONNECTION_STRING=mongodb+srv://<username>:<password>@cluster0.wwoebgl.mongodb.net/?retryWrites=true&w=majority` and `PORT=5000`(Optional)

You can then run `npm run start` to view the project on `localhost:5000`.

## Contributing 👷🏿‍♀️
- Clone or Fork the project
- Create an issue describing what you're working on and create a branch from your issue.
- Work on your issue, push to the brach you created and create a new pull request.
