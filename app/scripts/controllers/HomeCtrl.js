(function() {
	function HomeCtrl(Room) {
		this.mainTitle = "Bloc Chat";
		this.rooms = Room.all;
		
    }

	
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

