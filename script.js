function gotoPage(id){
  document.querySelectorAll('.page').forEach(p=>p.style.display='none');
  document.getElementById(id).style.display='block';
}

function closeSite(){
  document.body.innerHTML = "<h1 style='text-align:center;margin-top:40vh;font-size:60px;'>💔</h1>";
}

let growth = 1;
function growYes(){
  growth += (growth===1 ? 1 : 0.15);
  document.getElementById('yesBtn').style.transform = `scale(${growth})`;
}

window.onload = () => {
  const pics = [
    "images/0ba5b3e5fd495d7b26a9348f30522d61.jpg",
    "images/185d4f094b4b7dfe5f4a6718b2cbbdec.jpg",
    "images/385bcdacc822ffc608817ad617a726d1.jpg",
    "images/73f58c3986513b11b41774e77700e210.jpg",
    "images/7493a04bc4d9eb8e0938371e288d5f79.jpg",
    "images/e798a622f9e85915df7f0aa804bffd00.jpg",
    "images/e95667b8e81ef6d132ba1a6eeb1f1fa1.jpg",
    "images/eefbef3b5c4823a26374a64a91c1df25.jpg"
  ];
  document.querySelectorAll('.dekor-foto').forEach(img=>{
    img.src = pics[Math.floor(Math.random()*pics.length)];
  });
};
