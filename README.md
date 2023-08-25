# CAN Bus GUI 

Complete GUI for the CAN Bus Project. 

Followed this presentation for design: [Presentation link](https://docs.google.com/presentation/d/17ygRXtBKnn2aTyCnaIcUy-i96TaNG3Dn/edit?usp=sharing&ouid=117694041317561918445&rtpof=true&sd=true)

Starting Screen:

<img width="1404" alt="Screenshot 2023-08-25 at 3 26 51 PM" src="https://github.com/shruti-create/CAN_Bus_GUI/assets/68794846/8dbe66c3-aea4-4bfb-a175-14dda44554c5">

Features:
- Includes buttons within separate tabs and sample functionality (ex. Steering tab and it's buttons for "Turn Left", "Turn Right", "Keep Straight", and "Random")
- Saves state of clicked buttons and resets button state with the "Stop Effects" button, resets application with the "Exit" button
- Screen resized based on viewport width and all components resize as needed to maintain the GUI
- Logs recorded through history section, Date/Time shown on the titlebar, and sample functionality in Connect to Adapter button
- Detailed comments on how to add more functionality to the buttons and where to potentially connect to backend

## How to Connect this React App to Python Backend

1) Choose a Web Framework and Install - Flask is popular for Python Web Backends.
2) Define API endpoints/routes in your backend to handle requests from the front end.
3) Use the built in "fetch" API or a librarly like "axios" in your react app to make HTTP requests from the React components to the backend endpoints.
4) To allow Frontend/Backend Communication, handle Cross-Origin Resource Sharing (CORS) and configure it to allow requests from the React frontend domain. You can use libraries like "flask-cors" for this.

This is a very high level overview, but hopefull it serves as a good starting point!
