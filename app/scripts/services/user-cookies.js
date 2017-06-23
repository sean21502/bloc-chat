(function() {
	function BlocChatCookies($cookies, $uibModal) {
    	var currentUser = $cookies.get('blocChatCurrentUser');
	  		if (!currentUser || currentUser === '') {
        
				var modalUser = $uibModal.open({
					templateUrl: '/templates/modalUsername.html',
            		controller: 'ModalUserInstanceCtrl as modalUserInstance'
				});
		 
		  /*var newUser = function(currentUser){
			  $cookies.put(blocChatCurrentUser, currentUser);
			  $window.alert("Welcome "+ currentUser);*/
				
				BlocChatCookies.result.this(function($cookies) {
				  	$cookies.get('blocChatCurrentUser');
    			});
			}
	}
	
  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();