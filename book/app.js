elBooked = document.getElementById('elBooked')
elFree = document.getElementById('elFree')
elWrite = document.getElementById('elWrite')
elCalc = document.getElementById('elCalc')

let hotel = {
	name: 'Tula',
	rooms: 40,
	booked: 12,

	getBooked: function(){
		hotel.booked = parseInt(prompt('Введите кол-во занятых номеров'))
		console.log(hotel.rooms)
		console.log(hotel.booked)
		
		elBooked.textContent = hotel.booked
	},

	calcFreeRoom: function(){
		let free = hotel.rooms - hotel.booked
		console.log(free)
		elFree.textContent = free
	}
}



elWrite.addEventListener('click', hotel.getBooked)
elCalc.addEventListener('click', hotel.calcFreeRoom)



