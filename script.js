document.addEventListener("DOMContentLoaded", function() {
    // Retrieve and display team members
    const teamMembers = ['Alice', 'Bob', 'Charlie'];
    document.getElementById('team-members').innerText = `Команда: ${teamMembers.join(', ')}`;
  
    // Example of how to use local storage to store user preferences
    const userPreference = localStorage.getItem('userPreference') || 'defaultPreference';
    alert(`Ваше текущее предпочтение: ${userPreference}`);

    // Event listener for navigation
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            alert(`Navigating to ${this.innerText}`);
        });
    });
});
