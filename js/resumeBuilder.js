/* Biography Object / Section */

var bio = {

	'name': 'Anna&nbspEwing',

	'role': 'Young(ish) Front-End Web&nbspDev Jedi',

	'contacts': {

		'mobile': '+44 (0)7000 000 000',
		'email': 'hello@creative-asset.co.uk',
		'github': 'CreativeA',
		'twitter': '@creative_asset',
		'location': 'Nottingham, UK'

	},

	'welcomeMessage': [ // Changed to an array

		'Because crafting with code sure beats a needle and thread.',
		'Have I got the skills you\'re looking for? Check out The Skill Play Pen',
		'Want to talk about your project? Just say hello@creative-asset.co.uk.'

	],

	'skills': [

		'Navigating a floor full of Lego',
		'OpenSource dev & design',
		'Outside-the-box thinking',
		'Ignoring a world of pouting selfies',
		'Deep-space OpenCart exploration'

	],

	'biopic': 'images/anna-udacity.jpg',

	display: function() {

		/* Header */

		$("header").append(HTMLbioStart);

		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		$("header .left").prepend(formattedRole);

		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		$("header .left").prepend(formattedName);

		/* Image */

		var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
		$("header .left").prepend(formattedPic);

		/* Contact Info */

		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);

		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		$("#topContacts").append(formattedEmail);

		var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
		$("#topContacts").append(formattedGitHub);

		var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);

		var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
		$("#topContacts").append(formattedLocation);

		/* Welcome Message */

		$("header .left").append(HTMLwelcomeType); // Display the message block even is message array is empty

		if(bio.welcomeMessage.length > 0) { // Only display if welcome message array is not empty

			for (var message in bio.welcomeMessage) {

				if(bio.welcomeMessage[message].length > 0) {

					var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage[message]);
					$("#typed-strings").append(formattedWelcome);

				}

			}

			/* Add live typing functionality to Welcome Message */

			$(function(){
			    $("#typed").typed({
			        stringsElement: $("#typed-strings"),
			        typeSpeed: 30,
			        backDelay: 500,
			        loop: false,
			        contentType: 'html',
			        loopCount: false,
			        callback: function(){ foo(); },
			        resetCallback: function() { newTyped(); }
			    });

			    $('.reset').click(function(){
			        $("#typed").typed('reset');
			    });
			});
			newTyped = function(){ };
			foo = function(){ console.log('Callback'); };

		}

		/* Add the get started button */

		$("header .left").append(HTMLgetStarted);

		if(bio.skills.length > 0) { // Only display if the skills array is not empty

			$("header .right").append(HTMLskillsStart);

			for (var skill in bio.skills) {

				if(bio.skills[skill].length > 0) {

					var formattedSkill = HTMLskills.replace('%data%', bio.skills[skill]);
					$("#skills").append(formattedSkill);

				}

			}

			/* Make skills area sortable */

			var list = document.getElementById("skills");
	    	Sortable.create(list);

	    }

	}
};

/* Work Object / Section */

var work = {

	'jobs': [

		{
			'employer': 'Creative Asset',
			'title': 'Owner / Entrepreneur',
			'location': 'Nottingham, UK',
			'dates': '2010 - Current',
			'description': 'Anna designs things for SME businesses; things that strive to bring them commercial success - marketing materials, websites, etc. She is also a spreadsheet nerd, lover of efficiency and hater of unnecessary jargon. Her business helps her clients to organise their internal business processses, improve their outbound marketing and to take a broad view in order to understand and enhance their customer\'s journey. Ultimately she helps them to conceptualise how to move their business forward and to identity their goals - both short and long term.',
			'image': 'images/calogo.png'
		},

		{
			'employer': 'A boy called Charlie',
			'title': 'Maker / Mentor',
			'location': 'Rotherham, UK',
			'dates': '2008 - Current',
			'description': 'Once upon a time Anna was a not-so-care-free 19 year old. Then she had her son; a boy called Charlie. Together Anna and Charlie grew and learned about the world. And it was so that Anna learned how to become more care-free and to really appreciate the most important things in life. Along their journey together Charlie was blessed with two younger siblings and they too now look to him for inspiration on a daily basis. Collectively Anna and her eldest son learn-from and teach each other... and they are currently collaborating on a Raspberry Pi related project. ',
			'image': 'images/raspberrypi.png'
		}
	],

	display: function() {

		$("#workExperience").prepend(HTMLbackTop);

		for (var job in work.jobs) {

			if(work.jobs[job].title.length > 0) { // Only display if job title has been entered

				$("#workExperience").append(HTMLworkStart);

				var workImage = HTMLworkImage.replace('%url%', work.jobs[job].image);
				$(".work-entry:last .left").append(workImage);

				var workEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
				var workTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
				var workEmployerTitle = workEmployer + workTitle;
				$(".work-entry:last .right").append(workEmployerTitle);

				var workDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
				$(".work-entry:last .right").append(workDates);

				var workLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
				$(".work-entry:last .right").append(workLocation);

				var workDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
				$(".work-entry:last .right").append(workDescription);

			}

		}

	}
};


