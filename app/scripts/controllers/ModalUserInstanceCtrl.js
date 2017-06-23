(function() {
    function ModalUserInstanceCtrl($uibModalInstance) {
        this.ok = function() {
            $uibModalInstance.close(this.currentUser)
		}
	}
    angular
        .module('blocChat')
        .controller('ModalUserInstanceCtrl', ['$uibModalInstance', ModalUserInstanceCtrl])
})();