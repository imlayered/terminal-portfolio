document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    var history = [];
    const maxHistorySize = 4;

    displayOutput("Welcome to my portfolio, type 'help' for commands.");

    input.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            var command = input.value.trim();
            input.value = "";

            var response = processCommand(command);

            history.push({ command: command, response: response });
            if (history.length > maxHistorySize) {
                history.shift();
            }

            updateHistoryDisplay();
        }
    });

    function processCommand(command) {
        var parts = command.split(" ");
        var baseCommand = parts[0];
        var argument = parts.slice(1).join(" ");

        if (command === "clear") {
            history = []; 
            return "Cleared.";
        } else if (baseCommand === "help") {
            return "Available commands:<br>" +
            "help - display this menu<br>" +
            "clear - clear the terminal<br>" +
            "certifications - view my certifications<br>" +
            "echo - echo back a provided text<br>" +
            "social - open social media links ";} else if (baseCommand === "social") {
            return handleSocialCommand(argument);
        } else if (baseCommand === "echo") {
            return handleEchoCommand(argument);
        } else if (baseCommand === "about") {
            return "This is example text<br>" +
                   "more example text.";
        } 
        else if (baseCommand === "certifications") {
            return "lorem ipsummmm<br>" +
                   "loremmmmmmmmmm ipsuuuuuuuuuum";
        } else {
            return "Unrecognized command. Type 'help' to get started.";
        }
    }

    function updateHistoryDisplay() {
        output.innerHTML = history.map(item => {
            return `<strong>${item.command}</strong><br>${item.response}`;
        }).join('<br><br>');
    }

    function displayOutput(text) {
        output.innerHTML = text + '<br>' + output.innerHTML;
    }

    function handleSocialCommand(argument) {
        switch (argument) {
            case "github":
                setTimeout(function() {
                    window.open('https://github.com/imlayered', '_blank');
                }, 2000);
                return "Opening Github...";
            case "youtube":
                setTimeout(function() {
                    window.open('https://github.com/imlayered', '_blank');
                }, 2000);
                return "Opening YouTube... (its actually opening github)";
                break;
            case "twitter":
                setTimeout(function() {
                    window.open('https://github.com/imlayered', '_blank');
                }, 2000);
                return "Opening Twitter/X (its actually opening github)...";
                break;
            case "owenet":
                setTimeout(function() {
                    window.open('https://owenet.com/members/layered.2/', '_blank');
                }, 2000);
                return "Opening Owenet Forums...";
                break;
            case "":
                return "No argument, try \"social github\"<br>" +
                       "Available arguments: github, youtube, twitter, owenet";
            default:
                return "Invalid argument. Type 'social' for available arguments.";
        }
    }

    function handleEchoCommand(argument) {
        if (argument === "") {
            return "Error: No argument provided. Usage: echo [text]";
        } else {
            return argument;
        }
    }
});
