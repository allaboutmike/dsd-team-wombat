# dsd-team-wombat

DSD Cohort 8 Repostiory

The what, why, and the how...

What was your motivation? We were motivated to build this project to grow as developers, bringing our different styles and skills to the group, we were all excited to build, share, and learn from each other.

Why did you build this project? We built this product to learn more about solving problems in the particular area of facial recognition technology and ai, as one of the main directions technology is flowing currently.

What problem does it solve? Access secure workspace using the efficiency of facial recognition.

What did you learn? I learned about the latest React updates, not only utilizing Vite which has been the recent standard, but React 19.0 release has a host of additional features that I am familiarizing myself with. Additionally, using the facial recognition technology (Deepface) and getting to know more about its capabilities and limitations, as well as how to manage the python with a Java backend, utilizing Flask with Docker.

# Features?

# Wombat Visage

- Description: Provide lightweight secure workspace access with your face
- Other names: 'FaceSpace', 'Faceface', 'VeriFace', 'Fase'

# Project Description

<!-- - explain and showcase:
What your application does,
Why you used the technologies you used,
Some of the challenges you faced and features you hope to implement in the future. -->

## Table of Contents

- Title
- Installation
- Use
- Screenshots
- Authentication
- Credits & References

# Installation

1. Clone the repo
2. Make sure to move into 'user' directory
3. Install Node: npm install
4. Run the development environment with 'npm run dev' and open browser in localhost

# How to Use the Project

Upon load, user arrives at the landing view with a button that will initiate the webcam view component. With live camera view, a 'capture' button is displayed: upon clicking it will capture current frame and display it to the right as well as a submit button and field. The user may repeat this process until the image is to their liking. When ready, user fills in badgeID and clicks the submit button.

At this point the image is sent to the server/API for verification (Deepface). If the response returns 'true', user view changes to "Success." If response returns 'false', the Admin is notified and sent an option to review the attempt with an option to manually override. If overridden, user view changes to "Success" as well. Otherwise, the authentication has failed and the user will be locked out.

<!-- Screenshots -->

# Credits

<!-- List your collaborators/team members. Links to GitHub profiles and social media.

Tutorials or referenced that might help the user to build that particular project, w links. -->

# License

# Badges

# How to Contribute to the Project

<!-- This mostly will be useful if you are developing an open-source project that you will need other developers to contribute to. You will want to add guidelines to let them know how they can contribute to your project.

Also it is important to make sure that the licence you choose for an open-source projects is correct to avoid future conflicts. And adding contribution guidelines will play a big role.

Some of the most common guidelines include the Contributor Covenant and the Contributing guide. Thes docs will give you the help you need when setting rules for your project. -->

# Tests

<!-- Tests & code examples and how to run them. -->
