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

    fetch('https://script.google.com/macros/s/AKfycbx5ym2m2UYl2DDqRvdsqqPCbuJGj4A0_--gmjO5HZQzsq0bRkpSmF_X4b3F11OoaapkbQ/exec', {
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
