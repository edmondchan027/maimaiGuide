
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
            ["Beg-Options.html","1"],
            ["Beg-Options.html","2"],
            ["Beg-Options.html","3"],
            ["Beg-Options.html","4"],
            ["Beg-Options.html","5"]
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
    ["Advanced.html", "Beginners",
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

/* Rendering */

renderMenu(menu.length,menu);

/* helper functions */

/* drop down menu button click */
function DropdownClick(e,listnum)
{

    console.log(listnum);
    var DropDownButton = this.document.getElementById("Button"+listnum);
    var Submenu = this.document.getElementById("submenu"+listnum);
    html="";

    //Expand submenu
    if(DropDownButton.innerHTML=='v'){
        DropDownButton.innerHTML='^';
        for(let i=0;i<menu[listnum][2].length;i++){
            html += '<li><a href='+menu[listnum][2][i][0]+'>'+menu[listnum][2][i][1]+'</a></li>';
        }
        Submenu.innerHTML += html;
    }
    //Contract menu
    else{
        DropDownButton.innerHTML='v';
        Submenu.innerHTML = "";
    }

    html ="";


}

function renderMenu(menulength, menulist)
{
    let html = "";

    //render every array list in menu
    for (let i=0;i<menulength;i++){

        console.log("menulength = " + menulength + " i = "+ i + " menulist[i].length = " + menulist[i].length);

        //adding list item
        html += '<li '

        //checks if the page is a current page
        if(menu[i][0] == currentpage){
            //add active class
            html += 'class="active">';
        }
        else{
            //do not add active class
            html += '>';
        }

        //adding href
        html += '<a href='+menu[i][0]+'>'+menu[i][1]+'</a>';
        
        //add a button if theres a submenu
        if(menu[i].length == 3){
            html += '<button class="dropdown-btn" id=Button'+i+' onclick="DropdownClick(this,'+ i +')">v</button></a> <ul id="submenu'+i+'"></ul>';
        }

        html += '</li>';
        
        document.getElementById('main_menu').innerHTML += html;
        html = ""; 
    }

}


