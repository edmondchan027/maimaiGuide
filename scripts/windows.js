
function detectsize()
{
    var winWidth = this.window.innerWidth;
    if (winWidth < 600)
    {
        this.document.getElementById("main_menu").style.display = "none";
        this.document.getElementById("content").style.marginLeft = '20px';
    }
    if (winWidth >= 600)
    {
        this.document.getElementById("main_menu").style.display = "block";
        this.document.getElementById("content").style.marginLeft = '220px';
    }
}

detectsize();
window.addEventListener("resize", function(){
    detectsize();
});