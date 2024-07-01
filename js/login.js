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
            });      


           

            $(".login .user, .login .password").click(function(){
                $(".login .box").css({
                    borderRight: '1px solid #000',
                    borderTop: '1px solid #000',
                    borderLeft: '1px solid #000',
                });

                $(".login .box").last().css({
                    borderBottom: '1px solid #000',
                    
                })

                $(".login .bi-person").css({
                    color:'#000'
                })
                $(".login .bi-key").css({
                    color:'#000'
                })
            });

            
            
            // $(".login form").click(function(){
            //     $(".login .box").css({
            //         borderRight: '1px solid #ccc',
            //         borderTop: '1px solid #ccc',
            //         borderLeft: '1px solid #ccc',
            //     });

            //     $(".login .box").last().css({
            //         borderBottom: '1px solid #ccc',
                    
            //     })

            //     $(".login .bi-person").css({
            //         color:'#ccc'
            //     })
            //     $(".login .bi-key").css({
            //         color:'#ccc'
            //     })
            // });
        })
        
