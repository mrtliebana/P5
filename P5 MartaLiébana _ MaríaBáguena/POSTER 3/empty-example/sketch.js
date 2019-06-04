
 let w;
 let columns;
 let rows;
 let board;
 let next;

 
 
 function preload() {
  img = loadImage('sonar2.png');
  img2 = loadImage('texto8.jpg');
  }
 
 function setup() {
 
  createCanvas(420, 607);
   w = 30;

  

   //  columnas y filas 
   columns = floor(width / w);
   rows = floor(height / w);
 
   board = new Array(columns);
   for (let i = 0; i < columns; i++) {
     board[i] = new Array(rows);
   }

   next = new Array(columns);
   for (i = 0; i < columns; i++) {
     next[i] = new Array(rows);
   }
   init();
 }
 
 function draw() {
   background(255);

   image(img2, 1,1);
   
   generate();
   for ( let i = 0; i < columns;i++) {
     for ( let j = 0; j < rows;j++) {
       if ((board[i][j] == 1)) fill(255);
       else noFill();
      //-----------
       noStroke();
       rect(i * w, j * w, w-1, w-1);
     }
   }
 
 }
 
 // click para reset
 function mousePressed() {
   init();
 }
 

 function init() {
   for (let i = 0; i < columns; i++) {
     for (let j = 0; j < rows; j++) {
      
       if (i == 0 || j == 0 || i == columns-1 || j == rows-1) board[i][j] = 0;
      
       else board[i][j] = floor(random(2));
       next[i][j] = 0;
     }
   }
 }
 
 
 function generate() {
 
  
   for (let x = 1; x < columns - 1; x++) {
     for (let y = 1; y < rows - 1; y++) {
      
       let neighbors = 0;
       for (let i = -1; i <= 1; i++) {
         for (let j = -1; j <= 1; j++) {
           neighbors += board[x+i][y+j];
         }
       }
 
      
       neighbors -= board[x][y];
       
       if      ((board[x][y] == 1) && (neighbors <  2)) next[x][y] = 0;           // mov 1
       else if ((board[x][y] == 1) && (neighbors >  3)) next[x][y] = 0;           // mov 2
       else if ((board[x][y] == 0) && (neighbors == 3)) next[x][y] = 1;           // mov 3
       else                                             next[x][y] = board[x][y]; // mov 4
     }
   }
 
   
   let temp = board;
   board = next;
   next = temp;
 }