var bool = true;
$('.photos-card-img').click(function(){
	$('.container-bg').removeClass('del');
});
$('.one').click(function(){
	if (bool == true) {
		$('.one').removeClass('del');
		bool = false;
	}
	else{
		$('.one').addClass('del');
		$('.container-bg').addClass('del');
		bool = true;
	}
});
$('.two').click(function(){
	if (bool == true) {
		$('.two').removeClass('del');
		bool = false;
	}
	else{
		$('.two').addClass('del');
		$('.container-bg').addClass('del');
		bool = true;
	}
});
$('.three').click(function(){
	if (bool == true) {
		$('.three').removeClass('del');
		bool = false;
	}
	else{
		$('.three').addClass('del');
		$('.container-bg').addClass('del');
		bool = true;
	}
});