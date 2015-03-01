
$(document).ready(function(){

				setTimeout(slide, 2000);

				function slide() {
					var fistImg = $("#horizontal .slides .drawer img:first");

					fistImg.animate({"margin-left":"-600px"},1000, function (){
						fistImg.appendTo("#horizontal .slides .drawer");
						fistImg.css({"margin-left":"0px"});

						setTimeout(slide, 2000);
					});
				}
			});

			$(document).ready(function () {
				console.log('here we go');
				
				setTimeout(slide, 2000);
				
				//play
				function slide() {
				
				//set and get
				var firstIMG = $('#vertical .slides img:first');

				//function
				firstIMG.animate({"margin-top":"-400px"},1000, function () {
					// console.log('I am working');
					firstIMG.appendTo('#vertical .slides');
					firstIMG.css({"margin-top":"0px"});

					// slide();
					setTimeout(slide, 2000);
				});
				//triggers
				}
			});
	