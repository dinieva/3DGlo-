const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, hours, minutes, seconds }
    };

    let addZero = function (num) {
        if (num < 10) {
            return '0' + num;
        }
        return num;
    };

    const updateClock = () => {
        let getTime = getTimeRemaining();
        getTime.hours = addZero(getTime.hours);
        getTime.minutes = addZero(getTime.minutes);
        getTime.seconds = addZero(getTime.seconds);
        if (getTime.timeRemaining > 0) {
            timerHours.textContent = getTime.hours;
            timerMinutes.textContent = getTime.minutes;
            timerSeconds.textContent = getTime.seconds;
        }
    };

    setInterval(updateClock, 1000);


};


export default timer