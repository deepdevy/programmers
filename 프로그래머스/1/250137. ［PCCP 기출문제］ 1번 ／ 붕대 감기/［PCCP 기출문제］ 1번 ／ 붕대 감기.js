function solution(bandage, health, attacks) {
    var answer = 0;
    var healthVal = health;
    var endBandage = false;
    var atkCount = 0;
    var healDelay = bandage[0];
    var healPerSec = bandage[1];
    var bonusHeal = bandage[2];
    var sec = 0;
    var healSec = 0;
    while(!endBandage){
        if(healthVal <= 0){
            endBandage = true;
            return -1;
        } else {
            if(healthVal > health) healthVal = health;
            if(sec == attacks[atkCount][0]){
                healthVal-=attacks[atkCount][1];
                if(healthVal <= 0){
                    endBandage = true;
                    return -1;
                }
                atkCount++;
                healSec = 0;
                if(atkCount == attacks.length){
                    endBandage = true;
                    return healthVal;
                }
            } else {
                if(healDelay <= healSec){
                    healSec = 0;
                    healthVal += bonusHeal;
                    if(healthVal > health) healthVal = health;
                }
                
                
                healthVal += healPerSec;
            }
            
            
            sec++;
            healSec++;
        }
    }
}