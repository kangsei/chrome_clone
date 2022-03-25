const RemainTime = document.querySelector("h2#D-day");
function Dday() {
    const DdayTime = new Date("2022-12-25");
    const todayTime = new Date();

    console.log(todayTime);
    const diff = DdayTime - todayTime;
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hour = Math.floor(diff / (1000 * 60 * 60) % 24);
    const minute = Math.floor(diff / (1000 * 60) % 24);
    const second = Math.floor(diff / 1000 % 60);

    RemainTime.innerText = ` 앞으로 ${day}일 ${hour}시간 ${minute}분 ${second}초 남았습니다.`
    
}

Dday();
setInterval(Dday, 1000);