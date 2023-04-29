"use strict";
// DEBUGGING
const log = console.log;
// SELECTORS
const progressBarContainer = document.querySelector('.progress-bar-container');
const date = new Date();
let seconds = date.getSeconds();
let count = 1;
function displaySeconds() {
    if (seconds == 60) {
        count = 1;
    }
    else {
        count++;
        log(count);
        let progressBarContent = `
    <label for="file">Task in progress:</label>
    <progress id="progress-bar" value=${count} max="100"> 50% </progress>
`;
        progressBarContainer.innerHTML = progressBarContent;
    }
}
setInterval(() => {
    displaySeconds();
}, 1000);


