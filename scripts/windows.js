
function detectsize()
{
    var winWidth = this.window.innerWidth;
    if (winWidth < 600)
    {
        this.document.getElementById("main_menu").style.width = "0px";
        this.document.getElementById("content").style.marginLeft = '20px';
    }
    if (winWidth >= 600)
    {
        this.document.getElementById("main_menu").style.width = "220px";
        this.document.getElementById("content").style.marginLeft = '220px';
    }
}

detectsize();
window.addEventListener("resize", function(){
    detectsize();
});