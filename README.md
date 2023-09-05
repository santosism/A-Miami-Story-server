
A Miami Story!

The project A Miami Story is focused on a story for Miami, based around Miami, and playtested by people from Miami. 

This is a text-based adventure game, focused on locations and the locale of Miami. 


For this phase, I have limited the commands to four: move, look, wait, and panic. 

I learned a lot about game logic and using React, and the difficulties of connecting scenes and transitions. And I enjoyed making sure things were connected and moving from player input. 

Tech stack for the client/front-end: 

React.js

For use of the Jquery Command Line Terminal:

Jquery Command Line Terminal https://terminal.jcubic.pl/

For connecting front-end with back-end

Axios



For installation on front-end: 

npm i (installs node modules)

npm i sass

npm i axios

npm start


All assets for use in project, no copyright:

AI art images generated by: https://neural.love/ai-art-generator

Music tracks: https://www.fesliyanstudios.com/royalty-free-music/downloads-c/8-bit-music/6, https://www.youtube.com/watch?v=k8nHWwO1U2Q


Tech stack for the server/back-end:

Node.js

Express

Two JSON data files, scenes.json and transitions.json

For installation: 

npm i 

npm i node

npm i Express

npm i nodemon

Test on Postman (endpoints /transitions and /scenes)












## API Reference

#### Get all transitions

```http
  GET /transitions
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `transitions` | `string` | **Required**. JSON file transitions|

#### Get all scenes

```http
  GET /scenes
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `scenes`      | `string` | **Required**.JSON file scenes |



## Authors

- [@santosism](https://www.github.com/santosism)

