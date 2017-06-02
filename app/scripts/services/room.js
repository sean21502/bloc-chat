(function() {
	function Room($firebaseArray) {
    	var Room = {};
    	var ref = firebase.database().ref().child("Rooms");
    	var rooms = $firebaseArray(ref);

    	Room.all = rooms;
		
		Room.add = function(room) {
			$scope.data.child('Rooms').$add({
    			name: name
  			});
    }

    	return Room;
  	}
	angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();