/* Additional Quotes Object / Section */

var quotes = {

	'quotes': [

		{
			'saying': '\"If you can’t fly, then run, if you can’t run, then walk, if you can’t walk then crawl, but whatever you do, you have to keep on moving forward.\"',
			'author': 'Martin Luther King Jr',
		},

		{
			'saying': '\"The greatest risk in life is to risk nothing.\"',
			'author': 'Unknown',
		},

		{
			'saying': '\"Be the difference you want to see in the world.\"',
			'author': 'Ghandi',
		}

	],

	display: function() {

		$("#quotes").prepend(HTMLbackTop);

		for (var quote in quotes.quotes) {

			if(quotes.quotes[quote].saying.length > 0) { // Only display if quote text has been entered

				$("#quotes").append(HTMLquoteStart);

				var quoteText = HTMLquoteText.replace('%data%', quotes.quotes[quote].saying);
				$(".quote-entry:last").append(quoteText);

				var quoteAuthor = HTMLquoteAuthor.replace('%data%', quotes.quotes[quote].author);
				$(".quote-entry:last").append(quoteAuthor);

			}

		}

		$("#quotes").append(HTMLsoundCloud);

	}
};


/* Projects Object / Section */

var projects = {

	'projects': [

		{
			'title': 'A life more ordinary',
			'dates': 'Jan 2015 - Current',
			'description': 'Inspired by her life experiences and a diagnosis of Fibromyalgia, Anna is working on developing a platform that will bring more work opportunities to people who don\'t want to see their life continually defined by illness, disability or disadvantaged circumstances.',
			'images': [

				'images/banksy1.jpg',
				'images/banksy3.jpg',

			]
		},

		{
			'title': 'Continual professional development',
			'dates': 'Ongoing',
			'description': 'The never ending action of taking confident strides forward, without complacency and without holding the assumption that you ever really have the answer. Anna always asks questions and isn\'t afraid to say \" I don\'t know\", \"I\'m sorry\" or \"I was wrong.\"',
			'images': [

				'images/banksy2.jpg'

			]
		}

	],

	display: function() {

		$("#projects").prepend(HTMLbackTop);

		for (var project in projects.projects) {

			if(projects.projects[project].title.length > 0) { // Only display if project title has been entered

				$("#projects").append(HTMLprojectStart);

				var projectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
				$(".project-entry:last").append(projectTitle);

				var projectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
				$(".project-entry:last").append(projectDates);

				var projectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
				$(".project-entry:last").append(projectDescription);

				for (var image in projects.projects[project].images) {

					if(projects.projects[project].images[image].length > 0) {

						var projectImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
						$(".project-entry:last").prepend(projectImage);

					}

				}

			}

		}

	}

};


/* Doughtnut Charts - Languages Section */

function languages() {

	$("#languages").append(HTMLlanguageStart);
	$("#languages").prepend(HTMLbackTop);

	function chart1() {

		var chartTitle = 'To Code >>>';

		var chartData = [

	        {
	          value: 50,
	          color:'#F7464A',
	          highlight: '#FF5A5E',
	          label: 'Javascript'
	        },

	        {
	          value: 50,
	          color: '#46BFBD',
	          highlight: '#5AD3D1',
	          label: 'PHP'
	        },

	        {
	          value: 100,
	          color: '#FDB45C',
	          highlight: '#FFC870',
	          label: 'HTML'
	        },

	        {
	          value: 100,
	          color: '#949FB1',
	          highlight: '#A8B3C5',
	          label: 'CSS'
	        },

	        {
	          value: 10,
	          color: '#4D5360',
	          highlight: '#616774',
	          label: 'phpMySQL'
	        }

	    ];

		var ctx = document.getElementById("chart-area").getContext('2d');
		var chart1Name = HTMLchartTitle.replace('%data%', chartTitle);

		$("#canvas-holder").append(chart1Name);

		window.myDoughnut = new Chart(ctx).Doughnut(chartData, {
			responsive : true,
			segmentShowStroke : false
		});

	}

	function chart2() {

		var chartTitle = 'Or Not To Code >>>';

		var chartData = [

		    {
		      value: 90,
		      color:'#F7464A',
		      highlight: '#FF5A5E',
		      label: 'English'
		    },

		    {
		      value: 10,
		      color: '#46BFBD',
		      highlight: '#5AD3D1',
		      label: 'Swedish'
		    }

		];

		var ctx2 = document.getElementById("chart-area2").getContext('2d');
		var chart2Name = HTMLchartTitle.replace('%data%', chartTitle);

		$("#canvas-holder2").append(chart2Name);

		window.myPie = new Chart(ctx2).Doughnut(chartData, {
			responsive : true,
			segmentShowStroke : false
		});

	}

	chart1();
	chart2();

}


/* Education Object / Section */

