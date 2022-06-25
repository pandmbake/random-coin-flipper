function spinCoin (event) {
    document.getElementById("spin").style.display = 'flex';
    document.getElementById("heads").style.display = 'none';
    document.getElementById("tails").style.display = 'none';
    document.getElementById("button").style.display = 'none';
    setTimeout(flip, 2000);
}


function flip (event) {
    let randomSide = Math.floor(Math.random() * 2);
      if (randomSide == 1) {
        document.getElementById("heads").style.display = 'flex';
        document.getElementById("tails").style.display = 'none';
        document.getElementById("spin").style.display = '';
        document.getElementById("button").style.display = 'flex';
        
      } else {
        document.getElementById("tails").style.display = 'flex';
        document.getElementById('heads').style.display = 'none';
        document.getElementById("spin").style.display = '';
        document.getElementById("button").style.display = 'flex';
        
      }
   
    }
