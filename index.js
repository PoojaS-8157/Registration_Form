var firstNamevalue;
var lastNameValue;
var companyValue;
var EmailValue;
var PhoneValue;
var AreaCodeValue;
var selectValue;
var studentExperienceValue = "Yes";

var firstName = (value) => {
    firstNamevalue = value;
}
var lastName = (value) => {
    lastNameValue = value;
}
var companyName = (value) => {
    companyValue = value;
}
var EmailId = (value) => {
    EmailValue = value;
}
var PhoneNo = (value) => {
    PhoneValue = value;
}
var AreaCode = (value) => {
    AreaCodeValue = value;
}
var optionValue = (value) => {
    selectValue = value;
}
var studentExperience = (value) => {
    studentExperienceValue = value;
}


var UserInfo = () => {
   
    var myObj = {
        "Name": firstNamevalue +" "+ lastNameValue,
        "CompanyName": companyValue,
        "EmailId": EmailValue,
        "PhomneNo": "+91"+PhoneValue,
        "SubjectValue": selectValue,
        "AreYouBeginner": studentExperienceValue
    }
    localStorage.setItem("UserInfo", JSON.stringify(myObj));
    

    // alert("Name :" + " " + firstNamevalue + lastNameValue + " " +
    //     "\nCompany Name :" + " " + companyValue + "\nEmail Id :" + " " + EmailValue
    //     + "\nPhone No :" + " " +"+91"+ PhoneValue + "\nSubject Value :" + " " + selectValue + "\nAre you beginner :" + " " + studentExperienceValue);
        // location.replace("http://127.0.0.1:5500/ThankYou.html");
}

var clearScreen = () => {
    // firstNamevalue = " ";
    // lastNameValue = " ";
    // companyValue = " ";
    // EmailValue = " ";
    // AreaCodeValue = " ";
    // PhoneValue = " ";
    // selectValue = "--Choose option";
    // studentExperienceValue = "Yes";
    location.reload();

}