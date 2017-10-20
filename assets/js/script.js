var aLogger = document.querySelectorAll('a');

for (var i = 0; i < aLogger.length; i++) {
    aLogger[i].addEventListener('click', function (event) {

        // event.preventDefault();
        console.log(event.target);

    });
}