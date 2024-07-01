        $(function(){
            $(".login form").submit(function(event){
                let userinput = $(".login form .box .user").val()
                let keyinput = $(".login form .box .password").val()
                
                if(userinput.trim() === '' || keyinput.trim() === ''){
                    event.preventDefault();
                    alert("사용자의 아이디와 비밀번호를 입력하세요.");
                    $(".login form .box .user").val('');
                    $(".login form .box .password").val('');
                }

                
            })        
        
        })
        
