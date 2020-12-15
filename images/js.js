$(document).ready(function(){
		$('.item li:nth-child(1)').mouseover(function(){
			$('.item li:nth-child(1)').addClass('active');
			$('.item li:nth-child(2)').removeClass('active');
			$('.item li:nth-child(3)').removeClass('active');
			$('.item li:nth-child(4)').removeClass('active');
			$('.item li:nth-child(5)').removeClass('active');

		})
		$('.item li:nth-child(2)').mouseover(function(){
			$('.item li:nth-child(2)').addClass('active');
			$('.item li:nth-child(1)').removeClass('active');
			$('.item li:nth-child(3)').removeClass('active');
			$('.item li:nth-child(4)').removeClass('active');
			$('.item li:nth-child(5)').removeClass('active');

		})
		$('.item li:nth-child(3)').mouseover(function(){
			$('.item li:nth-child(3)').addClass('active');
			$('.item li:nth-child(2)').removeClass('active');
			$('.item li:nth-child(1)').removeClass('active');
			$('.item li:nth-child(4)').removeClass('active');
			$('.item li:nth-child(5)').removeClass('active');

		})
		$('.item li:nth-child(4)').mouseover(function(){
			$('.item li:nth-child(4)').addClass('active');
			$('.item li:nth-child(2)').removeClass('active');
			$('.item li:nth-child(3)').removeClass('active');
			$('.item li:nth-child(1)').removeClass('active');
			$('.item li:nth-child(5)').removeClass('active');

		})
		$('.item li:nth-child(5)').mouseover(function(){
			$('.item li:nth-child(5)').addClass('active');
			$('.item li:nth-child(2)').removeClass('active');
			$('.item li:nth-child(3)').removeClass('active');
			$('.item li:nth-child(4)').removeClass('active');
			$('.item li:nth-child(1)').removeClass('active');

		})
		
	})