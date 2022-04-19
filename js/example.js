(function () {
    let hotel = {
        name: 'Park',
        roomRate: 240,
        discount: 15,
        offerPrice: function () {
            let offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }

    };
    let hotelName, roomRate, specialRate;

    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');
}
)

