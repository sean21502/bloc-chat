(function() {
    function ModalUserInstanceCtrl($uibModalInstance) {
        this.ok = function() {
            if(this.currentUser !== "" && this.currentUser !== undefined){
			   $uibModalInstance.close(this.currentUser);
			}
		}
	}
    angular
        .module('blocChat')
        .controller('ModalUserInstanceCtrl', ['$uibModalInstance', ModalUserInstanceCtrl])
})();