import React from "react";
import './about.css';

const About = () => {
return (
	<div style={{'textAlign': 'center'}}>
	<img src="/me.png" alt="personal photo" style={{'marginLeft': 'auto', 'marginRight': 'auto', 'width':'10vw', 'height': 'auto'}}></img>
	<h1>
		Hello, I'm Hunter Palcich
	</h1>
	<p className='main_text'>
	I graduated from the University of Cincinnati in Spring 2018 with a Bachelors of Science in Biomedical Engineering. 
	During my time in undergraduate I also had the privilege to have internships at companies such as <a href="https://www.zimmerbiomet.com/en">Zimmer Biomet</a>&nbsp;
	and <a href="https://www.enableinjections.com">Enable Injections</a>.
	After graduating I was admitted to the Online Master of Science Computer Science (OMSCS) from Georgia Tech and have completed 6 of the 10 required courses
	for the machine learning track.
	</p>
	<br></br>

	<p className='main_text'>
	After graduating from the University of Cincinnati, I joined <a href="https://oliveai.com">Olive</a> as a Robotics Process Automation Engineer (RPA), helping to
	automate workflows for hospital systems. I then transitioned to a machine learning team, which was designed to create standardized data schemas for olive customers
	to help provide more insights for our customers.
	</p>
	<p className='main_text'>
	After working at Olive, I then joined <a href="https://amazon.com">Amazon</a> where I currently work today as a Systems Development Engineer for a data science/analytical
	team that helped grow the Amazon Fresh and Sub Same Day Delivery team.
	While working at Amazon I helped design, deploy and manage projects such as: data pipelines, websites with real time data feeds and working with multiple AWS services.
	</p>
	</div>
);
};

export default About;
