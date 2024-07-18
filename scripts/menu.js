
var parts = (window.location.pathname).split('/');
var currentpage = parts.pop(parts);

/* CHANGE HERE IF YOU WANT TO EDIT THE MENU */

/* Main menu list */
// [Html file , Display text]
// or, if there will be submenu
// [Html file , Displaytext , [submenulist]]
// Sub menu follows the excact format

const menu = [
    ["Home.html", "Home"],
    ["BeforeYouPlay.html", "Before You Play"],
    ["Beginner.html", "Beginners",
        [
            ["Beg-Options.html","Recommended options"],
            ["Beg-Optons2.html","2"]
        ]
    ],
    ["Intermediate.html", "Intermediate",
        [
            ["Int-Options.html","Recommended options"]
        ]
    ],
    ["Advanced.html", "Advanced",
        [
            ["Adv-Options.html","Recommended options"]
        ]
    ],
    ["Etiquettes.html","Arcade Etiquettes"],
    ["AboutAuthors.html","About Authors"],
    ["OfficialLinks.html","Official links"],
    ["Contacts.html","Contacts"]
];

/* drop down menu button click */
function DropdownClick(e)
{
    var list = e.nextElementSibling;
    if (list.style.display == "none"){
        list.style.display = "inline-block";
        e.textContent = "^";
    }
    else {
        list.style.display = "none";
        e.textContent = "v";
    }
}

function renderMenu(menulength, menulist)
{
    let html = "";

    //render every array list in menu
    for (let i=0;i<menulength;i++){
        //checks if the page is a current page
        if(menu[i][0] == currentpage){
            html += '<li class="active">';
        }
        else{
            html += '<li>';
        }

        //adding href
        html += '<a href='+menu[i][0]+'>'+menu[i][1]+'</a>';
        
        //if there is a submenu
        if(menu[i].length == 3){
            html += '<button class="dropdown-btn" onclick="DropdownClick(this)">v</button><ul class="submenu" style="display:none">';
            for (let j=0; j<menu[i][2].length; j++){
                if(menu[i][2][j][0] == currentpage){
                    html += '<li class="active">';
                }
                else{
                    html += '<li>';
                }
                html += '<a href='+menu[i][2][j][0]+'>'+menu[i][2][j][1]+'</a></li>';
            }
            html += '</ul>';
        }
        html += '</li>';
    }
    return html;
}

function togglemenu() {
    var menuwidth = getComputedStyle(document.querySelector("#main_menu")).width;
    console.log(menuwidth);
    if (menuwidth == '220px') {
        document.getElementById("main_menu").style.width = "0px";
        document.getElementById("content").style.marginLeft = '20px';
    }
    else {
        document.getElementById("main_menu").style.width = "220px";
        document.getElementById("content").style.marginLeft = '220px';
    }
}

/* Rendering */

var content = ""
content += '<li><button class="menu-btn" onclick="togglemenu()">show</button></li>';
content += renderMenu(menu.length,menu);
document.getElementById('main_menu').innerHTML = content;

// if the active page is within a submenu, or if there is a submenu within the active page, show submenu
var current = document.getElementById('main_menu').getElementsByClassName('active');
if(current[0].parentElement.className == 'submenu'){
    current[0].parentElement.style.display = 'inline-block';
    current[0].parentElement.previousElementSibling.textContent = "^";
}
else if (current[0].querySelector('.submenu')){
    current[0].querySelector('.submenu').style.display = 'inline-block';
    current[0].querySelector('.dropdown-btn').textContent = "^";
}