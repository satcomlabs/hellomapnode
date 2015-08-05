# hellomapnode
A simple Express.js project showing ESRI and Google map base layers with the simulated Inmarsat Location API.

In order to run this project you will need to install Node.js https://nodejs.org/

Once installed clone this project by opening a command prompt and entering
git clone https://github.com/Inmarsat/hellomapnode.git

Then use the following commands in the command prompt in the same directory

cd hellomapnode

npm install

npm install node-rest-client

npm start

Now go to http://localhost:3000/googlemap or http://localhost:3000/esrimap

The map will automatically call the Inmarsat Global Xpress sandbox API every minute and update the map when a new location point is received.

Find out more about the Inmarsat APIs at http://developer.inmarsat.com

