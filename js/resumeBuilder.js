/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio ={
	 "name":"Manoj Kumar",
	 "role":"Software Developer",
	 "contact":{
		 "mob": "9782584854",
		 "email": "mjkiid2@gmail.com",
		 "github": "mjsuthar",
		 "city":"Bangaluru"
	 },
	 "image":"images/fry.jpg",
	 "welcome_note":"This is my resume.",
	 "skills":["java","HTML","CSS","Javascript."]
 }
 
 var education = {
	 "school": [
	 {
		 "name": "Gandhi Bal Mandir Sr. Sec. School",
		 "city": "Jaisalmer, (Raj)",
		 "degree": "Master",
		 "majors": ["Physics","Chemistry","Math"],
		 "date" : 2012,
		 "url": "http://www.google.com"
	 },
	 {
		 "name": "Govt. Engineering College Bikaner, Rajasthan",
		 "city": "Bikaner, (Raj)",
		 "degree": "B.Tech",
		 "major": ["CSE"],
		 "date": 2017,
		 "url": "http://www.ecb.ac.in"
		 
	 }
	 ],
	 "onlineCouurse": [
	 {
		 "title": "JavaScript Crash Course",
		 "school": "Udacity",
		 "date": 2017,
		 "url": "http://www.udacity.com/course/ud804"
	 }
	 ]
 }
 
 
 var work = {
	 "jobs":[
	 {
		"employer": "Planet Express",
		"title": "Delivery Boy",
		"date" : "feb 1, 2014 - Future",
		"city": "Bikaner",
		"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	 },
	 {
		 "employer": "Domino's",
		 "title": "Delivery Boy",
		 "date": "2013 - January 1, 2014",
		 "city": "Bikaner",
		 "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
	 }
	 ]
 }
 
 
 
 var projects = {
	 "projects":[
	 {
		 "title": "College App",
		 "dates": "2017",
		 "description": "This is my first project based on Java and JDBC. here we can see student result using their unique ID. The result will show us based on student all subject marks. I used Java , JDBC, SQl server technology and ecllips tools.",
		 "image":[
			"images/fry1.jpg",
			"images/project_2.jpg",
			"images/project_3.jpg"
		 ]
	 },
	 {
		 "title": "All in One",
		 "dates" : "2017",
		 "description": "This is JDBC based project were we can select, insert, update and delete student details. in this project we used java, JDBC and SQL server (for storing Data).",
		 "image":[
			"images/project2.jpg"
		 ]
	 }
	 ]
 }
 
 
 
 var formattedName = HTMLheaderName.replace("%data%",bio.name);
 var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
 
 var formattedPic = HTMLbioPic.replace("%data%",bio.image);
 var formattedMob = HTMLmobile.replace("%data%",bio.contact.mob);
 var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
 var formattedCity = HTMLlocation.replace("%data%",bio.contact.city);
 var formattedWelcom = HTMLwelcomeMsg.replace("%data%",bio.welcome_note);
 var formattedGithub = HTMLgithub.replace("%data%",bio.contact.github);
 
 
 
 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 $("#header").prepend(formattedPic);
 $("#topContacts").append(formattedMob);
 $("#topContacts").append(formattedEmail);
 $("#topContacts").append(formattedGithub);
 $("#topContacts").append(formattedCity);
 $("#header").append(formattedWelcom)
 
/*
*
*skills
*
*/ 
 
 if(bio.skills.length > 0){
	 $("#header").append(HTMLskillsStart);
	 bio.skills.forEach(function(i){
		var formattedSkills = HTMLskills.replace("%data%",i);
		$("#skills").append(formattedSkills);
	 });
	 
	
 }
 
 /*
 *
 *work
 *
 */

if(work.jobs.length > 0){
	$("#workExperience").append(HTMLworkStart);
	
	work.jobs.forEach(function(i){
		var formattedworkEmployer = HTMLworkEmployer.replace("%data%",i.employer);
		var formattedworkTitle = HTMLworkTitle.replace("%data%",i.title);
		var fromattedEmpTitle = formattedworkEmployer + formattedworkTitle;
		var formattedworkDate = HTMLprojectDates.replace("%data%",i.date);
		var formattedworkLocation = HTMLworkLocation.replace("%data%",i.city);
		var formattedworkDescription = HTMLworkDescription.replace("%data%",i.description);
		
		$(".work-entry:last").append(fromattedEmpTitle);
		$(".work-entry:last").append(formattedworkDate);
		$(".work-entry:last").append(formattedworkLocation);
		$(".work-entry:last").append(formattedworkDescription);
	} );	
 }
 
 /*
 *
 *education
 *
 */
 if (education.school.length > 0){
	$("#education").append(HTMLschoolStart);
	
		education.school.forEach(function(i){
		 var formattedschoolname = HTMLschoolName.replace("%data%",i.name);
		 var formattedschoolDate = HTMLschoolDates.replace("%data%",i.date);
		 var formattedschoolCity = HTMLschoolLocation.replace("%data%",i.city);
		 var formattedschoolDegree = HTMLschoolDegree.replace("%data%",i.degree);
		 var formattedschoolMajor = HTMLschoolMajor.replace("%data%",i.majors);
		 
		 
		 $(".education-entry:last").append(formattedschoolname);
		 $(".education-entry:last").append(formattedschoolDegree);
		 $(".education-entry:last").append(formattedschoolDate);
		 $(".education-entry:last").append(formattedschoolCity);
		 $(".education-entry:last").append(formattedschoolMajor);
	});
 }
 
/*
*
*online educatopn
*
*/ 
 
 var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCouurse[0].title);
 var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCouurse[0].school);
 var formattedonlineDate = HTMLonlineDates.replace("%data%",education.onlineCouurse[0].date);
 var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCouurse[0].url);
 
 $(".education-entry:last").append(HTMLonlineClasses);
 $(".education-entry:last").append(formattedonlineTitle);
 $(".education-entry:last").append(formattedonlineSchool);
 $(".education-entry:last").append(formattedonlineDate);
 $(".education-entry:last").append(formattedonlineURL);
 
 /*
 *
 *project
 *
 */
 if(projects.projects.length > 0){
	$("#projects").append(HTMLprojectStart);
	
	projects.projects.forEach(function(i){
			 var formattedprojectTitle = HTMLprojectTitle.replace("%data%",i.title);
			 var formattedprojectDates = HTMLprojectDates.replace("%data%",i.dates);
			 var formattedprojectDescription = HTMLprojectDescription.replace("%data%",i.description);
			 
			 
			 
			 $(".project-entry:last").append(formattedprojectTitle);
			 $(".project-entry:last").append(formattedprojectDates);
			 $(".project-entry:last").append(formattedprojectDescription);
			 
			 i.image.forEach(function(j){
				var formattedprojectImage = HTMLprojectImage.replace("%data%",j);
				$(".project-entry:last").append(formattedprojectImage); 
			 });
			 
	});	
}
$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x,y);
});

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return name[0]+" "+name[1];
}
inName("manoj kumar");
$("#main").append(internationalizeButton);


