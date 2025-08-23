let limit = 1040000

let timer = setInterval
(
    () => 
    {   
        let seconds = Math.floor(new Date("09-05-2025")/1000 - new Date()/1000 - 16200);
        let minutes = Math.floor(seconds/60);
        let hours = Math.floor(minutes/60);
        let days = Math.floor(hours/24);
        console.log(seconds);
        document.body.style.setProperty('background-color', `rgb(${Math.ceil((Math.abs(limit-seconds)/limit) * 200)}, ${Math.floor((seconds/limit) * 200)}, 18)`)
        console.log(`rgb(${Math.ceil((Math.abs(limit-seconds)/limit) * 200)}, ${Math.floor((seconds/limit) * 200)}, 0)`);
        document.getElementById('seconds').innerHTML =
        `
            <div class = "value">
                ${Math.ceil(seconds)}
            </div>
            <div>
                More Seconds!
            </div>
        `;
        document.getElementById('minutes').innerHTML =
        `
            <div class = "value">
                ${minutes+':'+(seconds%60)}
            </div>
            <div>
                More Minutes!
            </div>
        `;
        document.getElementById('hours').innerHTML =
        `
            <div class = "value">
                ${hours+':'+normalised((minutes%60))+':'+normalised((seconds%60))}
            </div>
            <div>
                More Hours!
            </div>
        `;
        document.getElementById('days').innerHTML =
        `
            <div class = "value">
                ${days+':'+normalised((hours%24))+':'+normalised((minutes%60))+':'+normalised((seconds%60))}
            </div>
            <div>
                More Days!
            </div>
        `;
        
    }, 
    1000
);

function normalised (a)
{
    return a<10 ? '0'+a : a;
}