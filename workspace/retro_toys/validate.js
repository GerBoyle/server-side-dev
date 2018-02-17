

function validate() {
	//This code checks the first name and lastname are not empty
	 var first=$("input[name=firstname]").val();
	 var second = document.forms["myForm"]["lastname"].value;
	
	if (first == "") {
		$("input[name=firstname]").css({"background-color":"red"});
		document.forms["myForm"]["firstname"].style.backgroundColor = "red";
		alert("Please enter a first name");
	}
	
	if (second == "") {
		document.forms["myForm"]["lastname"].style.backgroundColor = "red";
		document.forms["myForm"]["lastname"].value = "Please Enter a value";
		alert("Please enter a last name");
	}
			
	//This code validates the radio buttons
	if ((document.forms["myForm"]["male"].checked == false) && 
		(document.forms["myForm"]["female"].checked == false)) {
			
			alert("Please Select a Gender");
			
		}
		
	//This code checks that the user has entered a number for number of children
	var numChild = document.forms["myForm"]["children"].value;
	if (isNaN(numChild)) { //isNaN is a special JS function that checks to see if something is a number
		
		alert("Please enter a number!");
	}
	else {
		
		alert("You have: " +(numChild) + " children"); //displays back number of children
	}
	
	
}

//Checks age of person and gives order warning if under 16 years old
function checkAge() {
	
	if (document.getElementById("s1").value == "10s") {
		 $("#panel1").slideDown("slow");
		
	}else {
		$("#panel1").slideUp("slow");
		
	}
	
}


function numChild() { //This activates when the checkbox yes is checked
	
	//Slides down next part of the form and asks for number of children
	 if (document.forms["myForm"]["yes"].checked == true) {
		 
		  $("#panel2").slideDown("slow");
		 
	 }
}

function validatePassword(){ //checks that both passwords are the same
    
  if((document.forms["myForm"].password.value) != (document.forms["myForm"].confirm_password.value)) {
	alert("Passwords do not match! Please enter passwords again");
  }
  else {
    alert("Passwords accepted");
  }
}
