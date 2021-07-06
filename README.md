<h2 id="learning-goals">Learning Goals</h2>

<ul>
  <li>Gain competency with React fundamentals</li>
  <li>Learn how to test React components &amp; asynchronous JS</li>
  <li>Practice refactoring</li>
  <li>Create a multi-page UX using Router</li>
</ul>

<h2 id="iterations">Iterations</h2>

<p>We’ve broken this project down into iterations. Please be sure to read them closely with your project partner!</p>

<h3 id="iteration-0---day-1-deliverables">Iteration 0 - Day 1 Deliverables</h3>

<p>Create a group Slack DM with both project partners and both instructors.</p>

<p>In that DM, please share the following:</p>
<ul>
  <li>Layouts/Wireframes sketches of your user interface</li>
  <li>A link to 2-3 pieces of design inspiration that you will aim to mimic (use Dribbble, or even applications that you already use). Screenshots are also fine.</li>
  <li>Group DTR</li>
  <li>Project management tool (GitHub Projects, Trello, etc.) - be sure this is public so your instructors can view it</li>
  <li>PR template your group agrees to follow for every PR submitted (<a href="https://help.github.com/en/github/building-a-strong-community/creating-a-pull-request-template-for-your-repository">here are some instructions from GitHub on how to create this</a>)</li>
  <li>An initial plan:
    <ul>
      <li>What components do you envision needing?</li>
      <li>Where will data be stored?</li>
      <li>How will information be passed around?</li>
    </ul>
  </li>
  <li>The link to your repo (use <a href="https://frontend.turing.io/lessons/module-3/react-2-the-how.html">Create-React-App</a> to start your project!)</li>
</ul>

<hr />

<h3 id="iteration-1---displaying-movies">Iteration 1 - Displaying movies</h3>

<p>For this first iteration, we will use mock data to display the movies (we will later refactor our project to consume an API). The purpose of using mock data instead of querying the actual API is to allow us to focus purely on React for now.</p>

<p>In your project repo, create a new file in the src folder. Copy in the data found in <a href="https://gist.github.com/letakeane/d11a3c3c9f3fbcaf105c0b214f5fb754">this gist</a>.</p>

<p>For now, you will import this information into your <code class="language-plaintext highlighter-rouge">App.js</code> file and use this as your source of information!</p>
<div class="language-js highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">import</span> <span class="nx">movieData</span> <span class="k">from</span> <span class="dl">'</span><span class="s1">put your filepath here</span><span class="dl">'</span>
</code></pre></div></div>

<p><strong>User Story</strong></p>
<ul>
  <li>As a user, when I visit the app, all movies should be displayed</li>
</ul>

<p><strong>Suggested completion date</strong></p>
<ul>
  <li>End of Day 2 (Wednesday of Week 1)</li>
</ul>

<hr />

<h3 id="iteration-2---displaying-an-individual-movie">Iteration 2 - Displaying an individual movie</h3>

<p>For the second iteration, we’ll use <a href="https://frontend.turing.io/lessons/module-3/react-3-advanced-data-management.html"><code class="language-plaintext highlighter-rouge">conditional rendering</code></a> to show a single movie’s details.</p>

<p>In the future, when we use the actual API to get individual movie details, the information will change. For now, you can use some default “dummy” data, and know that it will eventually change and be dynamic:</p>

<div class="language-js highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="p">{</span><span class="dl">"</span><span class="s2">movie</span><span class="dl">"</span><span class="p">:</span> <span class="p">{</span><span class="nl">id</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span> <span class="nx">title</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Fake Movie Title</span><span class="dl">"</span><span class="p">,</span> <span class="nx">poster_path</span><span class="p">:</span> <span class="dl">"</span><span class="s2">https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg</span><span class="dl">"</span><span class="p">,</span> <span class="nx">backdrop_path</span><span class="p">:</span> <span class="dl">"</span><span class="s2">https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg</span><span class="dl">"</span><span class="p">,</span> <span class="nx">release_date</span><span class="p">:</span> <span class="dl">"</span><span class="s2">2019-12-04</span><span class="dl">"</span><span class="p">,</span> <span class="nx">overview</span><span class="p">:</span> <span class="dl">"</span><span class="s2">Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!</span><span class="dl">"</span><span class="p">,</span> <span class="nx">average_rating</span><span class="p">:</span> <span class="mi">6</span><span class="p">,</span> <span class="nx">genres</span><span class="p">:</span> <span class="p">[</span><span class="dl">"</span><span class="s2">Drama</span><span class="dl">"</span><span class="p">],</span> <span class="nx">budget</span><span class="p">:</span><span class="mi">63000000</span><span class="p">,</span> <span class="nx">revenue</span><span class="p">:</span><span class="mi">100853753</span><span class="p">,</span> <span class="nx">runtime</span><span class="p">:</span><span class="mi">139</span><span class="p">,</span> <span class="nx">tagline</span><span class="p">:</span> <span class="dl">"</span><span class="s2">It's a movie!</span><span class="dl">"</span> <span class="p">}}</span>
</code></pre></div></div>

