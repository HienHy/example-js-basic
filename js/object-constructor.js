let hotel= new Object();

hotel.name='Park';
hotel.rooms = 120;
hotel.booked=77;
hotel.checkValidity = function (){
    return this.rooms - this.booked;
};

let elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

let elRooms = document.getElementById('rooms');
elRooms.textContent=hotel.checkValidity();
