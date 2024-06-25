
var parts = (window.location.pathname).split('/');
var currentpage = parts.pop(parts);

/* CHANGE HERE IF YOU WANT TO EDIT THE MENU */

/* Main menu list*/
// [Html file , Display text]
// or, if there will be submenu
// [Html file , Displaytext , [submenulist]]
// Sub menu follows the excact format

const menu = [
    //Home tab
    ["Home.html", "Home"],
    //Before you play tab
    ["BeforeYouPlay.html", "Before You Play"],
    //Beginner tab
    ["Beginner.html", "Beginners",
        [
            //Beginner Submenu tab
            ["Beg-Options.html","Recommended options"],
            ["Beg-Optons2.html","2"]
        ]
    ],
    //Intermediate tab
    ["Intermediate.html", "Intermediate",
        [
            //Intermediate Submenu tab
            ["Int-Options.html","Recommended options"]
        ]
    ],
    //Advanced tab
    ["Advanced.html", "Advanced",
        [
            //Beginner Submenu tab
            ["Adv-Options.html","Recommended options"]
        ]
    ],
    //Etiquettes tab
    ["Etiquettes.html","Arcade Etiquettes"],
    //AboutAuthors tab
    ["AboutAuthors.html","About Authors"],
    //OfficialLinks tab
    ["OfficialLinks.html","Official links"],
    //Contacts tab
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

/* Rendering */

document.getElementById('main_menu').innerHTML = renderMenu(menu.length,menu);
var current = document.getElementById('main_menu').getElementsByClassName('active');
if(current[0].parentElement.className == 'submenu'){
    current[0].parentElement.style.display = 'inline-block';
}
else if (current[0].querySelector('.submenu')){
    current[0].querySelector('.submenu').style.display = 'inline-block';
}