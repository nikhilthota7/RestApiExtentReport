package com.cts.TestRunner;

import org.junit.runner.RunWith;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
	
		features="C:\\Users\\769842\\Java-Workspace\\CucumberReportingApi2\\src\\test\\resources\\Features",
		glue= {"com.cts.StepDefinition"},
		plugin= {"pretty","html:test-output","json:target/cucumberjosnreports.json","com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"},
		dryRun=false,
		monochrome=true,
		strict=true
		
		)


public class ApiRunner {

}
