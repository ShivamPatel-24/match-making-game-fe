# Memory Matching Game

### Developed by Shounak Kulkami, Alex Nejman, and Shivam Patel

Welcome to our Memory Matching Game! This README provides an overview of the game's web-hosted link, objective, rules, unique features, technology stack, deployment instructions, credits for third-party materials, and project reflection.


## Web-Hosted Game Link

Our Memory Matching Game is accessible at:

https://653f0a52a846547bd7f07c3a--sage-dolphin-0d2e88.netlify.app/

## Game Objective and Rules

### Objective

The objective of the Memory Matching Game is to match cards with identical images. The player successfully  completes the game once they have matched every card on the board. The player will fail the game if they have exceeded the maximum number of attempts. Your overall score will be based on the number of attempts and the amount of time taken.

### Rules

1. At the start of the game, all cards are face-down.
2. The player can flip two cards face up on each attempt.
3. If the images on both cards match, they remain face up.
4. If the images on both cards do not match, they are flipped back face down.
5. The game continues until all cards are successfully matched or the maximum number of attempts is exceeded by the player.


## Unique Features

### Scoring System and Leaderboard

Our Memory Matching Game features a scoring system that is based on several factors including the number of attempts and the amount of time taken. Players around the world can compete to achieve the highest possible score. These scores will be displayed on a real-time leaderboard with the highest-ranking players.

### Real-time Chat

Our Memory Matching Game allows players around the world to interact with each other through a real-time global chat. This chat displays the username selected by the player followed by their desired message. This will operate similarly to a live-stream chat and encourages friendly player messaging.


## Technology Stack

The Memory Matching Game is built using the following technology stack and assets:

### Frontend
**GitHub Repository:** https://github.com/ShivamPatel-24/match-making-game-fe

- **CSS**: For styling and layout.
- **EJS**: For embedding dynamic data in HTML templates.
- **Freepik**: For the icons used on the game cards.
- **Google Fonts**: For web fonts to enhance the game's typography.
- **HTML**: For the game's structure and content.
- **JavaScript**: For game logic and interactivity.
- **React.js**: For building the UI of our single-page application.

### Backend
**GitHub Repository:** https://github.com/ShivamPatel-24/memory-matching-game-be

- **Express**: For building the backend server and handling HTTP requests.
- **GitLab**: For version control and collaborative development.
- **Heroku**: For hosting and deployment of the game.
- **MongoDB**: For storing and managing game data.
- **Node.js**: For running JavaScript code on the server side.

## Setup and Deployment Instructions

Follow these steps to set up and deploy the Memory Matching Game:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/ShivamPatel-24/match-making-game-fe.git
   ```

2. Navigate to the project directory:
   ```bash
   cd match-making-game-fe
   ```       

3. ## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

4. Play the game and enjoy!

## Credits for Third-Party Assets and Code

Our team would like to give credit to the following third-party assets that were utilized to develop our Memory Matching Game:

- **Freepik** (https://www.freepik.com): Provided the icons used for the game cards.
- **Google Fonts** (https://fonts.google.com): Provided the typography used throughout the game.
- (https://github.com/iamshaunjp/React-Firebase): Helped in understanding node dependencies.

Please note that the game's code, excluding third-party assets, is the original work of our development team.

## Project Reflection

Our Memory Matching Game resulted from a graduate-level CPSC 8710 Foundations of Software Development course project. Shounak Kulkami, Alex Nejman, and Shivam Patel grouped up and were tasked with building a web-hosted game designed for virtual interactions. Another requirement of this web-hosted game was the ability to be played by a group of people on a video call, with one person controlling the game interface. Given that our team only had a couple of weeks to accomplish this goal, we opted to utilize principles from the Agile Framework for rapid development. The first order of business was to establish a standard meeting time and place for the members of our group. This was slightly complicated because our group consisted of full-time students and employees. To be considerate of everyone's prior obligations, our team settled on a standing virtual meeting every Monday night until the project deadline was reached. The purpose of this meeting would be to share the progress made on assigned tasks, discuss any obstacles we're encountering, and delegate work items to be accomplished before our next meeting.

During our first group meeting, we began the conceptualization process and agreed upon the classic idea of a Memory Matching Game. To enhance the overall user experience, our team wanted to brainstorm unique features that would set our Memory Matching Game apart from others. These unique features include a leaderboard system and a real-time chat. Additional information regarding these features can be found in the "Unique Features" section above. Once the concept of our web-hosted game was settled, our team needed to break down the overall project into smaller and more manageable components. These components included a front-end, back-end, database, visual assets, and documentation. Additional information regarding our technology stack and visual assets can be found in the sections above titled "Technology Stack" and "Credits for Third-Party Assets and Code" respectively. After the components were broken down, we divided up tasks and assigned responsibilities based on the strengths of each team member.

Throughout our Memory Matching Game's design and development process, we encountered several challenges and achieved numerous successes. Working within the Agile Framework allowed us to adapt to changes and pivot quickly. Our standing Monday night meetings provided a platform for open communication, helping us address obstacles promptly. Division of tasks based on each team member's strengths streamlined our development process. One of the most rewarding aspects was the successful testing of the game in real video call scenarios before the final submission. This ensured that our game met the desired objectives and highlighted the importance of user experience and real-time interactions. Ultimately, we have returned from this project with invaluable lessons in collaboration, problem-solving, and efficient development. Our Memory Matching Game is a testament to the power of teamwork and the ability to create engaging virtual experiences.
