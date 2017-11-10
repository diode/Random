// noprotect

function getTime(time){
  if(!time){
    time = 0;
  }
  let h = Math.floor(time/60);
  let m = time%60;
  let hh = h > 9 ? h : `0${h}`;
  let mm = m > 9 ? m : `0${m}`;
  let timeStr = `${hh}:${mm}`;
  return timeStr;
}

function checkUnique(timeStr){
  if(timeStr[1] == timeStr[0] && 
    timeStr[3] == timeStr[0] &&
    timeStr[4] == timeStr[0] ){
    return true;
  }
  else if(timeStr[0] == timeStr[4] && 
    timeStr[1] == timeStr[3] ){
    return true;
  }
  else if(timeStr[1] == timeStr[0] && 
    timeStr[3] == timeStr[4] ){
    return true;
  }
  else if(timeStr[3] == "0" && 
    timeStr[4] == "0" ){
    return true;
  }
}

const HOURS_12 = 720;
const HOURS_24 = 1440;

let t = 0, unique = 0;
while(t < HOURS_24){
  let timeStr = getTime(t++);
  if(checkUnique(timeStr)){
    unique++;
    console.log(timeStr);
  }
}

console.log(` Unique Count : ${unique} `);
console.log(` Unique Probability : ${((unique/HOURS_24) * 100).toFixed(2)}% `);
