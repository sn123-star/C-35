var hypoticball,database;
var position;

function setup(){
    database=firebase.database();

    createCanvas(500,500);
    hypoticball = createSprite(250,250,10,10);
    hypoticball .shapeColor = "red";

    var hypoticballposition= database.ref('ball/position');
    hypoticballposition.on("value",readPosition,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y)
{
    database.ref('ball/position').set({
        'x' : position.x+x,
        'y' : position.y+y
    });
}

function readPosition(data)
{
    position = data.val();
    hypoticball.x=position.x;
    hypoticball.y=position.y;

}

function showerror()
{
    console.log("error");
}