//Feet to mile converter
function feetToMile(feet){
    if(feet ==" " || feet ==""){
        console.log("Please enter decimal value");
        return null;
    }
    else{
        var mile = feet*0.000189394;
        var finMile = mile.toFixed(8);//as in google they show 8 digit after point
        return finMile;  
    }          
    
    } 
    console.log("#feet_to_mile_converter");
    var result = feetToMile(30);//input value 
    console.log(result," Mile");

    //Wood Calculator
    
    function woodCalculator(chair,table,bed){
        if(chair>0 && table>0 && bed>0){
        var woodForChair = chair*1;
        var woodForTable = table*3;
        var woodForBed = bed*5;
        var total = woodForChair+woodForTable+woodForBed;
        return total;
        }
        else{ 
            var total = console.log("Enter postive value");
            return null;
        }
    }
    console.log("#wood_calculator");    
    var wood = woodCalculator(12,23,11,);//input for how many chair, table, bed
        console.log("Need Total",wood, "Cubic Feet Wood");
    





    //Brick Calculator
    function brickCalculator(floor){
    
        if(floor>10 && floor<=20){
            var FirstTenFloor = (floor-10);
            var FirstTenFloorFeet = FirstTenFloor*15;
            var afterTenFloor = (floor-FirstTenFloor);
            var afterTenFloorFeet = afterTenFloor*12;
            var brickForTen = FirstTenFloorFeet*1000;
            var brickAfterTen = afterTenFloorFeet*1000;
            var total = brickForTen+brickAfterTen;
        }
        else if(floor>20){
            var FirstTenFloor = 10;
            var FirstTenFloorFeet = FirstTenFloor*15;
            var afterTenFloor = 10;
            var afterTenFloorFeet = afterTenFloor*12;
            var brickForTen = FirstTenFloorFeet*1000;
            var brickAfterTen = afterTenFloorFeet*1000;
    
            var upTwentyFloor = (floor-20);
            var upTwentyFloorFeet = upTwentyFloor*10;
            var brickAfterTwenty = upTwentyFloorFeet*1000;
            var total = brickForTen+brickAfterTen+brickAfterTwenty;
        }
        else if(floor<=10 && floor>0){
            var belowTenFloor = floor*15;
            var brick4 = belowTenFloor*1000;
            var total = brick4;
        }
        else if(floor<0){
            var total =console.log("Negative value not allowed");
            return null;
        }       
        
        return total;
    
    }
    console.log("#brick_calculator");
    var result = brickCalculator(10); //input value
    console.log("You need ",result, " bricks");


    //Shortest name finder
    var name = ["Rashid", "Karim", "Siddiqur", "Farzana","Mim"];

function tinyFriend(array) {
	return array.reduce(function(prevWord,currWord) {
		if (currWord.length < prevWord.length) {
			return currWord;
		}
		else 
			return prevWord;
	})	
	
}
console.log("#shortest_Name_Finder");
var shortestName = tinyFriend(name);
console.log("Shortest Name is:",shortestName);
