@javascript
Feature: Viewing Homepage
  In order to learn about chavezcoin and use it
  I want to view the homepage
  @javascript
  Scenario: Viewing homepage as guest
    And I should see a nav menu
    And I should see banner with counter
    When I scroll down
    Then I should see the nav with scrolled class
    When I click details
    Then I should see the graphic details
    And I should see the guide section
    When I click in the title
    Then I should see the content
    And I should see an animation
    And I should see the advantages boxes
    And I should see a list of cryptocurrencies
    When I click the coin interruptor
    Then I should see the currency data
    And I should see a list of exchanges
    And I should see a gallery mobile draw
    And I should see the latest blog post
    And I should see a list of faqs
    When I click a question
    Then I should see an answer