elBooked = document.getElementById('elBooked')
elFree = document.getElementById('elFree')
elWrite = document.getElementById('elWrite')
elCalc = document.getElementById('elCalc')

let hotel = {
	name: 'Tula',
	rooms: 40,
	booked: 12,

	getBooked: function(){
		this.booked = parseInt(prompt('Введите кол-во занятых номеров'))
		console.log(this.booked)
		
		elBooked.textContent = this.booked
	},

	calcFreeRoom: function(){
		let free = this.rooms - this.booked
		console.log(free)
		elFree.textContent = free
	}
}

elWrite.addEventListener('click', hotel.getBooked)
elCalc.addEventListener('click', hotel.calcFreeRoom)



