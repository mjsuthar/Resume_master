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
	 for (i in bio.skills){
	 var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
	 $("#skills").append(formattedSkills);
	 } 
 }
 
 /*
 *
 *work
 *
 */

if(work.jobs.length > 0){
	$("#workExperience").append(HTMLworkStart);
	for(i in work.jobs){
		var formattedworkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
		var formattedworkTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
		var formattedworkDate = HTMLprojectDates.replace("%data%",work.jobs[i].date);
		var formattedworkLocation = HTMLworkLocation.replace("%data%",work.jobs[i].city);
		var formattedworkDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);
		
		$("#workExperience").append(formattedworkEmployer);
		$("#workExperience").append(formattedworkTitle);
		$("#workExperience").append(formattedworkDate);
		$("#workExperience").append(formattedworkLocation);
		$("#workExperience").append(formattedworkDescription);
		
	}	
 }
 
 /*
 *
 *education
 *
 */
 if (education.school.length > 0){
	$("#education").append(HTMLschoolStart);
	for(i in education.school){
		 var formattedschoolname = HTMLschoolName.replace("%data%",education.school[i].name);
		 var formattedschoolDate = HTMLschoolDates.replace("%data%",education.school[i].date);
		 var formattedschoolCity = HTMLschoolLocation.replace("%data%",education.school[i].city);
		 var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.school[i].degree);
		 var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.school[i].majors);
		 
		 
		 $("#education").append(formattedschoolname);
		 $("#education").append(formattedschoolDegree);
		 $("#education").append(formattedschoolDate);
		 $("#education").append(formattedschoolCity);
		 $("#education").append(formattedschoolMajor);
	}
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
 
 $("#education").append(HTMLonlineClasses);
 $("#education").append(formattedonlineTitle);
 $("#education").append(formattedonlineSchool);
 $("#education").append(formattedonlineDate);
 $("#education").append(formattedonlineURL);
 
 /*
 *
 *project
 *
 */
 if(projects.projects.length > 0){
	$("#projects").append(HTMLprojectStart);
	for(i in projects.projects){
			 var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
			 var formattedprojectDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
			 var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
			 
			 
			 
			 $("#projects").append(formattedprojectTitle);
			 $("#projects").append(formattedprojectDates);
			 $("#projects").append(formattedprojectDescription);
			 for(j in projects.projects[i].image){
				var formattedprojectImage = HTMLprojectImage.replace("%data%",projects.projects[i].image[j]);
				$("#projects").append(formattedprojectImage); 
			 }
			 
	}	
 }
 