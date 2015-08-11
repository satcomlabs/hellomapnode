# hellomapnode
A simple Express.js project showing ESRI and Google map base layers with the simulated Inmarsat Location API.

In order to run this project you will need to install [Node.js](https://nodejs.org/)

Once installed clone this project by opening a command prompt and entering

```
git clone https://github.com/Inmarsat/hellomapnode.git
```

Then use the following commands using the command prompt in the same directory

```
cd hellomapnode
npm install
npm start
```

Now go to http://localhost:3000 and click the button to see the maps in action

The app will automatically call the Inmarsat Global Xpress Location sandbox API every minute and add a new point to the map when new location coordinates are received.

Find out more about the Inmarsat APIs at http://developer.inmarsat.com

![Screenshot](http://i.imgur.com/7MkpYeR.png "Screenshot")


