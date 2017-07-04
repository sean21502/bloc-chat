(function() {
	function Message($firebaseArray, $cookies) {
    	var Message = {};
    	var ref = firebase.database().ref().child("Messages");
		var messages = $firebaseArray(ref);
		
		Message.getByRoomId = function(roomId) {
       		var filteredRef = ref.orderByChild("roomId").equalTo(roomId);
			var roomMessages = $firebaseArray(filteredRef);
			return roomMessages;
    	};
		
		Message.send = function(newMessage, roomId) {
			var timestamp = new Date().toDateString();
			var currentUser = $cookies.get('blocChatCurrentUser');
			var messageObj = {content: newMessage,
							  roomId: roomId,
							  sentAt: timestamp,
							  username: currentUser
							 };
			
			messages.$add(messageObj)
		}

    	return Message;
  	}

  	angular
    	.module('blocChat')
    	.factory('Message', ['$firebaseArray', '$cookies', Message]);
})();