function solution(schedules, timelogs, startday) {
    var answer = 0;
    var people = [];
    var dayTemp = 0;
    function calculateLimit(timeHHMM) {
        const hour = Math.floor(timeHHMM / 100);
        const minute = timeHHMM % 100;

        let newMinute = minute + 10;
        let newHour = hour;

        if (newMinute >= 60) {
            newHour += Math.floor(newMinute / 60);
            newMinute = newMinute % 60;
        }
        return newHour * 100 + newMinute;
    }
 outerLoop:    
    for (var i = 0; i < schedules.length; i++){
        var dayTemp = startday;
        var isWeekend = false;
        if(dayTemp > 5) {
            isWeekend = true;
        }
        people[i] = 0;
        for (var j = 0; j < timelogs[i].length; j++){
            if(!isWeekend){
                if(calculateLimit(schedules[i]) >= 
                   timelogs[i][j]){

                    people[i]++;


                } else  {
                    continue outerLoop;
                }
            }
            if(dayTemp == 7) {
                
                dayTemp = 1;
            } else {
                
                dayTemp++;
            }
            dayTemp > 5 ? isWeekend = true : isWeekend = false;
            
        
        }
    }
    var count = people.filter(item => item === 5).length;
    return count;
}