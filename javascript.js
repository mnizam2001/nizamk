
	var i=0;
		var txt='"Proficient Computer Operator Skilled at establishing controls and managing daily data jobs.Hardworking professional adept at correcting routine problems and escalating major concerns.Careful Computer Operator trusted to accept,process and safeguard internal and customer data.Responsible monitoe of on-site and network processing perfoemance.Dedicated to securing every kilobyte of provided data.Results-driven Computer Operator known for high productivity and efficient task completion.Posses specialized skills in system troubleshooting,network monitoring,and data management."';
		var speed=10;
			function typeWritter(){
				if(i<txt.length){
					document.getElementById("demo").innerHTML += txt.charAt(i);
					i++;
					setTimeout(typeWritter,speed);
				}
			}
