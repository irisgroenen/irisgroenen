// create top menu
const nav_ul = 
`<ul id="navlist">
    <!--li><a href="./test.html">test</a></li-->
    <li><a href="./index.html">home</a></li>
    <li><a href="./characters.html">characters</a></li>
    <li><a href="./lexicon.html">lexicon</a></li>
    <li><a href="./locations.html">locations</a></li>
    <li><a href="./organisations.html">organisations</a></li>
    <li><a href="./ships.html">ships</a></li>
</ul>` 
document.querySelector('#menu').innerHTML = nav_ul

// create things based on title
const doctitle = document.title

if (doctitle.includes('Lexicon')) {
    // create lexicon alphabet submenu
    // 65-90
    let subnav_lexicon = `<ul id="subnav_lexicon">`
    for (let i = 65; i < 91; i++) {
        subnav_lexicon += `
        <li><a href="#${String.fromCharCode(i)}">${String.fromCharCode(i)}</a></li>`
    }
    subnav_lexicon += `</ul>`

    document.querySelector('#sidebar').innerHTML += subnav_lexicon
}

// create side bar menu