// DEBUGGING
const log = console.log;



// const date = new Date();
// GET SECONDS
// let seconds = date.getSeconds();

// let count = 1;
// FUNCTION TO DISPLAY SECONDS
// function displaySeconds() {
//     if (seconds == 60) {
//         count = 1;
//     } else {
//         count++;
//         log(count)
//     }
// }

class Time {
    static displaySeconds() {
        // SELECTORS
        const progressBarContainer = document.querySelector('.progress-bar-container') as HTMLElement;
        const date = new Date();
        // GET SECONDS
        let seconds:number = date.getSeconds();

        let count:number = 0;
        if (count <= 0) {
            count++;
            log(count)
        }   
            

            // PROGRES BAR CONTENT STRUCTURE
    //     let progressBarContent = `
    //     <label for="file">Task in progress:</label>
    //     <progress id="progress-bar" value=${count} max="100"> 50% </progress>
    // `;
    // APPEND PROGRESS BAR CONTENT TO PROGRESS BAR CONTAINER
    // progressBarContainer.innerHTML = progressBarContent;

    }
}

setInterval(() => {
    Time.displaySeconds();
}, 1000)

