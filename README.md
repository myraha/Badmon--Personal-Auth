# Joey Bada$$ Personal Authorization

This is an app that allows users sign up with an email and password, and then log in to post youtube video links of Joey Bada$$, aka the Badmon, aka Greatest Rapper Alive. Any end users caught posting non-Badmon related links will be banned for life.

**Link to project:** https://github.com/myraha/Badmon--Personal-Auth

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js Express, Mongo, Passport

In order for the embedded links to work properly, the end user must find the video of interest, click on the `Share` button, copy the URL (it will look like https://youtu.be/75rKK3xyoHM) and then change `youtu.be` to `youtube.com/embed` (end result should look like https://youtube.com/embed/75rKK3xyoHM).  This is a required step because youtube will block access because of CORS otherwise.  The videos are embedded into the frontend using the `<iframe>` tag.

## Lessons Learned:
I learned to use the correct youtube link type in order to embed it into a separate web application!
