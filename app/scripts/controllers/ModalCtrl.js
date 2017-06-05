(function() {
	function ModalCtrl($uibModal, Room) {
		this.open = function() {
			
			var modalCancel = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCancelCtrl as modalInstance'
            })
			
			modalCancel.result.then(function(room) {
				Room.add(room)
    		});
 		}
	}
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();