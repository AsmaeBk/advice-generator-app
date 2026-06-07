# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG6KpY1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size.
- See hover states for all interactive elements on the page.
- Generate a new piece of advice by clicking the dice icon.

### Links

- Solution URL: [https://github.com/AsmaeBk/advice-generator-app]
- Live Site URL: [https://asmaebk.github.io/advice-generator-app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS Flexbox
- Mobile-first workflow
- Vanilla JavaScript (Async/Await)
- [Advice Slip API](https://api.adviceslip.com)

### What I learned

During this project, I fixed a critical issue where the browser cached the API responses, causing the advice not to change on every dice click. I learned how to bypass this using the native `{ cache: "no-store" }` configuration object inside the `fetch()` function to force a fresh request every single time:

```js
async function fetchAdvices() {
    try {
        const response = await fetch(API_URL, { cache: "no-store" });

        if (!response.ok) {
            throw new Error(`Http error, status: ` + response.status);
        } else {
            const result = await response.json();
            displayAdvice(result);
        }
    } catch (error) {
        console.log("Failed to load data: " + error);
        document.querySelector(".content").textContent = "Failed to load data !";
    }
}