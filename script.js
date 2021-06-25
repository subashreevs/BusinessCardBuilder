function clearSocials(){

    document.getElementById("github_show").style.display = "none";
    document.getElementById("linkedin_show").style.display = "none";
    document.getElementById("twitter_show").style.display = "none";
    document.getElementById("instagram_show").style.display = "none";
    document.getElementById("facebook_show").style.display = "none";
    document.getElementById("website_show").style.display = "none";

    if(document.getElementById("github").checked == true){
        document.getElementById("github_show").style.display = "block";
    }
    if(document.getElementById("linkedin").checked == true){
        document.getElementById("linkedin_show").style.display = "block";
    }
    if(document.getElementById("twitter").checked == true){
        document.getElementById("twitter_show").style.display = "block";
    }
    if(document.getElementById("instagram").checked == true){
        document.getElementById("instagram_show").style.display = "block";
    }
    if(document.getElementById("website").checked == true){
        document.getElementById("website_show").style.display = "block";
    }
    if(document.getElementById("facebook").checked == true){
        document.getElementById("facebook_show").style.display = "block";
    }
   
}

function checkBoxes(checkboxId){

    var cb = document.getElementById(checkboxId);
    
    if(cb.checked == true){
        document.getElementById(checkboxId+"_name").style.display = "inline";
        
        //alert(checkboxId)
        document.getElementById(checkboxId+"_show").style.display = "block";
        
    }
    else{
        document.getElementById(checkboxId+"_name").style.display="none";
    }
}


function updateName(){
    document.getElementById("card-name").innerHTML = document.getElementById("name").value ;
}

function updateWork(){
    document.getElementById("prof_loc_name").innerHTML = document.getElementById("work").value ;
}

function updateWorkplace(){
    document.getElementById("prof_loc_name").innerHTML += " | "+document.getElementById("workplace").value ;
}

function updateCity(){
    document.getElementById("prof_loc_name").innerHTML += " | "+document.getElementById("city").value ;
}

function updateCountry(){
    document.getElementById("prof_loc_name").innerHTML += ", "+document.getElementById("country").value ;
}

function updateDesc(){
    document.getElementById("desc_content").innerHTML = document.getElementById("description").value ;
}

function updatePhone(){
    document.getElementById("contact_no").innerHTML = document.getElementById("phone").value ;
}

function updateEmail(){
    document.getElementById("contact_mail").innerHTML = document.getElementById("email").value ;
}


function updateLinkedin(){
    document.getElementById("linkedin_display").innerHTML = " "+document.getElementById("linkedin_name").value ;
}

function updateGithub(){
    document.getElementById("github_display").innerHTML = " "+document.getElementById("github_name").value ;
}

function updateTwitter(){
    document.getElementById("twitter_display").innerHTML = " "+document.getElementById("twitter_name").value ;
}

function updateInstagram(){
    document.getElementById("instagram_display").innerHTML = " "+document.getElementById("instagram_name").value ;
}

function updateFacebook(){
    document.getElementById("facebook_display").innerHTML = " "+document.getElementById("facebook_name").value ;
}

function updateWebsite(){
    document.getElementById("website_display").innerHTML = " "+document.getElementById("website_name").value ;
}

function darkTheme(){
    document.getElementById("card").style.backgroundColor = "black";
    document.getElementById("card").style.color = "white";

}

function lightTheme(){
    document.getElementById("card").style.backgroundColor = "white";
    document.getElementById("card").style.color = "black";

}

function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}

