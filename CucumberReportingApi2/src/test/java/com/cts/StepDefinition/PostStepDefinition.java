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

import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;

public class PostStepDefinition {

	String baseUri="https://reqres.in/";
	RequestSpecification _REQS_SPEC;
	Response _RESP;
	ValidatableResponse _VALIDATABLE_RESP;
	Scenario scn;
	
	
	@Before
	public void BeforeHook(Scenario s) {
		this.scn = s;
	}
	
	
	@Given("I have end point uri")
	public void i_have_end_point_uri() {
		_REQS_SPEC=given().baseUri(baseUri);
		scn.write("Base uri :"+baseUri);
	}

	@When("I give post request with details")
	public void i_give_post_request_with_details() {
	   
	   JSONObject json=new JSONObject();
	   json.put("name", "Nikhil");
	   json.put("job", "software");
	   scn.write("Response after put request:"+json.toJSONString());
	   
	   Map<String,String> headers = new HashMap<String,String>();
		headers.put("Content-Type", "application/json");
		scn.write("Header as " + headers.toString());
	  
	   _RESP=_REQS_SPEC.headers(headers).body(json).when().post("/api/users");
	   scn.write("POST RESPONSE :"+_RESP.asString());
	}

	@Then("I should get response code as {int}")
	public void i_should_get_response_code_as(Integer int1) {
	   _VALIDATABLE_RESP=_RESP.then().statusCode(int1);
	   scn.write("STATUS CODE AFTER PUT REQUEST :"+_RESP.getStatusCode());
	   
	}

	@Then("verifying the response body")
	public void verifying_the_response_body() {
		_VALIDATABLE_RESP=_RESP.then().assertThat().statusCode(201);
		
		
		
	}

	
	
}
