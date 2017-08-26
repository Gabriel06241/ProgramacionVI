$(document).ready(function(){
    
    function validateEmail(Email) {
    var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return $.trim(Email).match(pattern) ? true : false;
    }

    $("#btnsignup").click(function(){
    $('#login').fadeOut(100);
    $('#signup').fadeIn(1800);
    });

    $("#btnlogin").click(function(){
    $('#signup').css({display: "none"});
    $('#login').css({display: "block"});
    });

    $("#btnregister").click(function(){

    var objInfoRegister = new Object();
    var objInfoRegister1 = {};

    if($("#login_username").val() == ""){
        $("#login_username").css("border-color","#ff0000");
        $("#login_username").focus();
    }else{
        $("#login_username").css("border-style","none");
    }

    if(!validateEmail($("#email").val())){
        $.toaster({ priority : 'warning', title : 'Email', message : 'email incorrecto!'});
        $("#email").css("border-color","#ff0000");
        $("#email").focus();
    }else{
        $("#email").css("border-style","none");
    }
    });

    $("#btnstarted").click(function(){

    if($("#sign_username").val() == ""){
        $("#sign_username").css("border-color","#ff0000");
        $("#sign_username").focus();
    }else{
        $("#sign_username").css("border-style","none");
    } 
    
    if($("#sign_lastname").val() == ""){
        $("#sign_lastname").css("border-color","#ff0000");
        $("#sign_lastname").focus();
    }else{
        $("#sign_lastname").css("border-style","none");
    } 
    
    if(!validateEmail($("#email1").val())){
        $.toaster({ priority : 'warning', title : 'Email', message : 'email incorrecto!'});
        $("#email1").css("border-color","#ff0000");
        $("#email1").focus();
    }else{
        $("#email1").css("border-style","none");
    }
    });

    $("#confirmPassword").blur(function(){
    if($("#password").val() != $("#confirmPassword").val()){
        $.toaster({ priority : 'warning', title : 'Password', message : 'Contraseña no coinciden!'});
        $("#confirmPassword").css("border-color","#ff0000");
        $("#confirmPassword").focus();
    }else{
        $("#confirmPassword").css("border-color","green");
    }
    });
});