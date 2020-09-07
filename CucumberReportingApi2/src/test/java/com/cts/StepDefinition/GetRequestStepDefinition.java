package com.cts.StepDefinition;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.hasItems;

public class GetRequestStepDefinition {
	String baseUri="https://reqres.in/";
	RequestSpecification _REQS_SPEC;
	Response _RESP;
	ValidatableResponse _VALIDATABLE_RESP;
	Scenario scn;
	
	
	@Before
	public void BeforeHook(Scenario s) {
		this.scn = s;
	}
	

	@Given("I have an endpointApi")
	public void i_have_an_endpointApi() {
		_REQS_SPEC=given().baseUri(baseUri);
		scn.write("Baseuri is :"+ baseUri);
	}

	@When("I submit the Get request")
	public void i_submit_the_Get_request() {
		_RESP=_REQS_SPEC.get("/api/users/2");
		scn.write("Endpoint uri is :"+_RESP.asString());
	}


	@Then("I should get status code as {int}")
	public void i_should_get_status_code_as(Integer int1) {
		
		_VALIDATABLE_RESP=_RESP.then().assertThat().statusCode(int1);
		scn.write("Status code from response is :"+_RESP.getStatusCode());
	
		_VALIDATABLE_RESP.log().all();
		JsonPath path = new JsonPath(_RESP.then().extract().asString());
		scn.write("Id from response :"+path.get("data.id"));
		scn.write("email from response :"+path.get("data.email"));
		
		
	}
	
	@Then("the response should contain the id as {int} and email as {string}")
	public void the_response_should_contain_the_id_as_and_email_as(Integer int1, String string) {
	    
		_VALIDATABLE_RESP=_RESP.then().assertThat();
		_VALIDATABLE_RESP.body("data.id", equalTo(int1));
		_VALIDATABLE_RESP.body("data.email", equalTo(string));
	     scn.write("Email from response is :"+string);	
		
	}
	
	
	
}
