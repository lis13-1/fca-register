
document.getElementById('toggleDetails').addEventListener('click', function() {
    const extraDetails = document.getElementById('extraDetails');
    if (extraDetails.style.display === 'none') {
        extraDetails.style.display = 'block';
        this.textContent = 'Hide Details';
    } else {
        extraDetails.style.display = 'none';
        this.textContent = 'Show More Details';
    }
});
