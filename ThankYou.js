let x = localStorage.getItem('UserInfo');
console.log("Object Value is",JSON.parse(x));
let UserValue = JSON.parse(x);
console.log(UserValue);

document.getElementById("Info1").innerHTML ="User Name :"+" "+UserValue.Name;
document.getElementById("Info2").innerHTML ="Company :"+" "+UserValue.CompanyName;
document.getElementById("Info3").innerHTML ="Email :"+" "+UserValue.EmailId;
document.getElementById("Info4").innerHTML ="Phone Number :"+" "+UserValue.PhoneNo;
document.getElementById("Info5").innerHTML ="Subject :"+" "+UserValue.SubjectValue;
document.getElementById("Info6").innerHTML ="Are you beginner :"+" "+UserValue.AreYouBeginner;