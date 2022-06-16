// PRELOADER
var loader = document.getElementById("loading");
function preLoader() {
    loader.style.display = "none";
}


// ADD ADDITIONAL COMMANDS
var addBtn = document.getElementById('btn');
addBtn.addEventListener('click', () => {
    console.log('addBtn');
    document.getElementById("additional").style.display = "block";
    document.getElementById("moreAdditional").style.display = "block";
});

// SMOOTH SCROLL TO TOP
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    // console.log(target);

    var targetPosition = target.getBoundingClientRect().top;
    // console.log(targetPosition);

    var startPosition = window.pageYOffset;
    // console.log(startPosition);

    var distance = targetPosition - startPosition;
    // console.log(distance);

    var startTime = null;
    // console.log(startTime);

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;

        var timeElapsed = currentTime - startTime;
        // console.log(timeElapsed);

        var run = ease(timeElapsed, startPosition, distance, duration);
        // console.log(run);

        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);

    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var myBtn = document.querySelector('#myBtn');
myBtn.addEventListener('click', function () {
    smoothScroll('#top', 1000);
});