<p><strong>OR:</strong> You can also simply use the existing movie data that you already have access to (“id”, “title”, “poster_path”, “backdrop_path”, “release_date”), knowing that eventually you will add more information (“overview”, “genres”, “budget”, “revenue”, “runtime”, and “tagline”).</p>

<p><strong>User Story</strong></p>
<ul>
  <li>As a user, I can click a movie, and see that movie’s details</li>
  <li>When a movie’s details are displayed, none of the other movies will be visible; it should just be that movie’s details (header/footer/etc can still be visible, of course!)</li>
  <li>When a movie’s details are displayed, the user should have a way to return to the main view of all movies</li>
</ul>

<p><strong>Suggested completion date</strong></p>
<ul>
  <li>End of Week 1</li>
</ul>

<hr />

<h3 id="iteration-3---network-requests--async-js">Iteration 3 - Network Requests &amp; Async JS</h3>

<p>For the third iteration, we’ll refactor our application to use actual data from the database (information is below) instead of our mocked <code class="language-plaintext highlighter-rouge">movieData</code> file.</p>

<p>The information about the API we are using is located</p>

<section class="answer">
  <h3 id="api-setup-and-documentation">API setup and documentation</h3>

  <p>There is no setup! You are not going to run an API locally to start this project. The API was created by your instructors and it lives on Heroku. The API you’ll be working with lets you make GET, POST, and DELETE requests.</p>

  <h4 id="api-documentation">API Documentation</h4>

  <p>All API endpoints (also known as “routes”) are prefixed with <code class="language-plaintext highlighter-rouge">https://rancid-tomatillos.herokuapp.com/api/v2</code>. Also, wherever you see a <code class="language-plaintext highlighter-rouge">:user_id</code> or <code class="language-plaintext highlighter-rouge">:rating_id</code> in the endpoint documentation, that would be replaced by the ID <em>value</em> in your request, like <code class="language-plaintext highlighter-rouge">5</code>, for instance. Here are the endpoints available:</p>

  <table>
    <thead>
      <tr>
        <th>Purpose</th>
        <th>URL</th>
        <th>Verb</th>
        <th>Request Body</th>
        <th>Sample Response (Happy Path)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Get all movies</td>
        <td><code class="language-plaintext highlighter-rouge">/movies</code></td>
        <td>GET</td>
        <td>N/A</td>
        <td>All movies in database with average rating: <code class="language-plaintext highlighter-rouge">{"movies": [{id: 1, title: "Movie Title", poster_path: "someURL", backdrop_path: "someURL", release_date: "2019-12-04", overview: "Some overview", average_rating: 6 }, ...]}</code></td>
      </tr>
      <tr>
        <td>Get a single movie</td>
        <td><code class="language-plaintext highlighter-rouge">/movies/:movie_id</code></td>
        <td>GET</td>
        <td>N/A</td>
        <td>The movie corresponding to the id sent in the URL: <code class="language-plaintext highlighter-rouge">{"movie": {id: 1, title: "Movie Title", poster_path: "someURL", backdrop_path: "someURL", release_date: "2019-12-04", overview: "Some overview", average_rating: 6, genres: [{id: 18, name:"Drama"}], budget:63000000, revenue:100853753, runtime:139, tagline: "Movie Tagline" }}</code></td>
      </tr>
      <tr>
        <td>Get a single movie’s videos</td>
        <td><code class="language-plaintext highlighter-rouge">/movies/:movie_id/videos</code></td>
        <td>GET</td>
        <td>N/A</td>
        <td>An array of available videos corresponding to the movie whose id is in the URL; this may be an empty array: <code class="language-plaintext highlighter-rouge">[]</code> or <code class="language-plaintext highlighter-rouge">[id: 1, movie_id: 1, key:"SUXWAEX2jlg", site: "YouTube", type:"Trailer"]</code></td>
      </tr>
      <tr>
        <td>Login a user</td>
        <td><code class="language-plaintext highlighter-rouge">/login</code></td>
        <td>POST</td>
        <td><code class="language-plaintext highlighter-rouge">{email: &lt;String&gt;, password: &lt;String&gt;}</code></td>
        <td>A user’s login session information: <code class="language-plaintext highlighter-rouge">{user: {id: 1, name: "Alan", email: "alan@turing.io"}}</code></td>
      </tr>
      <tr>
        <td>Get all the ratings a user has submitted</td>
        <td><code class="language-plaintext highlighter-rouge">/users/:user_id/ratings</code></td>
        <td>GET</td>
        <td>N/A</td>
        <td>A user’s ratings for all movies: <code class="language-plaintext highlighter-rouge">{"ratings": [{id: 1, user_id: 1, movie_id: 1, rating: 6, created_at: "someDate", updated_at: "someDate"},...]}</code></td>
      </tr>
      <tr>
        <td>Submit a new movie rating for a user</td>
        <td><code class="language-plaintext highlighter-rouge">/users/:user_id/ratings</code></td>
        <td>POST</td>
        <td><code class="language-plaintext highlighter-rouge">{ movie_id: &lt;Integer&gt;, rating: &lt;Integer between 1 and 10&gt; }</code></td>
        <td>The rating that was successfully created: <code class="language-plaintext highlighter-rouge">{rating: {user_id: 2, movie_id: 19, rating: 5}}</code></td>
      </tr>
      <tr>
        <td>Delete an existing user’s rating for a movie</td>
        <td><code class="language-plaintext highlighter-rouge">/users/:user_id/ratings/:rating_id</code></td>
        <td>DELETE</td>
        <td>N/A</td>
        <td>204 status code (NO CONTENT in response body)</td>
      </tr>
    </tbody>
  </table>

  <p>All resources are given a unique ID in the database. For instance, every user has an <code class="language-plaintext highlighter-rouge">id</code> property, like <code class="language-plaintext highlighter-rouge">1</code> or <code class="language-plaintext highlighter-rouge">5</code>. Similarly, every movie has a unique ID called <code class="language-plaintext highlighter-rouge">id</code>, and every rating has a unique ID called <code class="language-plaintext highlighter-rouge">id</code>. The IDs are used to reference each item (user, movie, or rating) uniquely. If you need to delete a rating, then you need to know which rating to delete, which is identified by its unique <code class="language-plaintext highlighter-rouge">id</code> value.</p>

  <p>If you are sending information in the body of a request, you will need to set the request header of <code class="language-plaintext highlighter-rouge">Content-Type</code> to <code class="language-plaintext highlighter-rouge">application/json</code>.</p>

  <p>Please note: the server occasionally returns a 500 error. You will need to build in FE functionality to handle this possibility.</p>

  <p>Also note: there are some endpoints here that you will not be using! Read the documentation carefully to find out which routes are useful to you.</p>
