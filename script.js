document.addEventListener('DOMContentLoaded', function() {
    const title = "powerind.gg";
    let index = 0;

    function updateTitle() {
        document.title = title.substring(0, index + 1);
        index = (index + 1) % (title.length + 1); // Cycle through the characters
    }

    setInterval(updateTitle, 300); // Update title every 300 milliseconds

    // JavaScript for mail icon click event
    const mailIcon = document.getElementById('mail-icon');
    mailIcon.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        alert('me@powerind.gg'); // Show alert with email
    });

    // JavaScript for discord icon click event
    const discordIcon = document.getElementById('discord-icon');
    discordIcon.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        alert('powerind'); // Show alert with Discord name
    });
});
