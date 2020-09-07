package com.cts.StepDefinition;

import static org.hamcrest.CoreMatchers.equalTo;

import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;

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

public class PutRequestStepDefinition {

	String baseUri="https://reqres.in/";
	RequestSpecification _REQS_SPEC;
	Response _RESP;
	ValidatableResponse _VALIDATABLE_RESP;
	Scenario scn;
	
	@Before
	public void beforehook(Scenario s) {
		this.scn=s;
	}
	
	@Given("I have an Put requestApi")
	public void i_have_an_Put_requestApi() {
		_REQS_SPEC=given().baseUri(baseUri);
		scn.write("Base uri is:"+baseUri);
		
		
	}

	@When("I submit the request")
	public void i_submit_the_request() {
	   
		JSONObject path=new JSONObject();
		path.put("name", "Nikhil");
		path.put("job", "Mechanical");
	scn.write("RESPONSE BODY :"+path.toJSONString());
	Map<String,String> headers=new HashMap<String,String>();
	headers.put("Content-Type", "application/json");
	scn.write("Header as " + headers.toString());
	
	 _RESP=_REQS_SPEC.headers(headers).body(path).when().put("/api/users/2");
	   scn.write("POST RESPONSE :"+_RESP.asString());
		
		
	}

	@Then("I will get response as {int}")
	public void i_will_get_response_as(Integer int1) {
	    
		_VALIDATABLE_RESP=_RESP.then().assertThat().statusCode(int1);
		scn.write("STATUS CODE :" +_RESP.getStatusCode());
		
		JsonPath path = new JsonPath( _RESP.then().extract().body().asString());
		
		scn.write("validating job : "+ path.getString("job"));
		scn.write("validating name : "+ path.getString("name"));
		
	  _RESP.then().assertThat().body("job", equalTo("Mechanical"));
	  _RESP.then().assertThat().body("name", equalTo("Nikhil"));
		scn.write("Id and name is correctly coming");
		_RESP.then().log().all();
		
	}

	
}
