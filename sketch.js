var marks = [76,83,42,98,93,64,36,81,48,72];

function marks_avg(){
  var sum = 0;
  for(var i=0;i<10;i++){
    sum=sum+marks[i];
  }
  var len = marks.length;
  var avg = sum/len;
  console.log(avg); 
}
function setup() {
  createCanvas(400,400);
 marks_avg();
}

function draw() 
{
  background(60);
}