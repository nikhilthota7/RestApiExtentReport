$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/769842/Java-Workspace/CucumberReportingApi2/src/test/resources/Features/Delete Request.feature");
formatter.feature({
  "name": "DELETE RESPONSE CAPTURING",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Delete request",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have end point API URI",
  "keyword": "Given "
});
formatter.match({
  "location": "DeleteRequest.i_have_end_point_API_URI()"
});
formatter.write("Base uri ishttps://reqres.in/");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter uri and submit",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteRequest.i_enter_uri_and_submit()"
});
formatter.write("Uri entered is");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get 204 as response code",
  "keyword": "Then "
});
formatter.match({
  "location": "DeleteRequest.i_should_get_as_response_code(Integer)"
});
formatter.write("Status code from response is 204");
formatter.result({
  "status": "passed"
});
formatter.uri("C:/Users/769842/Java-Workspace/CucumberReportingApi2/src/test/resources/Features/Get Request.feature");
formatter.feature({
  "name": "REST ASSURED API TESTING WITH CUCUMBER BDD FRAMEWORK",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "GET RESPONSE API TESTING",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have an endpointApi",
  "keyword": "Given "
});
formatter.match({
  "location": "GetRequestStepDefinition.i_have_an_endpointApi()"
});
formatter.write("Baseuri is :https://reqres.in/");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submit the Get request",
  "keyword": "When "
});
formatter.match({
  "location": "GetRequestStepDefinition.i_submit_the_Get_request()"
});
formatter.write("Endpoint uri is :{\"data\":{\"id\":2,\"email\":\"janet.weaver@reqres.in\",\"first_name\":\"Janet\",\"last_name\":\"Weaver\",\"avatar\":\"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg\"},\"ad\":{\"company\":\"StatusCode Weekly\",\"url\":\"http://statuscode.org/\",\"text\":\"A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things.\"}}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "GetRequestStepDefinition.i_should_get_status_code_as(Integer)"
});
formatter.write("Status code from response is :200");
formatter.write("I d from response :2");
formatter.write("email from response :janet.weaver@reqres.in");
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "VERIFYING CONTENT FROM RESPONSE",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have an endpointApi",
  "keyword": "Given "
});
formatter.match({
  "location": "GetRequestStepDefinition.i_have_an_endpointApi()"
});
formatter.write("Baseuri is :https://reqres.in/");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submit the Get request",
  "keyword": "When "
});
formatter.match({
  "location": "GetRequestStepDefinition.i_submit_the_Get_request()"
});
formatter.write("Endpoint uri is :{\"data\":{\"id\":2,\"email\":\"janet.weaver@reqres.in\",\"first_name\":\"Janet\",\"last_name\":\"Weaver\",\"avatar\":\"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg\"},\"ad\":{\"company\":\"StatusCode Weekly\",\"url\":\"http://statuscode.org/\",\"text\":\"A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things.\"}}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response should contain the id as 2 and email as \"janet.weaver@reqres.in\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GetRequestStepDefinition.the_response_should_contain_the_id_as_and_email_as(Integer,String)"
});
formatter.write("Email from response is :janet.weaver@reqres.in");
formatter.result({
  "status": "passed"
});
formatter.uri("C:/Users/769842/Java-Workspace/CucumberReportingApi2/src/test/resources/Features/Post Request.feature");
formatter.feature({
  "name": "API POST REQUEST",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying the post request",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have end point uri",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinition.i_have_end_point_uri()"
});
formatter.write("Base uri :https://reqres.in/");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I give post request with details",
  "keyword": "When "
});
formatter.match({
  "location": "PostStepDefinition.i_give_post_request_with_details()"
});
formatter.write("Response after put request:{\"name\":\"Nikhil\",\"job\":\"software\"}");
formatter.write("Header as {Content-Type\u003dapplication/json}");
formatter.write("POST RESPONSE :{\"name\":\"Nikhil\",\"job\":\"software\",\"id\":\"409\",\"createdAt\":\"2020-09-02T11:42:22.677Z\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get response code as 201",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinition.i_should_get_response_code_as(Integer)"
});
formatter.write("STATUS CODE AFTER PUT REQUEST :201");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verifying the response body",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinition.verifying_the_response_body()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("C:/Users/769842/Java-Workspace/CucumberReportingApi2/src/test/resources/Features/Put Request.feature");
formatter.feature({
  "name": "PUT REQUEST",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "PUT REQUEST RESPONSE",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have an Put requestApi",
  "keyword": "Given "
});
formatter.match({
  "location": "PutRequestStepDefinition.i_have_an_Put_requestApi()"
});
formatter.write("Base uri is:https://reqres.in/");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I submit the request",
  "keyword": "When "
});
formatter.match({
  "location": "PutRequestStepDefinition.i_submit_the_request()"
});
formatter.write("RESPONSE BODY :{\"name\":\"Nikhil\",\"job\":\"Mechanical\"}");
formatter.write("Header as {Content-Type\u003dapplication/json}");
formatter.write("POST RESPONSE :{\"name\":\"Nikhil\",\"job\":\"Mechanical\",\"updatedAt\":\"2020-09-02T11:42:23.895Z\"}");
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will get response as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PutRequestStepDefinition.i_will_get_response_as(Integer)"
});
formatter.write("STATUS CODE :200");
formatter.write("validating job : Mechanical");
formatter.write("validating name : Nikhil");
formatter.write("Id and name is correctly coming");
formatter.result({
  "status": "passed"
});
});