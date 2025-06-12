# Portfolio Project

This is a portfolio website that I have built as a full-stack application from scratch. The project was be split into four phases which are described below.

Now that it is complete, the website is hosted on https://jackchiplin-portfolio.netlify.app/blog. This should work well on both a desktop and mobile! Please contact me if you find any issues!

### Phase 1 - Portfolio (COMPLETE)

The main goal of this phase is to learn and integrate some new frontend technologies that I have never used before without having to worry about a complicated backend setup. I have hosted this website on Netlify which automatically redeploys the site when the main branch is updated. Future work will happen on a separate branch until it is production-ready.

The website contains three main pages:
- A **Homepage** where you can find basic information about me and my goals
- A **Projects** page where you can view details on my past projects
- A **Competencies** page where you can view all programming languages, frameworks and tools that I have experience in

The website is built using the following tools:
- Node.js as the development environment to manage dependencies and scripts
- React to build the frontend to make easily reusable JSX components
- Vite as the build tool to transpile the code into a browser-readable format
- Tailwind CSS for pre-made and descriptive CSS classes for easy and efficient styling
- Netlify for simple, cheap frontend deployment


### Phase 2 - Blog Frontend (COMPLETE)

Once phase 1 was complete and deployed, I added another page to the frontend of the project. This is a blog feed where I can post about new things I am learning or doing in my life.

The blog page will have a log in system with proper authentication and authorisation methods for security purposes. Only my user will be authorised to post on the blog feed, but any user can create an account, log in and leave comments.

The frontend of the blog part of the project is built using the same technologies as the portfolio in Phase 1.


### Phase 3 - Blog Backend (COMPLETE)

The backend of the blog has an API and database to handle registering and logging in, blog post creation and commenting. I will be creating a secure REST API using many different HTTP methods for communication with the backend and database:
- Express.js as the backend API framework with Node.js as the runtime
- PostgreSQL relational database
- Fully integrated JWT authentication


### Phase 4 - Final Deployment (COMPLETE)

The frontend of the project is deployed on Netlify as previously mentioned.

The backend of the project was originally going to be hosted on Heroku, but I decided against it. Instead, the backend and database are hosted together on my boyfriend's Arch Linux server and are running persistently. My reasons for this decision can be seen on the blog itself!


# Local Build Instructions
To build this frontend website yourself, open up a terminal and navigate to where you want the project to be located. Begin by cloning the repository and moving into the directory:
```bash
git clone https://github.com/Jamming17/portfolio.git
cd portfolio
```
Make sure you have [node.js](https://nodejs.org/en/download) and npm installed on your system (node v20 or later recommended). Once installed, run the following command to install all packages for the project.
```bash
npm install
```
Lastly, start the website with Vite using the following command:
```bash
npm run dev
```
This will build the website and run it locally. This can be accessed on http://localhost:5173, but if this doesn't work, press `o + Enter` on the command line to open in a browser.

# My Links

[LinkedIn](https://www.linkedin.com/in/jack-chiplin-b60164334/)