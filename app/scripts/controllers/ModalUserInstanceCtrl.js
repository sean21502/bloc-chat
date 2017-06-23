(function() {
    function ModalUserInstanceCtrl($uibModalInstance) {
        this.ok = function() {
            $uibModalInstance.close(this.newUser)
		}
	}
    angular
        .module('blocChat')
        .controller('ModalUserInstanceCtrl', ['$uibModalInstance', ModalUserInstanceCtrl])
})();