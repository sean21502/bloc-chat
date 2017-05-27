(function() {
	function HomeCtrl() {
		this.mainTitle = "Bloc Chat";
    }

	
    angular
        .module('blocChat')
        .controller('HomeCtrl', HomeCtrl);
})();