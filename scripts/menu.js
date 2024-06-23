
var parts = (window.location.pathname).split('/');
var currentpage = parts.pop(parts);

/* CHANGE HERE IF YOU WANT TO EDIT THE MENU */
const menu = [
    ["maimaiGuide_main.html", "Home"],
    ["maimaiGuide_BeforeYouStart.html", "Before You Start"],

    ["maimaiGuide_GameModes.html", "Game Modes"],
    ["maimaiGuide_CabLocations.html", "Cab Locations"],
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
    var dropdownContent = e.nextElementSibling;
    if (dropdownContent.style.display === "block")
        dropdownContent.style.display = "none";
    else
        dropdownContent.style.display = "block";
}

var html = "";
for (let i = 0; i < 2; i ++)
{
    if (menu[i][0] == currentpage)
        html += '<a class="active">'+menu[i][1]+'</a>';
    else
        html += '<a href="'+menu[i][0]+'">'+menu[i][1]+'</a>';
}
/* Drop down submenu render */
html += '<a class="dropdown-btn" onclick="expand(this)">How To Play</a>';
html += '<div id="how-to-play-menu">';
for (let i = 0; i < submenu.length; i ++)
{
    if (submenu[i][0] == currentpage)
    {
        html += '<a class="active">'+submenu[i][1]+'</a>';
    }
    else
        html += '<a href="'+submenu[i][0]+'">'+submenu[i][1]+'</a>';
}
html += '</div>'
/* Continue rendering the main menu */
for (let i = 2; i < menu.length; i ++)
{
    if (menu[i][0] == currentpage)
        html += '<a class="active">'+menu[i][1]+'</a>';
    else
        html += '<a href="'+menu[i][0]+'">'+menu[i][1]+'</a>';
}

document.getElementById('main_menu').innerHTML = html;