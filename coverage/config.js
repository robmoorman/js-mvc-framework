var Config = {
	
	target: "./coverage/build-tmp",
	
	templates: "./coverage/templates",
	
	src: {
		application: "./src",
		libraries: "./libs",
		tests: "./tests",
		qunit: "./coverage/libs",
		mockups: "./mockups"
	},
	
	output: {
		junit: "./coverage/reports/junit.xml",
		cobertura: "./coverage/reports/cobertura.xml"
	}
		
};