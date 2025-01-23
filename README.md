# Test Automation with Playwright & Cucumber 🥒

This project combines **Playwright** and **Cucumber** to create a powerful **Behavior Driven Development (BDD)** solution for test automation. By leveraging the **Page Object Pattern**, **global assertions**, and **custom hooks**, this setup ensures that your automated tests are both **easy to maintain** and **reliable**. Plus, it comes with a **beautifully styled Cucumber HTML Reporter** powered by **Bootstrap** for great visual clarity.

---

### Key Features

- **BDD with Cucumber:** Write clear, understandable test scenarios that describe the behavior of your application from the user's perspective.
- **Page Object Pattern:** Organize your tests for better maintainability by isolating each page's functionality into a dedicated object.
- **Global Assertions & Hooks:** Reusable hooks and assertions across scenarios for consistent setup and teardown, making your tests cleaner and more efficient.
- **Cucumber HTML Reporter:** Enjoy a stunning and easily navigable test report using the Bootstrap-powered **Cucumber HTML Reporter** for better insights into test results.

---


### Project Structure

- **Test Scenarios (Feature Files):** Written in Gherkin syntax, scenarios define the behavior of your application.
- **Page Objects:** Organize your test logic into individual page objects for each screen or page, ensuring easy updates and improved clarity.
- **Global Assertions:** Reusable custom assertions that are applied globally across your tests.
- **Hooks:** Global functions run before and after tests for setup and teardown tasks, ensuring consistency.

---

### Getting Started

Clone or download the project and follow these steps to run your tests:

1. **Clone the repository** (or download the project folder).
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the tests:**:
   ```bash
   npm run tests
   ```

---

### Explore the Code

Here’s a quick overview of the main directories and files in the project:

- **`features/` Directory:**  
  This folder contains all the **feature files** where test scenarios are written in **Gherkin syntax**. Each feature file focuses on a specific aspect of the application and outlines the expected behavior.  
  Example files: `login.feature`.

- **`pages-objects` Directory:**  
  This folder follows the **Page Object Model (POM)** pattern. Each file represents a different page of your application and contains functions for interacting with elements on that page.  

- **`setup/` Directory:**

  - **Hooks:** Contains **before** and **after** hooks, which are used for setup and teardown tasks. Hooks like `beforeAll`, `beforeEach`, and `afterEach` are defined here to run globally across the tests.

- **`reports/` Directory:**  
  After running your tests, this folder contains the **Cucumber HTML Report**. The report is generated after each test run and gives a detailed visual summary of all the test cases, their status, and any failed scenarios.
