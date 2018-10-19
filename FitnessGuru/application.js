//# sourceURL=application.js

//
//  application.js
//
//  Created by Gurunath Allapure on 04/10/18.
//  Copyright © 2018 Gurunath Allapure. All rights reserved.
//

/*
 * This file provides an example skeletal stub for the server-side implementation 
 * of a TVML application.
 *
 * A javascript file such as this should be provided at the tvBootURL that is 
 * configured in the AppDelegate of the TVML application. Note that  the various 
 * javascript functions here are referenced by name in the AppDelegate. This skeletal 
 * implementation shows the basic entry points that you will want to handle 
 * application lifecycle events.
 */

/**
 * @description The onLaunch callback is invoked after the application JavaScript 
 * has been parsed into a JavaScript context. The handler is passed an object 
 * that contains options passed in for launch. These options are defined in the
 * swift or objective-c client code. Options can be used to communicate to
 * your JavaScript code that data and as well as state information, like if the 
 * the app is being launched in the background.
 *
 * The location attribute is automatically added to the object and represents 
 * the URL that was used to retrieve the application JavaScript.
 */



var myJSON = {
    "productInfo": {
        "Name": "Fitness Guru",
        "Description": "Physical activity or exercise can improve your health and reduce the risk of developing several diseases like type 2 diabetes, cancer and cardiovascular disease. Physical activity and exercise can have immediate and long-term health benefits. Most importantly, regular activity can improve your quality of life. A minimum of 30 minutes a day can allow you to enjoy these benefits..",
        "Thumbanail": "https://www.verywellfit.com/thmb/BebPKxIRNfz-QYECQfu9CaW2DSU=/1920x1080/filters:fill(FFDB5D,1)/Illo_Exercise-5a626d274e4f7d00373dead6.png"
    },
    "data": [{
             "Catid": 1,
             "CatName": "Endurance",
             "CatDescription": "Endurance, or aerobic, activities increase your breathing and heart rate. They keep your heart, lungs, and circulatory system healthy and improve your overall fitness. Building your endurance makes it easier to carry out many of your everyday activities.",
             "CatThumbnail": "https://www.verywellfit.com/thmb/BebPKxIRNfz-QYECQfu9CaW2DSU=/1920x1080/filters:fill(FFDB5D,1)/Illo_Exercise-5a626d274e4f7d00373dead6.png",
             "CatVideosCount": 10,
             "VideoURL": "http://trailers.apple.com/movies/focus_features/9/9-clip_480p.mov",
             "SubCategory": [{
                             "Thumbnail": "https://s3.ap-south-1.amazonaws.com/fitnessguru1/endurance/plank.jpg",
                             "VideoURL": "https://s3.ap-south-1.amazonaws.com/fitnessguru1/endurance/How+to+Plank.mp4",
                             "Title": "Plank",
                             "Description" : "The basic plank is simple: Assume a modified push-up position with your elbows bent 90 degrees and both forearms resting on the floor. Position your elbows directly underneath your shoulders and look straight toward the floor. Your body should form a perfectly straight line from the crown of your head to your heels.",
                             "subCatId" : 1
                             },
                             {
                             "Thumbnail": "https://s3.ap-south-1.amazonaws.com/fitnessguru1/endurance/squat.jpg",
                             "VideoURL": "https://s3.ap-south-1.amazonaws.com/fitnessguru1/endurance/squat.mp4",
                             "Title": "Squat",
                                "Description" : "Squats predominately work your butt (glutes) and thighs (hamstrings and quadriceps) but abs, obliques, lower back, calves, and the ankle complex all play supportive roles.",
                             "subCatId" : 2
                             },
                             {
                             "Thumbnail": "https://s3.ap-south-1.amazonaws.com/fitnessguru1/endurance/push_up.jpg",
                             "VideoURL": "https://s3.ap-south-1.amazonaws.com/fitnessguru1/endurance/push_up.mp4",
                             "Title": "Push up",
                                "Description" : "Pushups are a basic exercise used in civilian athletic training or physical education and, especially, in military physical training and will develop the pectoral muscles and triceps, with ancillary benefits to the deltoids, serratus anterior, coracobrachialis and the midsection as a whole.",
                             "subCatId" : 3
                             },
                             {
                             "Thumbnail": "https://s3.ap-south-1.amazonaws.com/fitnessguru1/endurance/walking_lunges.jpg",
                             "VideoURL": "https://s3.ap-south-1.amazonaws.com/fitnessguru1/endurance/walking_lunges.mp4",
                             "Title": "Walk Lunges",
                                "Description" : "A lunge can refer to any position of the human body where one leg is positioned forward with knee bent and foot flat on the ground while the other leg is positioned behind. It is used by athletes in cross-training for sports, by weight-trainers as a fitness exercise, and by yogis as part of an asana regimen",
                             "subCatId" : 4
                             }
                             ]
             },
             {
             "Catid": 2,
             "CatName": "Strength",
             "CatDescription": "Strength exercises make your muscles stronger. They may help you stay independent and carry out everyday activities, such as climbing stairs and carrying groceries.",
             "CatThumbnail": "",
             "CatVideosCount": 12,
             "SubCategory": [{
                             "Thumbnail": "http://127.0.0.1:9001/resources/images/general/square_l_4.jpg",
                             "VideoURL": "https://s3.ap-south-1.amazonaws.com/fitnessguru1/1507940118923-hysdc8.mp4",
                             "Title": "Strength - 1"
                             },
                             {
                             "Thumbnail": "http://127.0.0.1:9001/resources/images/general/square_l_5.jpg",
                             "VideoURL": "https://s3.ap-south-1.amazonaws.com/fitnessguru1/1507940118923-hysdc8.mp4",
                             "Title": "Strength - 2"
                             },
                             {
                             "Thumbnail": "http://127.0.0.1:9001/resources/images/general/square_l_1.jpg",
                             "VideoURL": "https://s3.ap-south-1.amazonaws.com/fitnessguru1/1507940118923-hysdc8.mp4",
                             "Title": "Strength - 3"
                             },
                             {
                             "Thumbnail": "http://127.0.0.1:9001/resources/images/general/square_l_8.jpg",
                             "VideoURL": "https://s3.ap-south-1.amazonaws.com/fitnessguru1/1507940118923-hysdc8.mp4",
                             "Title": "Strength - 4"
                             }
                             ]
             },
             {
             "Catid": 3,
             "CatName": "Balance",
             "CatDescription": "Balance exercises help prevent falls, a common problem in older adults. Many lower-body strength exercises will also improve your balance",
             "CatThumbnail": "http://img.png",
             "CatVideosCount": 17,
             "SubCategory": [{
                             "Thumbnail": "http://127.0.0.1:9001/resources/images/general/square_l_6.jpg",
                             "VideoURL": "https://s3.ap-south-1.amazonaws.com/fitnessguru1/1507940118923-hysdc8.mp4",
                             "Title": "Balance - 1"
                             },
                             {
                             "Thumbnail": "http://127.0.0.1:9001/resources/images/general/square_l_8.jpg",
                             "VideoURL": "https://s3.ap-south-1.amazonaws.com/fitnessguru1/1507940118923-hysdc8.mp4",
                             "Title": "Balance - 2"
                             },
                             {
                             "Thumbnail": "http://127.0.0.1:9001/resources/images/general/square_l_10.jpg",
                             "VideoURL": "https://s3.ap-south-1.amazonaws.com/fitnessguru1/1507940118923-hysdc8.mp4",
                             "Title": "Balance - 3"
                             }
                             ]
             },
             {
             "Catid": 4,
             "CatName": "Flexibility",
             "CatDescription": "Flexibility exercises stretch your muscles and can help your body stay limber. Being flexible gives you more freedom of movement for other exercises as well as for your everyday activities, including driving and getting dressed",
             "CatThumbnail": "http://img.png",
             "CatVideosCount": 15,
             "SubCategory": [{
                             "Thumbnail": "http://127.0.0.1:9001/resources/images/general/square_l_7.jpg",
                             "VideoURL": "https://s3.ap-south-1.amazonaws.com/fitnessguru1/You+can+do+it+at+home!.mp4",
                             "Title": "Flexibility - 1",
                             "Description" : "A lunge can refer to any position of the human body where one leg is positioned forward with knee bent and foot flat on the ground while the other leg is positioned behind. It is used by athletes in cross-training for sports, by weight-trainers as a fitness exercise, and by yogis as part of an asana regimen"

                             }
                             ]
             }
             ]
    
}