</section>

<p><strong>User Story</strong></p>
<ul>
  <li>When the server returns a 500 error, the user will see proper error handling</li>
  <li>No other new features required</li>
  <li>We’re mostly refactoring in this iteration!</li>
</ul>

<p><strong>Suggested completion date</strong></p>
<ul>
  <li>End of first weekend</li>
</ul>

<p><strong>Suggested testing progress by end of iteration</strong></p>
<ul>
  <li>Project board has been updated so functionality is described as user stories</li>
  <li>Each user story includes thorough acceptance criteria</li>
</ul>

<hr />

<h3 id="first-weekend-deliverables">FIRST WEEKEND DELIVERABLES</h3>

<p>By the time class begins in Week 2, these items should be completed:</p>
<ol>
  <li>Iterations 0-3</li>
  <li>Project board has been updated so functionality is described as user stories</li>
  <li>Each user story includes thorough acceptance criteria</li>
  <li>Instructors have been tagged in one PR (see below)</li>
</ol>

<section class="call-to-action">
  <h3 id="pr-review">PR review</h3>

  <p>By Sunday evening at 5pm, please tag your instructors in one PR demonstrating at least one of the following:</p>
  <ul>
    <li>A feature being refactored</li>
    <li>Tests being written</li>
  </ul>

  <p>DO NOT wait on code review from us to merge these PRs in. We will conduct code reviews in the first few days of Week 2.</p>

  <p><strong>Our GH usernames can be found in our Slack profiles</strong></p>

  <p>The point of these code reviews is to get you familiar with common code review practices, and to model the level of detail with which we expect you to be reviewing each others’ PRs!</p>
