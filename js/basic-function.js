
let msg = 'Sign up to receive or newsletter for 10% off';
function updateMessage(){
    let el = document.getElementById('message');
    el.textContent = msg;
}
updateMessage();
function getArea(width,height) {
    let el = document.getElementById('message');
    el.textContent = "Area is " + width * height;
}
getArea(3,5);