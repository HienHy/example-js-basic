// function getArea(width,height) {
//     let el = document.getElementById('message');
//     el.textContent = "Area is " + width * height;
// }
// getArea(3,5);
let hotel = {
    name:'Quay',
    rooms: 40,
    booked:25,
    checkValidity :function () {
        return this.rooms-this.booked;

    }
};
let elName = document.getElementById('hotelName');
elName.textContent=hotel.name;
let elRooms = document.getElementById('rooms');
elRooms.textContent=hotel.checkValidity();