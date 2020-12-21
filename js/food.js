class food{
    constructor(){
  
     this.image=loadImage("Milk.png");
     this.lastFed=0;
     this.foodStock=0;
    }

display(){
    var x = 80, y=100;
    //var pos =this.body.position;
    imageMode(CENTER);

    if(this.foodStock!== 0){
    for(var i = 0; i<this.foodStock; i++){
        if(i%10===0){
            x=80;
            y=y+50;
        }
        image(this.image, x, y, 50, 50);
        x=x+30;
    }
}


}

  
getFoodStock(){
    //console.log(this.foodStock);
return this.foodStock;
}

updateFoodStock(foodStock){
   // console.log(foodStock);
    this.foodStock=foodStock;
}

deductFood(){
    if(foodStock>0){
        this.foodStock=this.foodStock-1;
    }
}

getFeedTime(lastFed){
    this.lastFed=lastFed;

}

}



