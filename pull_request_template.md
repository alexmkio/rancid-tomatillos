### Expected Behavior


### Issues Resolved


### Code Reviewers
@

### Professionalism Rubric
- README concisely communicates the team’s individual and joint learning goals, the evolution of the project, and team member reflections while using good formatting to enhance readability
- README links to all user GitHub profiles and any applicable repos/deployed sites
- Team uses a rebase workflow
- Git commits are atomic, with concise and precise descriptions of the change made
- PRs have full, consistent descriptions
- Team members do consistent, thorough, meaningful code reviews of PRs, which prompt updates and changes made to that PR before merging
- Evolution of the project (decisions made, etc) are fully and clearly documented in the git history and PRs
- When the project is run locally, the terminal shows no errors or warnings

### React Rubric
- A consistent, modular file structure is used
- A clear understanding of class components vs function components is demonstrated
- Only the data that a child component needs is passed down as props
- Logic is kept out of return statements; return statements are as readable as possible, only communicating what will be displayed
- Fetch calls have been refactored to be reusable for multiple queries
- Frontend data (state) always matches the backend data
- Data fetched from API is run through a cleaning function (which is defined in a separate utilities file)
- Implements excellent error handling if movie database server is down or fetch fails (this includes loading images as well as error messages on the frontend)

### Testing Rubric
- Team has successfully achieved 90%+ test coverage of all components
- All async functionality is stubbed and tested
- Async tests cover happy & sad paths
- All application views are tested
- All user flows are tested

### Routing Rubric
- Application has been refactored to use Router without leaving artifacts of the prior code (no odd workarounds remaining)
- Use of Router shows developer empathy (readability, maintainability)
- Application uses React Router components and does not manipulate the history object
- A 404 page handles undefined routes
- UX is excellent; routes are consistent and navigation is clear

### Mod1 Best Practices
- All functions strictly adhere to the [Single Responsibility Principle (SRP)](https://dev.to/skill_pathway/single-responsibility-principle-for-dummies-59gb) and are all 10 lines of code or less
- Uses logical operators instead of nesting conditional statements
- Conditionals are written in a way that demonstrates an understanding of [https://frontend.turing.io/lessons/module-1/js-truthy-falsy-expressions.html](truthy/falsy values). For example, the developer avoids using logic like <code class="language-plaintext highlighter-rouge">=== true</code> and <code class="language-plaintext highlighter-rouge">!== 0</code>.
- Functions are [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) and observe [SRP](https://dev.to/skill_pathway/single-responsibility-principle-for-dummies-59gb) - and most are around 10 lines of code or less
- Most functions and variables are semantically and concisely named. Functions should start with a verb, array names should be plural, etc. Function and variable names describe their role in the program. Examples: The name of the data type should not ever be in a variable name (ex: “petArray”); the name itself should be clear enough to indicate the type of data it holds (ex: “allPets” or “pets”).
- An event handler should not have the word “handler” in the name (ex: “clickHandler”); the name should indicate the handler’s purpose (ex: “addNewPet”).
- Uses parameters and arguments to craft short and reusable functions. There are no parameters or arguments in functions that are unused.
- All console logs, debuggers and comments are removed from code before submitting.
