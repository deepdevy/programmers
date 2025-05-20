function solution(video_len, pos, op_start, op_end, commands) {
   
    var ctime = formatCtime(pos);
    var mm, ss;
    var str;
    function formatTime(){
        
        mm = String(Math.floor(ctime/60)).padStart(2, '0');
        ss = String(ctime%60).padStart(2, '0');
        str = mm + ':' + ss;
        return str;
    }
    function back10() {
        ctime -= 10;
        ctime = ctime<10 ? 0 : ctime;
        skipOp();
    }
    function foward10() {
        ctime += 10;
        if((formatCtime(video_len)-10)< ctime){
            ctime = formatCtime(video_len);
        }
        skipOp();
    }
    function skipOp() {
        if(ctime >= formatCtime(op_start) && formatCtime(op_end) >= ctime){
            ctime = formatCtime(op_end);
        }
    }
    function formatCtime(time) {
        var arr = time.split(':');
        var time1 = parseInt(arr[0]) * 60;
        var time2 = parseInt(arr[1]);
        var result = time1 + time2;
        
        return result;
    }
    skipOp();
    for(var i = 0; i < commands.length; i++){
        switch(commands[i]){
            case 'next': foward10();
                break;
            case 'prev': back10();
                break;
                
            default: break;
    
        }
        
    }
        
    
    return formatTime(ctime);
    
}