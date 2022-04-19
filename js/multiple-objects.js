function Hotel(name, rooms,booker){
    this.name = name;
    this.rooms=rooms;
    this.booker=booker;
    this.checkVailabity = function (){
        return this.rooms - this.booker;
    };
};
let quayHotel = new Hotel('Quay','40','25');
let parkHotel = new Hotel('Park','120','77');


let details1 = quayHotel.name +'rooms:';
details1+=quayHotel.checkVailabity();
let elHotel1=document.getElementById('hotel1');
elHotel1.textContent=details1;

let details2= parkHotel.name+'rooms';
details2+=parkHotel.checkVailabity();
let elHotel2=document.getElementById('hotel2');
elHotel2.textContent=details2;
