(function() {
	function RoomCtrl() {
		this.roomList = "room";
    }

	
    angular
        .module('blocChat')
        .controller('RoomCtrl', [RoomCtrl]);
})();