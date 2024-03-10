function add() {
    let task = document.getElementById("add").value;
    let upcomingParagraph = document.getElementById("upcoming");
    let scheduleParagraph = document.getElementById("schedule");

    // Create a new paragraph element
    let newParagraph = document.createElement("p");
    newParagraph.textContent = task;

    // Append the new paragraph to both the upcoming and schedule sections
    upcomingParagraph.appendChild(newParagraph);
    scheduleParagraph.appendChild(newParagraph.cloneNode(true));

    // Clear the input field after adding the task
    document.getElementById("add").value = "";
}

function removeTask() {
    let del = document.getElementById("del").value;
    let upcomingParagraph = document.getElementById("upcoming");
    let schedulepara = document.getElementById("schedule");

    //task to delete is target 
    let target = new RegExp(del, 'gi');

    // Replace the task to be removed with an empty string
    upcomingParagraph.innerHTML = upcomingParagraph.innerHTML.replace(target, '');

    //REGEXP - regular expression is a tool to search 
    //for all case insensitive patterns, in(del, 'gi'), '') 'del' 
    //is the pattern to search for, g means global flag, i means case insensitive and '' means empty str.

    //empty the schedule para asw
    schedulepara.innerHTML = schedulepara.innerHTML.replace(target, '');

    // Clear the input field after removing the task
    document.getElementById("del").value = "";
}

// function words() {

//     var tweet = document.getElementById("add").value;
//     var tweetCount = tweet.length;

//     if (tweet.length < 11 ) {
//         alert("You have written " + tweetCount + " characters," + " you have " + (10 - tweetCount) + " remaining");
//     }
// }