const API = "https://s3.ap-south-1.amazonaws.com/fitnessguru1/fitness.json";
App.onLaunch = function(options) {
    console.log("OnLaunch")
    fetchFitnessData()
}


function fetchFitnessData() {
    var loadingIndicator = indicator("Loading Categories...")
    navigationDocument.pushDocument(loadingIndicator)
    
    apiRequest(function (data) {
//               myJSON = data
               var compilation = createCompilation();
               navigationDocument.replaceDocument(compilation, loadingIndicator);
               });

}

//######################################## LoadingTemplate ########################################

var indicator = function(title) {
    
    var loadingTemplate = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
    <loadingTemplate>
    <activityIndicator>
    <title>${title}</title>
    </activityIndicator>
    </loadingTemplate>
    </document>`
    
    var parser = new DOMParser();
    var indicatorDoc = parser.parseFromString(loadingTemplate, "application/xml");
    return indicatorDoc
}

//######################################## API Call ########################################

function apiRequest(callback) {
    
    var urlRequest = API
    var httpRequest = new XMLHttpRequest();
    
    httpRequest.responseType = 'json';
    httpRequest.onreadystatechange = function() {
        
        //We check to see if the request finished and response is ready
        if (httpRequest.readyState==4 && httpRequest.status==200) {
            
            var jsonData = JSON.parse(httpRequest.responseText);
            callback(httpRequest.response);
        }
    }
    httpRequest.open("GET", urlRequest, true);
    httpRequest.send();
}


//######################################## CompilationTemplate ########################################

var generateItemsForCompilationTemplate = function(dataAssets)
{
    
    var items = "";

    for (var i=0;i<dataAssets.length;i++)
    {
        var asset = dataAssets[i];

        items = items + '<listItemLockup autoHighlight="true" catID="' + asset.Catid + '" Title="' + asset.CatName + '" desc="' + asset.CatDescription +'" imageUrl="' + asset.CatThumbnail + '" videoURL=  "' + asset.videoURL + '"    >'
        + '<ordinal minLength="2">' + asset.Catid + '</ordinal>'
        + '<title>' + asset.CatName + '</title>'
        + '<decorationLabel>' + asset.SubCategory.length + '</decorationLabel>'
        + '<id>' + asset.Catid + '</id>'
        + '</listItemLockup>';
    }
    
    return items;
}

var createCompilation = function() {


    var assets = myJSON.data
    var xmlShelf = generateItemsForCompilationTemplate(assets);
    
    var compilationString = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
    <head>
    <style>
    </style>
    </head>
    <compilationTemplate theme="dark">
    <list>
    <relatedContent>
    <itemBanner>
    <heroImg src="${myJSON.productInfo.Thumbanail}" width="556" height="556" />
    </itemBanner>
    </relatedContent>
    <header>
    <title>${myJSON.productInfo.Name}</title>
    </header>
    <section>
    <description handlesOverflow="true" >${myJSON.productInfo.Description}</description>
    </section>
    <section>
            ${xmlShelf}
    </section>
    </list>
    </compilationTemplate>
    </document>`


    var parser = new DOMParser();
    var compileDoc = parser.parseFromString(compilationString, "application/xml");
    compileDoc.addEventListener("select", this.pushProductTemplate.bind(this), false);
    return compileDoc
}


