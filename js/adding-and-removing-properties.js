let hotel={
    name:'Park',
    rooms:120,
    booked:77,

};
hotel.gym = true;
hotel.pool = false;
delete hotel.booked;



let elName = document.getElementById('hotelName');
elName.textContent= hotel.name;

let elPool= document.getElementById('pool');
elPool.className=hotel.pool;


let elGym=document.getElementById('gym');
elGym.className=hotel.gym;