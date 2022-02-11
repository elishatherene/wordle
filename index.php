<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <link href="index.css" rel="stylesheet" type="text/css"/>
  <title>Wordle</title>
</head>
<body>
  <h1 style="text-align:center; color:white; font-size:30px;">Wordle</h1>
  <div id="container">
    <div class="grid">
      <div class="rows" id="row_1">
        <div class="spots spots_1"></div>
        <div class="spots spots_1"></div>
        <div class="spots spots_1"></div>
        <div class="spots spots_1"></div>
        <div class="spots spots_1"></div>
      </div>
      <div class="rows" id="row_2">
        <div class="spots spots_2"></div>
        <div class="spots spots_2"></div>
        <div class="spots spots_2"></div>
        <div class="spots spots_2"></div>
        <div class="spots spots_2"></div>
      </div>
      <div class="rows" id="row_3">
        <div class="spots spots_3"></div>
        <div class="spots spots_3"></div>
        <div class="spots spots_3"></div>
        <div class="spots spots_3"></div>
        <div class="spots spots_3"></div>
      </div>
      <div class="rows" id="row_4">
        <div class="spots spots_4"></div>
        <div class="spots spots_4"></div>
        <div class="spots spots_4"></div>
        <div class="spots spots_4"></div>
        <div class="spots spots_4"></div>
      </div>
      <div class="rows" id="row_5">
        <div class="spots spots_5"></div>
        <div class="spots spots_5"></div>
        <div class="spots spots_5"></div>
        <div class="spots spots_5"></div>
        <div class="spots spots_5"></div>
      </div>
      <div class="rows" id="row_6">
        <div class="spots spots_6"></div>
        <div class="spots spots_6"></div>
        <div class="spots spots_6"></div>
        <div class="spots spots_6"></div>
        <div class="spots spots_6"></div>
      </div>
    </div>
  </div>
  <div id="keyboard">
    <div id="top_row">
      <div class="keys"><p>Q</p></div>
      <div class="keys"><p>W</p></div>
      <div class="keys"><p>E</p></div>
      <div class="keys"><p>R</p></div>
      <div class="keys"><p>T</p></div>
      <div class="keys"><p>Y</p></div>
      <div class="keys"><p>U</p></div>
      <div class="keys"><p>I</p></div>
      <div class="keys"><p>O</p></div>
      <div class="keys"><p>P</p></div>
    </div>

    <div id="middle_row">
      <div class="keys empty" style="background-color:black;"></div>
      <div class="keys"><p>A</p></div>
      <div class="keys"><p>S</p></div>
      <div class="keys"><p>D</p></div>
      <div class="keys"><p>F</p></div>
      <div class="keys"><p>G</p></div>
      <div class="keys"><p>H</p></div>
      <div class="keys"><p>J</p></div>
      <div class="keys"><p>K</p></div>
      <div class="keys"><p>L</p></div>
      <div class="keys empty" style="background-color:black;"></div>
    </div>

    <div id="bottom_row">
      <div class="keys" id="enter"><p>ENTER</p></div>
      <div class="keys"><p>Z</p></div>
      <div class="keys"><p>X</p></div>
      <div class="keys"><p>C</p></div>
      <div class="keys"><p>V</p></div>
      <div class="keys"><p>B</p></div>
      <div class="keys"><p>N</p></div>
      <div class="keys"><p>M</p></div>
      <div class="keys" id="delete"><p>BACK</p></div>
    </div>
  </div>
  <div id="popup">
    <span id="correct_answer" style="display:inline; color:black;"></span>
    <span id="total_correct"></span>
    <button id="btn">Play Again</button>
  </div>
</body>
<script src="words.js"></script>
<script src="index.js"></script>
</html>