var education = {

	'schools': [

		{
			'name': 'Parenthood',
			'location': 'Nottingham, UK',
			'degree': '2:1 Male to Female Minion Ratio',
			'majors': [

				'Teaching',
				' Leading'

			],
			'dates': '2008-Current',
			'url': 'http://www.google.com'
		},

		{
			'name': 'School of Life',
			'location': 'Sheffield, UK',
			'degree': 'Find your own path',
			'majors': [

				'Observing',
				' Learning'
			],
			'dates': '1987-Current',
			'url': 'http://www.google.com'
		}

	],

	'onlineCourses': [

		{
			'title': 'Front End Web Development Nanodegree',
			'school': 'Udacity </br><span>(you might know them!)</span>',
			'dates': '2015 - Current',
			'url': 'www.udacity.com'
		},

		{
			'title': 'WordPress Development',
			'school': 'Self-Taught </br><span>(via Treehouse, YouTube, Lynda, Udemy etc.)</span>',
			'dates': '2012 - Current',
			'url': 'www.wordpress.com'
		},

		{
			'title': 'OpenCart Development',
			'school': 'Self-Taught </br><span>(via Google, StackOverflow, Forums, Blogs etc.)</span>',
			'dates': '2011 - Current',
			'url': 'www.opencart.com'
		}

	],

	display: function() {

		$("#education").prepend(HTMLbackTop);

		for (var school in education.schools) {

			if(education.schools[school].name.length > 0) { // Only display if school name has been entered

				$("#education").append(HTMLschoolStart);

				var schoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
				var schoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
				var combinedSchoolDegree = schoolName + schoolDegree;
				$(".education-entry:last").append(combinedSchoolDegree);

				var schoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
				$(".education-entry:last").append(schoolDates);

				var schoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
				$(".education-entry:last").append(schoolLocation);

				var schoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors);
				$(".education-entry:last").append(schoolMajor);

			}

		}

		$("#education").append(HTMLonlineClasses);

		for (var course in education.onlineCourses) {

			if(education.onlineCourses[course].title.length > 0) { // Only display if course title has been entered

				$("#education").append(HTMLclassStart);

				var courseName = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
				var courseProvider = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
				var combinedNameProvider = courseName + courseProvider;
				$(".course-entry:last .card .front").append(combinedNameProvider);

				var courseDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
				$(".course-entry:last ").append(courseDates);

				var formattedURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
				var linkURL = formattedURL.replace('%url%', education.onlineCourses[course].url);
				$(".course-entry:last .card .back").append(linkURL);

			}

		}

		$(".card").flip({
			trigger: 'hover'
		});

	}
};


var footer = {

	'name': 'Anna Ewing',

	'image': 'images/github.png',

	'imagelink': 'https://github.com/CreativeA',

	display: function() {

		var updateImage = HTMLfooter.replace('%image%', footer.image);
		var addLink = updateImage.replace('%url%', footer.imagelink);
		var formattedFooter = addLink.replace('%data%', footer.name);
		$("footer").append(formattedFooter);

	}

};


/* Add the Internationalize Button NOT USING */

/*
inName = function() {

	var names = bio.name.split(" ");
	//seperate the first and second names
	names[1] = names[1].toUpperCase();
	//get the second name and put it in uppercase
	names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	//get the first name and capitalise it
	finalName = names.join(" ");
	//join the two strings together
	return finalName;
	//return the new value
};
*/


/* Display the on-page content */

function displayContent() {

	$("#mapDiv").prepend(HTMLbackTop);
	$("#mapDiv").append(googleMap);
	//$('#main').append(internationalizeButton);

	bio.display();
	work.display();
	projects.display();
	education.display();
	quotes.display();
	languages();
	footer.display();

}

displayContent();


/* Build the nav menu */

function buildNav() {

	$("#navbar").append(navStart);
	$("nav .flex-box").append(biopicNav);
	$("nav .flex-box").append(bioNav);
	$("nav .flex-box").append(workNav);
	$("nav .flex-box").append(inspirationNav);
	$("nav .flex-box").append(projectsNav);
	$("nav .flex-box").append(languagesNav);
	$("nav .flex-box").append(educationNav);
	$("nav .flex-box").append(mapNav);

}

buildNav();


/* Sticky Header */

function stickyHeader() {

	var mainbottom = $("header").offset().top + $("footer").height();
	  	// on scroll,
	  	$(window).on('scroll',function(){
	      	// we round here to reduce a little workload
	      	var stop = Math.round($(window).scrollTop());

	      	if (stop > mainbottom) {
	          	$("#navbar").addClass("past-main");
	      	}
	      	else {
	          	$("#navbar").removeClass("past-main");
	      	}
	});

}

stickyHeader();


/* Smooth Scroll - https://css-tricks.com/snippets/jquery/smooth-scrolling/ */

function smoothScroll() {

	$('a[href*="#"]:not([href="#"])').click(function() {

	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      	var target = $(this.hash);
	      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

	      	if (target.length) {
	        	$("html, body").animate({
	          		scrollTop: target.offset().top
	        	}, 1000);
	        	return false;
	      	}
	    }

	});

}

smoothScroll();