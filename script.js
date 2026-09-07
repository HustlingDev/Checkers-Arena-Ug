const board = document.getElementById("board");


// Create 8 × 8 checkers board
for (let row = 0; row < 8; row++) {

  for (let col = 0; col < 8; col++) {

    const square = document.createElement("div");

    const isDark = (row + col) % 2 === 1;

    square.className =
      `square ${isDark ? "dark" : "light"}`;


    /*
      Add pieces.

      Top 3 rows = blue pieces
      Bottom 3 rows = black pieces
    */

    if (isDark && row < 3) {

      const piece = document.createElement("div");

      piece.className = "piece red";

      square.appendChild(piece);

    }


    if (isDark && row > 4) {

      const piece = document.createElement("div");

      piece.className = "piece black";

      square.appendChild(piece);

    }


    board.appendChild(square);
  }
}


/*
   Small interactive effect:
   Clicking a dark square highlights it.
*/

document.querySelectorAll(".square.dark").forEach(square => {

  square.addEventListener("click", () => {

    document
      .querySelectorAll(".square.selected")
      .forEach(item => {
        item.classList.remove("selected");
      });

    square.classList.add("selected");

  });

});


/*
   Download button feedback
*/

document.querySelectorAll(".download-btn, .big-download")
  .forEach(button => {

    button.addEventListener("click", () => {

      button.style.transform = "scale(.97)";

      setTimeout(() => {
        button.style.transform = "";
      }, 150);

    });

  });
