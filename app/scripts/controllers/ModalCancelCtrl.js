(function() {
    function ModalCancelCtrl($uibModalInstance) {
        this.cancel = function() {
            $uibModalInstance.dismiss('dismiss')
        }
		this.ok = function() {
            $uibModalInstance.close(this.room)
		}
	}
    angular
        .module('blocChat')
        .controller('ModalCancelCtrl', ['$uibModalInstance', ModalCancelCtrl])
})();