</section>

<hr />

<h3 id="iteration-4---refactoring-with-router">Iteration 4 - Refactoring with Router</h3>

<p>In the fourth iteration, we will be refactoring our application to use <a href="https://frontend.turing.io/lessons/module-3/react-router-v5.html">Router</a> instead of conditional rendering to change the view!</p>

<p>So far the application has worked like a single page applicaiton. We have different views that are conditionally rendered, but we have to control the logic for when to render certain things. Furthermore, the URL never changes.</p>

<p>To crete a better UX, we’re going to be using <a href="https://reacttraining.com/react-router/web/api/BrowserRouter">React Router</a> to conditionally render our views based on the URL.</p>

<p>This iteration is all about refactoring. Use the table below to add in appropriate routes.</p>

<table>
  <thead>
    <tr>
      <th style="text-align: left">View</th>
      <th style="text-align: left">URL Path</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left">Homepage, logged in or not (from iteration 1)</td>
      <td style="text-align: left"><code class="language-plaintext highlighter-rouge">/</code></td>
    </tr>
    <tr>
      <td style="text-align: left">Movie show page (from iteration 3)</td>
      <td style="text-align: left"><code class="language-plaintext highlighter-rouge">/:movieId</code>, where <code class="language-plaintext highlighter-rouge">movieId</code> is the <code class="language-plaintext highlighter-rouge">id</code> of the movie being displayed</td>
    </tr>
  </tbody>
</table>

<p>As you refactor, continue to rely on your test suite to ensure that no functionality is being lost/destroyed as you add in Router!</p>

<p>Look into the <a href="https://docs.cypress.io/api/commands/location.html#Syntax">Cypress assertions</a> which allow us to view our current URL pathname and add those into your tests!</p>

<section class="note">

  <p>Check out this <a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL#Deeper_dive">article</a> to learn more about URL anatomy.</p>

</section>

<p><strong>User Story</strong></p>
<ul>
  <li>When a user clicks on a movie and the details page is rendered, the URL updates to reflect that movie’s unique ID as well</li>
  <li>The user can click the browser forward &amp; back arrows to navigate</li>
</ul>

<p><strong>Suggested completion date</strong></p>
<ul>
  <li>End of Thursday in Week 2</li>
</ul>

<p><strong>Suggested testing progress by end of iteration</strong></p>
<ul>
  <li>Application views and user flows are fully tested</li>
  <li>Asynchronous functions are stubbed</li>
</ul>

<hr />

<h3 id="iteration-5---choose-your-own-adventure">Iteration 5 - Choose your own adventure</h3>

<p>The final days (last weekend and beginning of Week 3) of this project are designed to give you agency over your learning goals! As a team, consider your learning goals:</p>
<ul>
  <li>What will best serve your team- and individual- learning goals?</li>
  <li>What areas/concepts are still unclear?</li>
  <li>What areas/concepts fit in with your professional goals?</li>
</ul>

<p>Here is a list of concepts (including some push-yourself learning goals):</p>
<ul>
  <li>React</li>
  <li>Router</li>
  <li>Asynchronous JS</li>
  <li>Testing
    <ul>
      <li>Ensure that every view is tested (including all possible renders when dealing with conditional rendering)</li>
      <li>Ensure that all possible user flows are tested (happy and sad paths)</li>
      <li>Ensure all asynchronous JS is properly stubbed</li>
    </ul>
  </li>
  <li>Express (server-side JavaScript)</li>
  <li>Deployment</li>
