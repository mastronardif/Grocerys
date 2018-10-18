// The client ID is obtained from the {{ Google Cloud Console }}
// at {{ https://cloud.google.com/console }}.
// If you run this code from a server other than http://localhost,
// you need to register your own client ID.
//YouTube Data API Quickstart => 838458623675-29k9sdcckggqc5p1b07uh7r4ap0rmec7.apps.googleusercontent.com
// secret => aoNJX79YzdjAHEDBFGJ_TRNY
//alert('auth.js');
var OAUTH2_CLIENT_ID = '838458623675-29k9sdcckggqc5p1b07uh7r4ap0rmec7.apps.googleusercontent.com';
var OAUTH2_SCOPES = [
  "https://www.googleapis.com/auth/youtube"
 // "https://www.googleapis.com/auth/contacts.readonly"
];
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/people/v1/rest"];
var apiKey = 'AIzaSyBGbbhHE02G2YC1Uvopww3JNa_6PKVIn8w';
// Upon loading, the Google APIs JS client automatically invokes this callback.
googleApiClientReady = function() {
  gapi.auth.init(function() {
    window.setTimeout(checkAuth, 1);
    //window.setTimeout(initClient, 1);
  });
}

// Attempt the immediate OAuth 2.0 client flow as soon as the page loads.
// If the currently logged-in Google Account has previously authorized
// the client specified as the OAUTH2_CLIENT_ID, then the authorization
// succeeds with no user intervention. Otherwise, it fails and the
// user interface that prompts for authorization needs to display.
function checkAuth() {
  gapi.auth.authorize({
    client_id: OAUTH2_CLIENT_ID,
      //discoveryDocs: DISCOVERY_DOCS,
    scope: OAUTH2_SCOPES,
    immediate: true
  }, handleAuthResult);
}

// Handle the result of a gapi.auth.authorize() call.
function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    // Authorization was successful. Hide authorization prompts and show
    // content that should be visible after authorization succeeds.
    $('.pre-auth').hide();
    $('.post-auth').show();
    loadAPIClientInterfaces();

    // fm 
    console.log("fuck ", gapi.auth2);
    var auth2=gapi.auth2;
    // if (auth2.isSignedIn.get()) {
    //   var profile = auth2.currentUser.get().getBasicProfile();
    //   console.log('ID: ' + profile.getId());
    //   console.log('Full Name: ' + profile.getName());
    //   console.log('Given Name: ' + profile.getGivenName());
    //   console.log('Family Name: ' + profile.getFamilyName());
    //   console.log('Image URL: ' + profile.getImageUrl());
    //   console.log('Email: ' + profile.getEmail());
    // }
    // fm 
    makeApiCall();

  } else {
    // Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
    // client flow. The current function is called when that flow completes.
    $('#login-link').click(function() {
      gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: false
        }, handleAuthResult);
    });
  }
}

function initClient() {
  gapi.client.init({
      apiKey: apiKey,
      discoveryDocs: DISCOVERY_DOCS,
      clientId: OAUTH2_CLIENT_ID,
      scope: OAUTH2_SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  });
}

function initGapiClient() {
  //'https://people.googleapis.com/$discovery/rest?version=v1'
  //gapi.client.load(urlOrObject)
  //gapi.client.load('https://people.googleapis.com/$discovery/rest?version=v1');
  gapi.load('client:auth2', initClient);
}

// Load the client interfaces for the YouTube Analytics and Data APIs, which
// are required to use the Google APIs JS client. More info is available at
// https://developers.google.com/api-client-library/javascript/dev/dev_jscript#loading-the-client-library-and-the-api
function loadAPIClientInterfaces() {
  
  // fm
  // gapi.load('client', {
  //   callback: function() {
  //     // Handle gapi.client initialization.
  //     initGapiClient();
  //   },
  //   onerror: function() {
  //     // Handle loading error.
  //     alert('gapi.client failed to load!');
  //   },
  //   timeout: 5000, // 5 seconds.
  //   ontimeout: function() {
  //     // Handle timeout.
  //     alert('gapi.client could not load in a timely manner!');
  //   }
  // });
  // return;
  // fm

  //gapi.client.load('youtube', 'v3', function() {
  //gapi.client.load('youtube:discovery', 'v3', {function() {
  gapi.client.load('youtube', 'v3', function() {
    handleAPILoaded();
  }
  //  ,
  //  onerror: function() {
  //    // Handle loading error.
  //    alert('\t* * * * *gapi.client failed to load!');
  //  }
 
);
}



 
// my logout
function logout() {
  
  console.log(gapi);
  gapi.auth.getVersionInfo(function () { 
    //console.log("a= ",a);
    console.log("c= ");
  });

/*   var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });

   gapi.auth2.getAuthInstance().signOut(); */
  //gapi.auth.disconnect();

  gapi.auth.signOut(function () { 
    console.log('User signed out.');
  });
  gapi.auth2.getAuthInstance().signOut();
  
    console.log('User signed out.');
  
  console.log(gapi);
  window.open("https://accounts.google.com/logout");
  return;

  var token = gapi.auth.getToken();
if (token) {
  var accessToken = gapi.auth.getToken().access_token;
  if (accessToken) {
    // make http get request towards: 'https://accounts.google.com/o/oauth2/revoke?token=' + accessToken
    // In angular you can do it like this:
    // $http({
    //   method: 'GET',
    //   url: 'https://accounts.google.com/o/oauth2/revoke?token=' + accessToken
    // });
  }
}
gapi.auth.setToken(null);
gapi.auth.signOut();


$('.pre-auth').show();
return;

 // alert('function logout() {');
  console.log(`gapi.=  ${gapi.auth.signOut}`);

  gapi.auth.signOut();

  var auth2 = gapi.auth2.getAuthInstance();
auth2.signOut().then(function () {
});
auth2.disconnect();
}