const scriptURL = 'https://script.google.com/macros/s/AKfycbww3Kw3Hcq7eyNY_vooQeRb_yGY4I-1QVje90XLvB5TD3eg-C3RNMUKqyeMivC_7CBTIg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank You for Subscribing!"
            setTimeout(()=>{
                msg.innerHTML = ""
            },5000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})