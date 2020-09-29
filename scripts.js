function getTimeRemaining(endtime) {
    const zeroFill = n => {
        return ('0' + n).slice(-2);
    }

    var t = Date.parse(endtime) - Date.parse(new Date());
    var days = zeroFill(Math.floor(t / (1000 * 60 * 60 * 24)));
    var hours = zeroFill(Math.floor((t / (1000 * 60 * 60)) % 24)); 
    var minutes = zeroFill(Math.floor((t / 1000 / 60) % 60));
    var seconds = zeroFill(Math.floor((t / 1000) % 60));

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clockSpan = document.getElementById(id);
    var daysSpan = clockSpan.querySelector('.days');
    var hoursSpan = clockSpan.querySelector('.hours');
    var minutesSpan = clockSpan.querySelector('.minutes');
    var secondsSpan = clockSpan.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = t.hours;
        minutesSpan.innerHTML = t.minutes;
        secondsSpan.innerHTML = t.seconds;

        if(t.total <= 0) {
            clearInterval(timeInterval);
        }
    }

    updateClock();
    var timeInterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 7 * 24 * 60 * 60 * 1000);
initializeClock('countdown', deadline);