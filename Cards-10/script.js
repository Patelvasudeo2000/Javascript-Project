fetch("https://api.github.com/users")
 .then((res)=> res.json())
 .then((data)=>{
    // console.log(data[0].html_url);

    document
    .getElementById("profileimage1")
    .setAttribute("src",data[1] .avatar_url)

    document.getElementById("username1").innerText=data[1].login;

    document.getElementById("visitprofile1")
    .setAttribute("href",data[1] .html_url);
// ------------------------------------------------------------------------------

document
.getElementById("profileimage2")
.setAttribute("src",data[2] .avatar_url)

document.getElementById("username2").innerText=data[2].login;

document.getElementById("visitprofile2")
.setAttribute("href",data[2] .html_url);

// ------------------------------------------------------------------------------

document
.getElementById("profileimage3")
.setAttribute("src",data[3] .avatar_url)

document.getElementById("username3").innerText=data[3].login;

document.getElementById("visitprofile3")
.setAttribute("href",data[3] .html_url);

// ------------------------------------------------------------------------------

document
.getElementById("profileimage4")
.setAttribute("src",data[4] .avatar_url)

document.getElementById("username4").innerText=data[4].login;

document.getElementById("visitprofile4")
.setAttribute("href",data[4] .html_url);


// ------------------------------------------------------------------------------

document
.getElementById("profileimage5")
.setAttribute("src",data[5] .avatar_url)

document.getElementById("username5").innerText=data[5].login;

document.getElementById("visitprofile5")
.setAttribute("href",data[5] .html_url);

// ------------------------------------------------------------------------------

document
.getElementById("profileimage6")
.setAttribute("src",data[6] .avatar_url)

document.getElementById("username6").innerText=data[6].login;

document.getElementById("visitprofile6")
.setAttribute("href",data[6] .html_url);

// ------------------------------------------------------------------------------

document
.getElementById("profileimage7")
.setAttribute("src",data[7] .avatar_url)

document.getElementById("username7").innerText=data[7].login;

document.getElementById("visitprofile7")
.setAttribute("href",data[7] .html_url);

// ------------------------------------------------------------------------------

document
.getElementById("profileimage8")
.setAttribute("src",data[8] .avatar_url)

document.getElementById("username8").innerText=data[8].login;

document.getElementById("visitprofile8")
.setAttribute("href",data[8] .html_url);

// ------------------------------------------------------------------------------

document
.getElementById("profileimage8")
.setAttribute("src",data[8] .avatar_url)

document.getElementById("username8").innerText=data[8].login;

document.getElementById("visitprofile8")
.setAttribute("href",data[8] .html_url);

// ------------------------------------------------------------------------------

document
.getElementById("profileimage9")
.setAttribute("src",data[9] .avatar_url)

document.getElementById("username9").innerText=data[9].login;

document.getElementById("visitprofile9")
.setAttribute("href",data[9] .html_url);

// ------------------------------------------------------------------------------

document
.getElementById("profileimage10")
.setAttribute("src",data[10] .avatar_url)

document.getElementById("username10").innerText=data[10].login;

document.getElementById("visitprofile10")
.setAttribute("href",data[10] .html_url);


});


