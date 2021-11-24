let S =0;
S = window.prompt("donner un nombre second ");
S = Number (S);

let Min=0;
let H=0;

H = Math.floor(S / 3600);
Min = Math.floor(((S % 3600) /60));
S = Math.floor((( S % 3600 ) % 60 ));

document.write("heur = " + H + " Min = " + Min + " S = " + S);