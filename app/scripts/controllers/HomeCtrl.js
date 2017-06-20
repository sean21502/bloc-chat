(function() {
	function HomeCtrl(Room, Message, $scope) {
		this.mainTitle = "Bloc Chat";
		this.rooms = Room.all;
		/*this.send = send;*/
		
		var changeRooms = function(room) {
			$scope.currentRoom = room;
			$scope.currentMessages = Message.getByRoomId($scope.currentRoom.$id);
		}
		this.changeRooms = changeRooms;
	
    }

	
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','Message','$scope', HomeCtrl]);
})();

