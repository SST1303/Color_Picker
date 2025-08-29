var input = document.getElementById('colorInput');

if(input) {
    document.body.style.backgroundColor = input.ariaValueMax;
    input.addEventListener('input', function (e) {
        document.body.style.backgroundColor = e.target.value;
    })
}