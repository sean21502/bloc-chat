(function() {
	function Message($firebaseArray) {
    	var Message = {};
    	var ref = firebase.database().ref().child("Messages");
		var messages = $firebaseArray(ref);
		
		Message.getByRoomId = function(roomId) {
       		var filteredRef = ref.orderByChild("roomId").equalTo(roomId);
			var roomMessages = $firebaseArray(filteredRef);
			return roomMessages;
    	};

    	return Message;
  	}

  	angular
    	.module('blocChat')
    	.factory('Message', ['$firebaseArray', Message]);
})();