</ul>

<p>Decide as a team what to focus on.</p>

<section class="note">
  <h3 id="a-word-of-warning">A word of warning!</h3>

  <p>Be realistic. Exercise compassion. Create the safety to be vulnerable with each other!</p>

  <p>If one partner wants to push ahead to new shiny fancy concepts, but another partner is still feeling shaky with React fundamentals, it is more important and better for everyone involved to use the remaining project time to solidify those React fundamentals!</p>

  <p><strong>BEWARE THE LURE OF SHINY NEW THINGS!</strong></p>

  <p>It is <em>far</em> more important to be very, very solid on the project stated learning goals (React, testing).</p>
</section>

<p>Once you have decided on the area to continue learning, decide on a new feature or refactor.</p>

<section class="call-to-action">
  <h3 id="deliverable">DELIVERABLE</h3>
  <p>On Friday of Week 2, send a specific outline of features/work/goals to your instructors in the group DM. Please include user stories, too. Do not begin work until you get the go-ahead from an instructor. (We may help you make your goal more specific or achievable.)</p>

  <p>Here are some ideas:</p>
  <ul>
    <li><strong>More React and/or Router practice:</strong>
      <ul>
        <li>Add a search/filtering functionality for movies</li>
      </ul>
    </li>
    <li><strong>More testing practice:</strong>
      <ul>
        <li>Take time to carefully ensure that you have tested all possible views and user flows</li>
        <li>Check to see if you have a test for each user story (using the story’s acceptance criteria as a guide)</li>
        <li>Supplement your Cypress tests with unit tests and integration tests by using the React Testing Library</li>
      </ul>
    </li>
    <li><strong>Push yourself</strong> (extra learning if every member of the team feels SUPER CONFIDENT in everything React, Router, and testing)<strong>:</strong>
      <ul>
        <li>Create your own Express microservice to store user ratings for movies; build FE functionality to use and display that service</li>
        <li>Create your own Express microservice to store user favorites; build FE functionality to use and display that service</li>
        <li>Create your own Express microservice to store which movies the user has watched; build FE functionality to use and display that service</li>
        <li>Deploy your React app (to GitHub Pages or Heroku)</li>
      </ul>
    </li>
  </ul>

  <p>You are welcome to come up with your own ideas, too.</p>
</section>

<p><strong>Suggested completion date</strong></p>
<ul>
  <li>Iteration 5 Deliverables due Thursday of Week 2</li>
  <li>Project should be completed by end of Monday of Week 3 (aim to leave final day for polishing the project, not building out features!)</li>
</ul>

<hr />

<h3 id="project-due-date-9pm-tuesday-of-week-3">PROJECT DUE DATE: 9pm Tuesday of Week 3</h3>

<p>On Tuesday, instructors will post a link to a gist in the cohort slack channel. Please add a comment to that gist with:</p>

<ul>
  <li>Both project partners’ names</li>
  <li>A link to your project repo</li>
  <li>If applicable: any links to back-end repo and/or deployed site</li>
</ul>

<section class="note">
  <h3 id="project-evals">Project Evals</h3>

  <p>In Mod 3, instructors grade your projects asynchronously, providing thorough notes and feedback, which you will receive before our project evals. During project evals, you will begin building skills of talking about your code and answering technical interview questions through the context of the project.</p>
</section>

<hr />

<h2 id="rubric">Rubric</h2>

<p>Remember: scores are an indicator of your progress in specific areas. Use them to inform/update your future study patterns!</p>

<p>Score key:</p>
<ul>
  <li><strong>4:</strong> above and beyond expectations; team did self-teaching</li>
  <li><strong>3:</strong> right on track; team is exactly where instructors expect them to be</li>
  <li><strong>2:</strong> a little behind; be sure to devote study &amp; practice time to this area in order to accelerate growth/understanding</li>
  <li><strong>1:</strong> very behind; strongly recommend team reaches out to instructors to create a plan to catch up in this area</li>
</ul>

<h3 id="project-professionalism">Project Professionalism</h3>

<p>The goal of this rubric section is to continue to gauge your readiness and prepare you for workplace standards. As you ramp up your job hunt, it becomes increasingly important to demonstrate to future employers that you are not sloppy and take care with the details of your work and processes!</p>

