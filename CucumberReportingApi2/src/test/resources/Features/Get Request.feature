#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: REST ASSURED API TESTING WITH CUCUMBER BDD FRAMEWORK

 Scenario: GET RESPONSE API TESTING
 
 	Given I have an endpointApi
 	When I submit the Get request
 	Then I should get status code as 200
 	
 Scenario: VERIFYING CONTENT FROM RESPONSE

  Given I have an endpointApi
  When I submit the Get request
  Then the response should contain the id as 2 and email as "janet.weaver@reqres.in"
 	
 	
 	