//######################################## ProductTemplate ########################################

var generateShelfForProductTemplate = function(data, index)
{
    
    var items = "";
  
    for (var i=0;i<data.length;i++)
    {
        var shelf = data[i];
        items += '<lockup action="LockupTapped" videoURL="'+shelf.VideoURL+'" CategoryID ="'+ index +'" description="'+shelf.Description+'"><img src="' + shelf.Thumbnail + '" width="182" height="274" /><title>' + shelf.Title + '</title></lockup>';
    }
    return items;
}

function pushProductTemplate(event) {
    
    var target = event.target;
    
    var title = target.getAttribute('Title')
    var image = target.getAttribute('imageUrl')
    var videoURL = target.getAttribute('videoURL')
    var desc = target.getAttribute('desc')
    
    var index = target.getAttribute('catID')
    
    var assets = myJSON.data[index-1].SubCategory
    var xmlShelf = generateShelfForProductTemplate(assets, index);
    
   //We get the Title, Description, thumbnail, VideoURL pass this data to banner and using Catid retrive the subCategory's and inject them to lockup
    var productString = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
    <head>
    <style>
    .showTextOnHighlight {
        tv-text-highlight-style: show-on-highlight;
    }
    .badge {
        tv-tint-color: rgb(0, 0, 0);
    }
    .9ColumnGrid {
        tv-interitem-spacing: 51;
    }
    @media tv-template and (tv-theme:dark) {
        .badge {
            tv-tint-color: rgb(255, 255, 255);
        }
    }
    </style>
    </head>
    <productTemplate theme="dark">
    <banner>
    <stack>
    <title>${title}</title>
    <description handlesOverflow="true">${desc}</description>
    <row>
    <buttonLockup>
    </buttonLockup>
    </row>
    </stack>
    <heroImg src="${image}" width="400" height="600" />
        </banner>
        <shelf class="9ColumnGrid">
    <header>
    <title>Video Tutorials</title>
    </header>
    <section>
    ${xmlShelf}
    </section>
    </shelf>
    </productTemplate>
    </document>`
        
    var parser = new DOMParser();
    var domElement = parser.parseFromString(productString, "application/xml");
    domElement.addEventListener("select", this.productShelfPressed.bind(this), false);
    navigationDocument.pushDocument(domElement);
}

function productShelfPressed(event) {
    
    var target = event.target;
    var action = target.getAttribute('action')
    var CatID = target.getAttribute('CategoryID')
    
    if (action === 'LockupTapped') {
        pushShowCaseTemplate(CatID)
    }

}

//######################################## showcaseTemplate ########################################
var generateShelfForShowCaseTemplate = function(catID) {
    
 
    var assets = myJSON.data[catID-1].SubCategory
    
    var shelfXML = "";
    
    for (var i=0;i<assets.length;i++) {
        
        var asset = assets[i];
        
        shelfXML = shelfXML + '<lockup asset="' + asset.subCatId + '" videoURL="'+ asset.VideoURL +'">'
        + '<img src="' + asset.Thumbnail +'" width="824" height="466" />'
        + ' <title>'+ asset.Title +'</title>'
        + '<description>'+ asset.Description +'</description>'
        + '</lockup>';
        
    }
    return shelfXML;
}
function pushShowCaseTemplate(catID) {
    

    var xmlShelf;
    
    xmlShelf = generateShelfForShowCaseTemplate(catID);
    
    var XMLString = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
    <showcaseTemplate theme = "dark">
    <background>
    <img src="http://127.0.0.1:9001/resources/images/general/bg_dark.jpg"/>
    </background>
    <banner>
    <title>Video's</title>
    </banner>
    <carousel>
    <section>
    ${xmlShelf}
    </section>
    </carousel>
    </showcaseTemplate>
    </document>`
    
    var parser = new DOMParser();
    var domElement = parser.parseFromString(XMLString, "application/xml");
    domElement.addEventListener("select", this.launchPlayer.bind(this), false);
    navigationDocument.pushDocument(domElement);
}
//######################################## Video Player ########################################

function launchPlayer(event) {

    var target = event.target;
    var URL = target.getAttribute('videoURL')
    
    var player = new Player();
    var playlist = new Playlist();
    var mediaItem = new MediaItem("video", URL);
    player.playlist = playlist;
    player.playlist.push(mediaItem);
    player.present();
}



App.onWillResignActive = function() {
    
}

App.onDidEnterBackground = function() {
    
}

App.onWillEnterForeground = function() {
    
}

App.onDidBecomeActive = function() {
    
}

App.onWillTerminate = function() {
    
}
