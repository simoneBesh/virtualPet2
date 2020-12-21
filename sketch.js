//Create variables here
var dog, dogImage;
var happydogImage;
var database, foodStock, foodS;
var fedTime, lastFed;
var foodObj;

function preload()
{
  dogImage=loadImage("images/dogImg.png");
  happydogImage=loadImage("images/dogImg1.png");
  
  
}

function setup() {
	createCanvas(1000, 500);
  database=firebase.database();
  foodObj=new food();
  foodStock=database.ref('food');
  foodStock.on("value", readStock);


  dog=createSprite(800, 200, 150, 150, 150);
  dog.addImage(dogImage);
  dog.scale=0.2;

  
    feedButton = createButton('Feed dog');
    feedButton.position(700, 95);
    feedButton.mousePressed(feedDog);

    restockButton = createButton('Restock food');
    restockButton.position(800, 95);
    restockButton.mousePressed(addFood);

}


function draw() {  
 background(46, 139, 87);
 foodObj.display();

  fill("white");
    textSize(20);

    //text("Food Supply: "+ foodS, 50, 100);

    //fedTime=database.ref('feedTime');
    //fedTime.on("value", function(data){
    //  lastFed=data.val(); 
    //});

  /*if(lastFed>=12){
    text("Last fed: " + lastFed%12 + "PM", 350, 30); 
  } else if(lastFed===0){
    text("Last Fed: 12 AM", 350, 30);
  }else{
    text("Last Fed: " + lastFed + "AM", 350, 30);
} */



    text("Food Supply: "+ foodS, 50, 100);
    drawSprites();

    //fedTime=database.ref('feedTime');
    //fedTime.on("value", function(data){
     // lastFed=data.val();
   // })

    //if(keyDown(UP_ARROW)){
//  foodStock=foodStock-1;
//}

/*if(keyWentDown(UP_ARROW)){
  foodS=foodS-1;
  writeStock(foodS);
  console.log(foodS);
  dog.addImage(happydogImage);
} */
}


function writeStock(x){
  if(x<=0){
    x=0;
  } else{
    x=x-1;
  }

  database.ref(' / ').set({
    food:x
  })
}

function readStock(data){
  foodS=data.val();
  console.log(foodS);
  foodObj.updateFoodStock(foodS);
}

function feedDog(){
  console.log(hour());
  dog.addImage(happydogImage);
//console.log(foodObj.getFoodStock);
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    food:foodObj.getFoodStock(),
    feedTime: hour()
  })
}

function addFood(){
  foodS++;
  database.ref('/').update({
    food:foodS
  })
  
}