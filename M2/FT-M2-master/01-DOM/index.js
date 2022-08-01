let divs = document.getElementsByTagName('div');
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', function (e) {
    // console.log(e);
    console.log('Click: ' + e.target.innerText);
  });
}
