document.getElementById('submitBtn').addEventListener('click', () => {
    const textInput = document.getElementById('textInput').value;
    const date = new Date().toISOString();

    if (textInput.trim() === '') {
        alert('Please enter some text.');
        return;
    }

    const data = {
        text: textInput,
        date: date
    };

    fetch('https://script.google.com/macros/s/AKfycbxjNNsnOo97iqdkHwco5U2B8y1JGve4P43cVYqX7KwV0802xEQ3XKHa5uVndESR0JQj/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(result => {
        if (result.status === 'success') {
            alert('Data saved successfully!');
            document.getElementById('textInput').value = '';
        } else {
            alert(`Error saving data: ${result.message}`);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert(`Error saving data: ${error.message}`);
    });
});
