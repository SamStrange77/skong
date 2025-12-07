let limit = 3801600

console.log('VERSION 1: FIXED SECONDS');
console.log('VERSION 3: MIO!!');

let timer = setInterval
(
    () => 
    {   
        let milliseconds = Math.floor(new Date("21-01-2026") - new Date());
        let seconds = Math.floor(-milliseconds/1000);
        let minutes = Math.floor(seconds/60);
        let hours = Math.floor(minutes/60);
        let days = Math.floor(hours/24);
        milliseconds*=-1;
        milliseconds%=1000;
        console.log(seconds);
        console.log(`rgb(${Math.ceil((Math.abs(limit-seconds)/limit) * 200)}, ${Math.floor((seconds/limit) * 200)}, 0)`);
        document.getElementById('seconds').innerHTML =
        `
            <div class = "value">
                ${Math.ceil(seconds) +'.'+normalised_ms(milliseconds)}
            </div>
            <div>
                Seconds
            </div>
        `;
        document.getElementById('minutes').innerHTML =
        `
            <div class = "value">
                ${minutes+':'+normalised((seconds%60))+'.'+normalised_ms(milliseconds)}
            </div>
            <div>
                Minutes
            </div>
        `;
        document.getElementById('hours').innerHTML =
        `
            <div class = "value">
                ${hours+':'+normalised((minutes%60))+':'+normalised((seconds%60))+'.'+normalised_ms(milliseconds)}
            </div>
            <div>
                Hours
            </div>
        `;
        document.getElementById('days').innerHTML =
        `
            <div class = "value">
                ${days+':'+normalised((hours%24))+':'+normalised((minutes%60))+':'+normalised((seconds%60))+'.'+normalised_ms(milliseconds)}
            </div>
            <div>
                Days
            </div>
        `;
        
    }, 
    50
);

function normalised (a)
{
    return a<10 ? '0'+a : a;

}
function normalised_ms (a)
{
    return a<100 ? a<10 ? '00'+ a : '0'+a : a;
}







