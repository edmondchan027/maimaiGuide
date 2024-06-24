
var parts = (window.location.pathname).split('/');
var currentpage = parts.pop(parts);

/* CHANGE HERE IF YOU WANT TO EDIT THE MENU */

const menu = [
    ["maimaiGuide_main.html", "Home"],
    ["maimaiGuide_BeforeYouStart.html", "Before You Start"],
    ["maimaiGuide_GameModes.html", "Game Modes"],
    ["maimaiGuide_AboutAuthors.html", "About Authors"],
    ["maimaiGuide_OfficialLinks.html", "Official Links"]
];
const submenu = [
    ["maimaiGuide_Beginner.html", "Beginner Tips"],
    ["maimaiGuide_Intermediate.html", "Intermediate Tips"],
    ["maimaiGuide_Advanced.html", "Advanced Tips"]
];

/* helper functions */

function expand(e)
{
    var dropdownContent = this.document.getElementById("how-to-play-menu");
    console.log(dropdownContent);
    if (dropdownContent.style.display === "block")
        dropdownContent.style.display = "none";
    else
        dropdownContent.style.display = "block";
}
function renderMenu(start, end, menu)
{
    let content = "";
    for (let i = start; i < end + 1; i ++)
    {
        if (menu[i][0] == currentpage)
            content += '<li class="active"><a>'+menu[i][1]+'</a><li>';
        else
            content += '<li><a href="'+menu[i][0]+'">'+menu[i][1]+'</a></li>';
    }
    return content;
}

/* rendering */

var html = "";
html += renderMenu(0, 1, menu);
/* Drop down submenu render */
html += '<li><a style="width:70%" href="maimaiGuide_HowToPlay.html">How To Play</a><button class="dropdown-btn" onclick="expand(this)">v</button></li>';
html += '<div id="how-to-play-menu" class="dropdown-div">';
html += renderMenu(0, submenu.length - 1, submenu);
html += '</div>'
/* Continue rendering the main menu */
html += renderMenu(2, menu.length - 1, menu);

document.getElementById('main_menu').innerHTML = html;