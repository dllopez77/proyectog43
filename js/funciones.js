$(document).ready(function(){
    $("#tipcliente").change(function(){
        var x=$("#tipcliente").val();
        if(x==1){
            $("#rangomil").css(
            'visibility','visible'
            );
            $("#observacion").css(
            'visibility','visible'
            );
            $("#rangofunci").css(
            'visibility','hidden'
            );
        }
        if(x==2)
        {
            $("#rangofunci").css(
            'visibility','visible'
            );
            $("#observacion").css(
            'visibility','visible'
            );
            $("#rangomil").css(
            'visibility','hidden'
            );
        }
        else{

        }
        //alert(x);
    });$("#tipcliente").change(function(){
            var x=$("#tipcliente").val();
            if(x==1){
                $("#rangomil").css(
                'visibility','visible'
                );
                $("#observacion").css(
                'visibility','visible'
                );
                $("#rangofunci").css(
                'visibility','hidden'
                );
            }
            if(x==2)
            {
                $("#rangofunci").css(
                'visibility','visible'
                );
                $("#observacion").css(
                'visibility','visible'
                );
                $("#rangomil").css(
                'visibility','hidden'
                );
            }
            else{

            }
            //alert(x);
        });





  });