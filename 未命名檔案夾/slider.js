
window.addEventListener("load", function(){

    let wrap = document.querySelector(".wrap");
    let curIndex = 0;
    //-----------------------------------------btnLeft.onclick
    document.getElementById("btnLeft").onclick = function(){
        curIndex--;
        wrap.style.left = -310*curIndex + "px";
        document.getElementById("btnRight").disabled = false;

        if(curIndex == 0){
            document.getElementById("btnLeft").disabled = true;
        }
    }
    //-----------------------------------------btnRight.onclick
    document.getElementById("btnRight").onclick = function(){
        curIndex++;
        wrap.style.left = -310*curIndex + "px";
        document.getElementById("btnLeft").disabled = false;
        if (curIndex == 5){
            document.getElementById("btnRight").disabled = true;
        }
    }
})
