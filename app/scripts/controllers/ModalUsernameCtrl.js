(function() {
	function ModalUsernameCtrl($uibModal, BlocChatCookies) {
		this.open = function() {
			
			/*var modalCancel = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCancelCtrl as modalInstance'
            })
			
			modalCancel.result.then(function(room) {
				Room.add(room)
    		});*/
 		}
	}
    angular
        .module('blocChat')
        .controller('ModalUsernameCtrl', ['$uibModal', 'BlocChatCookies', ModalUsernameCtrl]);
})();