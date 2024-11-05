# plants-vs-zombies

<br>
[Play the Game Here](https://carlaldz.github.io/plants-vs-zombies/)

## Learning Goals
<details>
This project was the perfect way to put into action a lot of the skills covered in the first module of the bootcamp. Here's a quick breakdown of what went into (and what I suffered with) building it:

### JavaScript Basics
- **Data Handling**: Worked with arrays, objects, and classes to keep track of all game elements like plants, zombies, and bullets.
- **Event Handling**: Set up event listeners so the game reacts to player actions, like clicking cards and planting defenses.
- **Game Flow**: Used conditionals, loops, and timers to manage the pace of the game, from zombie waves to sun generation and plant placements.

### Object-Oriented Programming (OOP)
- **Organized Code**: Split the game into classes for each main piece (plants, zombies, bullets, and the game board) for cleaner, more reusable code.
- **Inheritance**: Created specialized plants and zombies with unique health, attack, and movement properties, all based on a common blueprint.
- **Custom Behavior**: Tweaked subclasses for unique behaviors, so Peashooters, for example, fire projectiles, and zombies shuffle toward the house.

### DOM Manipulation + Canvas
- **Canvas & DOM Combined**: Mixed HTML elements (buttons, UI) with Canvas drawing, making the game’s action smooth and dynamic.
- **Screen Transitions**: Built out various screens and their transitions — think start menu, victory, defeat — all controlled through the DOM.

### Game Logic + State Management
- **Collision Logic**: Wrote rules to detect and handle interactions between game elements (like bullets hitting zombies).
- **Timing**: Used `setInterval` and frame ticks to manage spawning, production, and game pacing for a real-time feel.

### Scalable + Expandable Code
- **Extensibility**: Built the code so that adding new plants and zombies with unique abilities is a breeze.
- **Future-Proofing**: Added placeholders to easily expand on the game, like player stats, more levels, and new game modes down the line.

  <br>

</details>

<br>

## Introduction
This game is a JavaScript-based adaptation of the classic Plants vs. Zombies, built using HTML, CSS, and JavaScript. The goal is to protect your house from invading zombies by planting various defensive plants in your backyard. Each plant type has unique abilities to help you keep the zombies at bay. The game involves strategic planting, resource management, and quick responses to prevent zombies from reaching your house.

<br>

## How to Play

- **Choose a Plant**: Click on the plant card of your choice. Each plant costs a certain number of suns.

- **Place Your Plant**: Click on an empty spot in the backyard to plant it. You cannot plant in a spot that is already occupied or if you lack enough suns.

- **Collect Suns**: Suns are only produced with the Sunflowers, so plant some right at the start or you will run out of Suns. 

- **Stop the Zombies**: Don't let the zombies get to the house or they'll eat your brains!! Maybe that's not a problem for you, but you will lose the game. 


## Scalability
This project is designed with future expansion in mind. Possible improvements include:

- **New Plants and Zombies**: Add more plant and zombie types with different attributes like attack range, strength, and special abilities.
- **Game Statistics**: Display stats, such as the total zombies defeated, suns collected, and more on the Victory screen.
- **Advanced Levels and Game Modes**: Introduce difficulty levels, night mode, and survival or infinite modes for a more challenging experience.

---

  Feel free to clone the repository and modify it to create your own unique twist on the classic game!