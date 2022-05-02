// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLoc){
 if (pickUpLoc>=42){
    return (pickUpLoc-42)
 } else {return (42-pickUpLoc)}
}

function distanceFromHqInFeet(pickUpLoc){
    return distanceFromHqInBlocks(pickUpLoc)*264
}

function distanceTravelledInFeet(start,destination){
    if (start>=destination){
        return (start-destination)*264
     } else {return (destination-start)*264}
    }

function calculatesFarePrice(start,destination){
    if(distanceTravelledInFeet(start,destination)<=400)
    {return 0}  
    if (distanceTravelledInFeet(start,destination)<=2000)
    {return (distanceTravelledInFeet(start,destination)-400)*0.02}
    if (distanceTravelledInFeet(start,destination)<=2500)
    {return 25}
    else {return 'cannot travel that far'}
}