<ul>
  <li><strong>4:</strong>
    <ul>
      <li>README concisely communicates the team’s individual and joint learning goals, the evolution of the project, and team member reflections while using good formatting to enhance readability</li>
      <li>README links to all user GitHub profiles and any applicable repos/deployed sites</li>
      <li>Team uses a rebase workflow</li>
      <li>Git commits are atomic, with concise and precise descriptions of the change made</li>
      <li>PRs have full, consistent descriptions</li>
      <li>Team members do consistent, thorough, meaningful code reviews of PRs, which prompt updates and changes made to that PR before merging</li>
      <li>Evolution of the project (decisions made, etc) are fully and clearly documented in the git history and PRs</li>
      <li>When the project is run locally, the terminal shows no errors or warnings</li>
    </ul>
  </li>
  <li><strong>3:</strong>
    <ul>
      <li>README concisely communicates the team’s individual and joint learning goals, the evolution of the project, and team member reflections while using good formatting to enhance readability</li>
      <li>README links to all user GitHub profiles and any applicable repos/deployed sites</li>
      <li>Git commits are atomic, with concise and precise descriptions of the change made</li>
      <li>PRs have full, consistent descriptions</li>
      <li>Team members do some code reviews of PRs, but are not always thorough or consistent</li>
      <li>Evolution of the project (decisions made, etc) is documented in the git history and PRs but is sometimes unclear</li>
      <li>When the project is run locally, the terminal shows no errors and fewer than 5 warnings</li>
    </ul>
  </li>
  <li><strong>2:</strong>
    <ul>
      <li>README concisely communicates the team’s individual and joint learning goals and the evolution of the project, but does not use Markdown formatting to aid readability</li>
      <li>README links to all user GitHub profiles and any applicable repos/deployed sites</li>
      <li>Git commits are mostly atomic but sometimes document changesets that are too large</li>
      <li>PRs do not have thorough descriptions</li>
      <li>Team members mostly do not do code reviews on PRs</li>
      <li>Evolution of the project (decisions made, etc) is not clearly documented through git commits and PRs</li>
      <li>When the project is run locally, the terminal shows no errors and more than 5 warnings</li>
    </ul>
  </li>
  <li><strong>1:</strong>
    <ul>
      <li>README does not document the team’s individual and joint learning goals, the evolution of the project, and is poorly formatted (hindering readability)</li>
      <li>README does not include links to team member’s GitHub profiles</li>
      <li>Git commits are not atomic and document changesets that are too large</li>
      <li>PRs do not have thorough descriptions, and no code reviews are conducted, merging bugs into the main branch</li>
      <li>When the project is run locally, the terminal shows errors and more than 5 warnings</li>
    </ul>
  </li>
</ul>

<h3 id="react-architecture">React Architecture</h3>

<ul>
  <li><strong>4:</strong>
    <ul>
      <li>A consistent, modular file structure is used</li>
      <li>A clear understanding of class components vs function components is demonstrated</li>
      <li>Only the data that a child component <em>needs</em> is passed down as props</li>
      <li>Logic is kept out of <code class="language-plaintext highlighter-rouge">return</code> statements; <code class="language-plaintext highlighter-rouge">return</code> statements are as readable as possible, only communicating what will be displayed</li>
      <li>Fetch calls have been refactored to be reusable for multiple queries</li>
      <li>Frontend data (state) always matches the backend data</li>
      <li>Data fetched from API is run through a cleaning function (which is defined in a separate <code class="language-plaintext highlighter-rouge">utilities</code> file)</li>
      <li>Implements excellent error handling if movie database server is down or fetch fails (this includes loading images as well as error messages on the frontend)</li>
    </ul>
  </li>
  <li><strong>3:</strong>
    <ul>
      <li>A consistent, modular file structure is used</li>
      <li>A clear understanding of class components vs function components is demonstrated</li>
      <li>Only the data that a child component <em>needs</em> is passed down as props</li>
      <li>Logic is kept out of return statements; return statements are as readable as possible, only communicating what will be displayed</li>
      <li>There are some issues with the asynchronous JS where the frontend is not matching with the backend</li>
      <li>There are multiple functions (including fetch calls) that are doing similar pieces of functionality that could continue to be refactored</li>
      <li>Data fetched from API is not cleaned before being set to state</li>
    </ul>
  </li>
  <li><strong>2:</strong>
    <ul>
      <li>The file structure is inconsistent and/or not modular</li>
      <li>There is some confusion about when to use a class or function component, but it does not strongly hinder functionality</li>
      <li>Unnecessary data is passed down to child components as props</li>
      <li><code class="language-plaintext highlighter-rouge">return</code> statements contain logic that should be refactored out for the sake of readability and performance</li>
      <li>There are methods that are being created inside of functional components that should be passed down through props from a parent class component</li>
      <li>API calls have not been broken out into their own file</li>
    </ul>
  </li>
  <li><strong>1:</strong>
    <ul>
      <li>Project shows little understanding of React and significant refactoring is required, including but not limited to:
        <ul>
          <li>component structure is inconsistent or buggy</li>
          <li>a class component is used when a function component is preferable, and/or vice versa</li>
          <li>props are being passed or accessed incorrectly</li>
          <li>props are being mutated</li>
          <li>state is directly mutated</li>
        </ul>
      </li>
      <li>File structure is not modular.</li>
    </ul>
  </li>
