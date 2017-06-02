(function() {
	function RoomCtrl(Room) {
	
		this.Room = Room;
	}

	
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();