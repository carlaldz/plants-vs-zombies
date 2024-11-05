# plants-vs-zombies

<br>
https://carlaldz.github.io/plants-vs-zombies/ 

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

  This project allowed me to put into practice all the different 

  Upon completion of this exercise, you will be able to:

  - Select HTML elements using DOM methods and HTML element properties `querySelector()`, `querySelectorAll()`, etc.
  - Access and modify HTML elements content using properties `textContent`, `innerHTML`
  - Add or remove HTML elements to the DOM using Javascript DOM methods `createElement()`, `appendChild()`, `removeChild()`, `insertBefore()`
  - Add or remove event listeners to HTML elements using DOM methods `addEventListener()`, `removeEventListener()`
  - Use loops to iterate through a list of HTML elements, and perform actions like adding event listeners and accessing values
  - Access and modify properties, values and attributes of HTML elements 
  - Add, remove and toggle CSS classes to HTML elements using DOM methods `classList.add()`, `classList.remove()`, `classList.toggle()`

  <br>
  <hr> 

</details>

<br>

## Introduction

While doing the course at Ironhack, you came across a job opportunity where you need to manage the contacts of a famous movie producer. What better way to do it than to put your newly acquired JavaScript and DOM skills to use?

Your task is to create a digital contact list for the producer using Javascript and the DOM.

<br>

## Getting Started

- Fork this repo

- Clone this repo

- Open the LAB and start:

  ```bash
  cd lab-dom-ironcontacts
  code .
  ```


## Submission

- Upon completion, run the following commands:

  ```bash
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request and submit your assignment.


<br>

## Instructions

### Iteration 0 | Example Row

First, let's help you get familiar with the starter code. Take a moment and review the starter code provided in the files `index.html` and `index.js`.

<br>

Next, open the `index.html` file in your browser using the Live Server extension.

<br>

<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-dom-ironcontacts/01-lab-dom-iteration-0.png" alt="iteration 0" width="700">
</p>

<br>

You should see a table with 1 *example row*, similar to the one shown in the image above.

The code for the example row is located in the `index.js` file, where indicated by the comment `// ITERATION 0 | Example Row`. We included it there as an example to give you a starting point and to help you understand how the table rows should be structured.

<br>




In the following iterations, you will be adding more rows to the table. The data for the rows comes from the `contacts.js` file, which is already linked and loaded in the `index.html` file. You can access it by using the `contacts` variable. For example, `contacts[0]` will give you the first contact object in the array.



<br>



### Iteration 1 | Display 3 Contacts

Let's start by displaying the first 3 contacts in the table. To do so, you will need to:

1. Get the **first 3 contacts** from the `contacts` array.<br>You can use the `splice()` method for this. Remember that the `splice()` method modifies the original array, and returns the results as a new array.
2. Iterate over the newly obtained array of 3 contacts and, for each contact, create a new table row and append it to the table body.<br>You can use the *Iteration 0* code as an example of how to create a new table row and what its structure should be.
3. Append each new table row to the table body. You can use the `appendChild()` method for this.

<br>

<details>
  <summary><b>See Expected Result</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-dom-ironcontacts/02-lab-dom-iteration-1.png" alt="iteration 1" width="800">
  </p>

  <br>

</details>

<br>

### Iteration 2 | Delete Buttons

As you can see, each row has a *Delete* button. However, the buttons don't do anything yet. Let's fix that!
Your task in this iteration is to add an event listener to each *Delete* button so that, when clicked, the corresponding row is removed from the table.
You will need to do this  in the same loop where you are creating the new table rows. As soon as you create a new table row, you should also add an event listener to the delete button of that row. Here are the steps you should follow:

1. Get the *Delete* button element from a newly created row.<br> After creating a new table row, you can call the `querySelector()` method on the newly created table row to search for the *Delete* button only inside that row, like this: `newRow.querySelector(...)`.
2. Add an event listener to the *Delete* button element, for the `click` event.<br> You can use the `addEventListener()` method for this.
3. When the *Delete* button is clicked, the *row* element should be removed from the table.<br> You can use the `remove()` method for this.

<br>
