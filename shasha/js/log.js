			function setCookie(name, value, expireDays){
				var expDate = new Date();
				expDate.setDate(expDate.getDate()+expireDays);
				document.cookie = name + "=" + escape(value) + ";expires=" + expDate.toGMTString();
			}
			function getCookie(name){
				var start = document.cookie.indexOf(name + '=');
				if(start != -1){
					start = start + name.length + 1;
					var end = document.cookie.indexOf(';', start);
					if (end == -1){end = document.cookie.length}
					return document.cookie.substring(start, end);
				}
				return "";
			}
			
			$(function(){
			$('#login').click(function() {
				$.ajax({
					type: "GET",
					url: 'http://127.0.0.1:8020/shasha/users.json',
					success: function(data, textStatus, jqxhr) {
						var usn = $('#username').val();
						var pwd = $('#password').val();
						if (data[usn] == pwd) {
							$.cookie("user", usn, {expires: 7});
							location.href = "index.html";
						} else {
							$('#res').html("用户名或密码错误");
						}
					},
					error: function(jqxhr, textStatus, errorDes) {
						$('#res').html("服务器返回错误：" + jqxhr.status);
					}
				});
			});
			})