const clock = document.querySelector('#clock')

setInterval(function (params) {
    const time_now = new Date
    clock.innerHTML =  time_now.toLocaleTimeString();
} , 1000)