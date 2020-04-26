const phoneNumber = document.querySelector('#phoneNumber');
const message = document.querySelector('#message');
const sendBtn = document.querySelector('#sendMessageBtn');

sendBtn.addEventListener('click', sendMessage);

function sendMessage(event) {
    if (phoneNumber.value && message.value) {
        const url = '/sms';
        const data = {
            phone : phoneNumber.value,
            message: message.value  
        };

        console.log(data);
        const requestOptions =  {
            method: 'POST', 
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        };
        
        fetch(url, requestOptions)
            .then(res => res.text())
            .then(jsonRes => console.log('Success:', jsonRes))
            .catch(error => console.error('Error:', error));
    }
}

