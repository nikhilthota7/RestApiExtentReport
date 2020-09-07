package com.cts.StepDefinition;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import static io.restassured.RestAssured.given;

public class DeleteRequest {


	String baseUri="https://reqres.in/";
	RequestSpecification _REQS_SPEC;
	Response _RESP;
	ValidatableResponse _VALIDATABLE_RESP;
	Scenario scn;
	
	
	@Before
	public void BeforeHook(Scenario s) {
		this.scn = s;
	}
	
	@Given("I have end point API URI")
	public void i_have_end_point_API_URI() {
	    
		_REQS_SPEC =given().baseUri(baseUri);
		scn.write("Base uri is" + baseUri);
		
	}

	@When("I enter uri and submit")
	public void i_enter_uri_and_submit() {
		_RESP=_REQS_SPEC.delete("/api/users/2");
		scn.write("Uri entered is"+_RESP.asString());
				
	}

	@Then("I should get {int} as response code")
	public void i_should_get_as_response_code(Integer int1) {
		_VALIDATABLE_RESP=_RESP.then().log().all();
		_VALIDATABLE_RESP.assertThat().statusCode(int1);
		scn.write("Status code from response is "+_RESP.getStatusCode());
	}

	
}
