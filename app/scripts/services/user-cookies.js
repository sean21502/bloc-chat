(function() {
	function BlocChatCookies($cookies, $uibModal) {
    	var currentUser = $cookies.get('blocChatCurrentUser');
	  		if (!currentUser || currentUser === '') {
        
				var modalUser = $uibModal.open({
					templateUrl: '/templates/modalUsername.html',
            		controller: 'ModalUserInstanceCtrl as modalUserInstance'
				});
				
				modalUser.result.then(function(username) {
				  	$cookies.put('blocChatCurrentUser', username);
    			});
				
				
			}
	}
	
  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();


