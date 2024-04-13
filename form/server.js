function formfilled(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var rollno = document.getElementById("rollno").value;
    var degree = document.getElementById("degree").value;
    var name_of_card = document.getElementById("name_of_card").value;
    if(name==""){
        document.getElementById("name").focus();
        alert("fill the name first !")
    } else if(age == ""){
        document.getElementById("age").focus();
        alert("fill the age !")
    } else if(rollno == ""){
        document.getElementById("rollno").focus();
        alert("fill the roll no !")
    } else if(degree == ""){
        document.getElementById("degree").focus();
        alert("fill the degree !")
    } else if(name_of_card ==""){
            document.getElementById("name_of_card").focus();
            alert("fill the card name !")
        }
    
    else {
    alert("form is filled successfully")
    }
}