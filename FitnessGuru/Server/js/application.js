//# sourceURL=application.js

//
//  application.js
//  FitnessGuru
//
//  Created by Neeraj Khede on 04/10/18.
//  Copyright © 2018 Neeraj Khede. All rights reserved.
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
App.onLaunch = function(options) {
    // Determine the base URL for remote server fetches from launch options, which will be used to resolve the URLs
    // in XML files for this app.
    const baseURL = options.baseURL;
    console.log(baseURL)
    // Specify all the URLs for helper JavaScript files
    const helperScriptURLs = [
                              "DocumentLoader",
                              "DocumentController",
                              "Category"
                              ].map(
                                    moduleName => `${baseURL}js/${moduleName}.js`
                                    );
    
    // Show a loading spinner while additional JavaScript files are being evaluated
    let loadingDocument = createLoadingDocument();
    if (typeof navigationDocument !== "undefined") {
        navigationDocument.pushDocument(loadingDocument);
    }
    
    // evaluateScripts is responsible for loading the JavaScript files neccessary
    // for this app to run. It can be used at any time in your apps lifecycle.
    console.log(helperScriptURLs)
    evaluateScripts(helperScriptURLs, function(scriptsAreLoaded) {
                    if (scriptsAreLoaded) {
                    // Instantiate the DocumentLoader, which will be used to fetch and resolve URLs from the fecthed XML documents.
                    // This instance is passed along to subsequent DocumentController objects.
                    const documentLoader = new DocumentLoader(baseURL);
                    const documentURL = documentLoader.prepareURL("/templates/Index.xml");
                    // Instantiate the controller with root template. The controller is passed in the loading document which
                    // was pushed while scripts were being evaluated, and controller will replace it with root template once
                    // fetched from the server.
                    new DocumentController({documentLoader, documentURL, loadingDocument});
                    } else {
                    // Handle error cases in your code. You should present a readable and user friendly
                    // error message to the user in an alert dialog.
                    const alertDocument = createEvalErrorAlertDocument();
                    navigationDocument.replaceDocument(alertDocument, loadingDocument);
                    throw new EvalError("TVMLCatalog application.js: unable to evaluate scripts.");
                    }
                    });
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


/**
 * This convenience funnction returns an alert template, which can be used to present errors to the user.
 */
var createAlert = function(title, description) {

    var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
          <alertTemplate>
            <title>${title}</title>
            <description>${description}</description>
          </alertTemplate>
        </document>`

    var parser = new DOMParser();

    var alertDoc = parser.parseFromString(alertString, "application/xml");

    return alertDoc
}

function createAlertDocument(title, description) {
    const template = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
    <alertTemplate>
    <title>${title}</title>
    <description>${description}</description>
    </alertTemplate>
    </document>
    `;
    return new DOMParser().parseFromString(template, "application/xml");
}

function createLoadingDocument(title) {
    // If no title has been specified, fall back to "Loading...".
    title = title || "Loading...";
    
    const template = `<?xml version="1.0" encoding="UTF-8" ?>
    <document>
    <loadingTemplate>
    <activityIndicator>
    <title>${title}</title>
    </activityIndicator>
    </loadingTemplate>
    </document>
    `;
    return new DOMParser().parseFromString(template, "application/xml");
}

function createEvalErrorAlertDocument() {
    const title = "Evaluate Scripts Error";
    const description = [
                         "There was an error attempting to evaluate the external JavaScript files.",
                         "Please check your network connection and try again later."
                         ].join("\n\n");
    return createAlertDocument(title, description);
}

function createLoadErrorAlertDocument(url, xhr) {
    const title = (xhr.status) ? `Fetch Error ${xhr.status}` : "Fetch Error";
    const description = `Could not load document:\n${url}\n(${xhr.statusText})`;
    return createAlertDocument(title, description);
}