</ul>

<h3 id="testing">Testing</h3>

<ul>
  <li><strong>4:</strong>
    <ul>
      <li>Team has successfully achieved 90%+ test coverage of all components</li>
      <li>All async functionality is stubbed and tested</li>
      <li>Async tests cover happy &amp; sad paths</li>
      <li>All application views are tested</li>
      <li>All user flows are tested</li>
    </ul>
  </li>
  <li><strong>3:</strong>
    <ul>
      <li>All application views are tested</li>
      <li>All user flows are tested</li>
      <li>Happy path async functionality is stubbed and tested</li>
    </ul>
  </li>
  <li><strong>2:</strong>
    <ul>
      <li>Most application views are testeed</li>
      <li>A valid attempt is made at testing user flows; some flows may be missing or incomplete</li>
      <li>Little or no attempt at async testing was made</li>
    </ul>
  </li>
  <li><strong>1:</strong>
    <ul>
      <li>Many application views tests are missing/failing</li>
      <li>Little or no attempt is made at testing user flows</li>
      <li>Little or no attempt is made at async testing</li>
      <li>There are obvious, large gaps in testing app functionality</li>
    </ul>
  </li>
</ul>

<h3 id="routing">Routing</h3>

<ul>
  <li><strong>4:</strong>
    <ul>
      <li>Application has been refactored to use Router without leaving artifacts of the prior code (no odd workarounds remaining)</li>
      <li>Use of Router shows developer empathy (readability, maintainability)</li>
      <li>Application uses React Router components and does not manipulate the <code class="language-plaintext highlighter-rouge">history</code> object</li>
      <li>A 404 page handles undefined routes</li>
      <li>UX is excellent; routes are consistent and navigation is clear</li>
    </ul>
  </li>
  <li><strong>3:</strong>
    <ul>
      <li>Application uses Router to display appropriate components based on URL</li>
      <li>Refactoring was clean; there may be a few code smells showing the existence of the prior code, but there are no major bugs indicating a lack of understanding of Router</li>
      <li>Application uses React Router components and does not manipulate the <code class="language-plaintext highlighter-rouge">history</code> object</li>
      <li>UX is clear and set up so the user has access to previous routes</li>
    </ul>
  </li>
  <li><strong>2:</strong>
    <ul>
      <li>Application uses Router but does not display the appropriate components when navigating throughout the app</li>
      <li>Refactoring is messy; there are remnants of the previous code or other code smells that indicate that Router is not clearly understood</li>
      <li>There are 1+ issues with the UX; access to routes is unclear or not fully implemented</li>
    </ul>
  </li>
  <li><strong>1:</strong>
    <ul>
      <li>Application uses Router but fails to properly display all necessary routes</li>
      <li>Application does not use built-in React Router components and instead directly manipulates the <code class="language-plaintext highlighter-rouge">history</code> object</li>
      <li>UX is challenging; multiple pages are missing links to routes, or browser Back/Forward arrow navigation does not work</li>
    </ul>
  </li>
</ul>
