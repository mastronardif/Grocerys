"use strict";

// Define some variables used to remember state.
var playlistId, channelId;
var gg = {last: {response: {} }};

// After the API loads, call a function to enable the playlist creation form.
function handleAPILoaded() {
  enableForm();
}

// Enable the form for creating a playlist.
function enableForm() {
  $('#playlist-button').attr('disabled', false);
}

// Create a private playlist.
function createPlaylist() {
  var request = gapi.client.youtube.playlists.insert({
    part: 'snippet,status',
    resource: {
      snippet: {
        title: 'Test Playlist',
        description: 'A private playlist created with the YouTube API'
      },
      status: {
        privacyStatus: 'private'
      }
    }
  });
  request.execute(function(response) {
    var result = response.result;
    if (result) {
      playlistId = result.id;
      $('#playlist-id').val(playlistId);
      $('#playlist-title').html(result.snippet.title);
      $('#playlist-description').html(result.snippet.description);
    } else {
      $('#status').html('Could not create playlist');
    }
  });
}


function updateTagForVideoId() {
  //alert(`updateTagForVideoId(${$('#video-id').val()} \n ${$('#tags-id').val()}`);
  updateTagForVideoId22($('#video-id').val(), $('#tags-id').val());
}

function updateTagForVideoId22(id, tags) {
  defineRequest(id, tags);
  //  videoId: id,
}

////////////////////////////////////

function createResource(properties) {
  var resource = {};
  var normalizedProps = properties;
  for (var p in properties) {
    var value = properties[p];
    if (p && p.substr(-2, 2) == '[]') {
      var adjustedName = p.replace('[]', '');
      if (value) {
        normalizedProps[adjustedName] = value.split(',');
      }
      delete normalizedProps[p];
    }
  }
  for (var p in normalizedProps) {
    // Leave properties that don't have values out of inserted resource.
    if (normalizedProps.hasOwnProperty(p) && normalizedProps[p]) {
      var propArray = p.split('.');
      var ref = resource;
      for (var pa = 0; pa < propArray.length; pa++) {
        var key = propArray[pa];
        if (pa == propArray.length - 1) {
          ref[key] = normalizedProps[p];
        } else {
          ref = ref[key] = ref[key] || {};
        }
      }
    };
  }
  return resource;
}

function removeEmptyParams(params) {
  for (var p in params) {
    if (!params[p] || params[p] == 'undefined') {
      delete params[p];
    }
  }
  return params;
}

function executeRequest(request) {
  request.execute(function(response) {
    console.log(response);
    //$('#status').html(response);
    $('#status').html('<pre>' + JSON.stringify(response) + '</pre>');
  });
}

function buildApiRequest(requestMethod, path, params, properties) {
  params = removeEmptyParams(params);
  var request;
  if (properties) {
    var resource = createResource(properties);
    request = gapi.client.request({
        'body': resource,
        'method': requestMethod,
        'path': path,
        'params': params
    });
  } else {
    request = gapi.client.request({
        'method': requestMethod,
        'path': path,
        'params': params
    });
  }
  executeRequest(request);
}

/***** END BOILERPLATE CODE *****/
function defineRequest(id, tags) {
  // See full sample for buildApiRequest() code, which is not 
// specific to a particular API or API method.

buildApiRequest('PUT',
              '/youtube/v3/videos',
              {'part': 'snippet'},
             // {'part': 'snippet,status'},
              {'id': id,
               'snippet.categoryId': '22',
               //'snippet.defaultLanguage': '',
               //'snippet.description': '',
               'snippet.tags[]': tags,
               'snippet.title': 'apartment'//,
               //'status.privacyStatus': ''
    });

}

/////////////////////////////
/////////////////////////////

function getPlaylists() {
  var id = $('#playlist-id').val();
  let videoIds = ['CNQVwBktvzQ','dXcdqmLkGBA'];
  var params = {
    mine: true, // current user.
    maxResults: 10,
    part: 'snippet,contentDetails'
    //id: videoIds.join(',')
    //maxResults?: number; 
    //pageToken?:  string; 
    //playlistId: id
    //videoId?: string; 
  };

  var request = gapi.client.youtube.playlists.list(params);
  request.execute(function(response) {
    $('#playlist-title').html(videoIds.join(','));

    $('#pageTokens').html(JSON.stringify({nextPageToken: response.result.nextPageToken, 
                                          prevPageToken: response.result.prevPageToken}, undefined, 4));
    $('#playlist-description').html(JSON.stringify(response.result, undefined, 4));    
    gg.last.response = response;

    var pls = response.result.items.map(obj => ({
      kind: obj.kind,
      id: obj.id,
      //snippet: obj.snippet,
      snippet: {
        publishedAt: obj.snippet.publishedAt,
        channelId: obj.snippet.channelId,
        title: obj.snippet.title
      },      
      contentDetails: obj.contentDetails,
    }))

    output('getPlaylists');
    output(JSON.stringify(response.result.pageInfo,  undefined, 4));
    //var str = JSON.stringify(response.result.items, undefined, 4);
    var str = JSON.stringify(pls,  undefined, 4);
    output(str);    
  });
}


function getVideosTags() {
  var id = $('#playlist-id').val();
  var videoIds = ['CNQVwBktvzQ','dXcdqmLkGBA'];
  console.log('playlist-description= '+ JSON.parse($('#playlist-description').html()));
  console.log(gg.last.response.result.items);
  videoIds = gg.last.response.result.items.map(obj => obj.snippet.resourceId.videoId);
  console.log(videoIds);

  var params = {
    part: 'snippet,contentDetails', //snippet,contentDetails', 
    id: videoIds.join(',')
    //maxResults?: number; 
    //pageToken?:  string; 
    //playlistId: id
    //videoId?: string; 
  };

  var request = gapi.client.youtube.videos.list(params);
  request.execute(function(response) {
    $('#playlist-title').html(videoIds.join(','));
    //$('#playlist-description').html(JSON.stringify(response.result));

    $('#playlist-description').html(JSON.stringify(response.result.items, undefined, 4));

    var videotags = response.result.items.map(obj => ({
      kind: obj.kind,
      id: obj.id,
      //snippet: obj.snippet,
      //channelTitle: obj.channelTitle,
      tags: obj.tags,
      snippet: {
        publishedAt: obj.snippet.publishedAt,
        channelId: obj.snippet.channelId,
        title: obj.snippet.title,        
        channelTitle: obj.snippet.channelTitle,
        tags: obj.snippet.tags,
      },      
      contentDetails: obj.contentDetails,
    }))

    output('getVideosTags');
    output(JSON.stringify(response.result.pageInfo,  undefined, 4));
    //var str = JSON.stringify(response.result.items, undefined, 4);    
    var str = JSON.stringify(videotags, undefined, 4);    
    output(str);    
  });
}
 
function listVideos() {
  var id = $('#playlist-id').val();
  
  var params = {
     part: 'snippet,contentDetails', //snippet,contentDetails', 
     //id?: string; 
     //maxResults?: number; 
     //pageToken?:  string; 
     playlistId: id
     //videoId?: string; 
  };
  var request = gapi.client.youtube.playlistItems.list(params);
  request.execute(function(response) {
    $('#playlist-title').html(id);
    //$('#playlist-description').html(JSON.stringify(response.result));
    $('#playlist-description').html(JSON.stringify(response.result, undefined, 4));
    gg.last.response = response;

    output('listVideos');
    output(JSON.stringify(response.result.pageInfo,  undefined, 4));
    //$('#playlist-description').html(JSON.stringify(response.result.items, undefined, 4));
    var videos = response.result.items.map(obj => ({
      kind: obj.kind,
      id: obj.id,
      //snippet: obj.snippet,
      snippet: {
        publishedAt: obj.snippet.publishedAt,
        channelId: obj.snippet.channelId,
        title: obj.snippet.title
      },      
      resourceId: obj.resourceId,
      contentDetails: obj.contentDetails,
    }))
    var str = JSON.stringify(videos, undefined, 4);  
    //var str = JSON.stringify(response.result.items, undefined, 4);  
    output(str);    
  });

}

//////////////////////////////////////////////
// Add a video ID specified in the form to the playlist.
function addVideoToPlaylist() {
  addToPlaylist($('#playlist-id').val(), $('#video-id').val());
}

// Add a video to a playlist. The "startPos" and "endPos" values let you
// start and stop the video at specific times when the video is played as
// part of the playlist. However, these values are not set in this example.
function addToPlaylist(playlistId, id) {
  var details = {
    videoId: id,
    kind: 'youtube#video'
  }
 
  var request = gapi.client.youtube.playlistItems.insert({
    part: 'snippet',
    resource: {
      snippet: {
        playlistId: playlistId,
        resourceId: details
      }
    }
  });
  request.execute(function(response) {
    $('#status').html('<pre>' + JSON.stringify(response.result) + '</pre>');
  });
}

      // Load the API and make an API call.  Display the results on the screen.
      function makeApiCall() {
        console.log('fuck '+gapi); return;
        gapi.client.people.people.get({
          'resourceName': 'people/me',
          'requestMask.includeField': 'person.names'
        }).then(function(resp) {
          //var p = document.createElement('p');
          var name = resp.result.names[0].givenName;
          //p.appendChild(document.createTextNode('Hello, '+name+'!'));
          //document.getElementById('content').appendChild(p);
          $('#playlist-id').val(Username-id) = 'Hello '+ name;
        });
      }
//  function logout() {
//   var auth2 = gapi.auth2.getAuthInstance();
//   auth2.signOut().then(function () {
//     console.log('User signed out.');
//   });
// }
// other
function output(inp) {
  document.body.appendChild(document.createElement('pre')).innerHTML = inp;
}

function syntaxHighlight(json) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
      var cls = 'number';
      if (/^"/.test(match)) {
          if (/:$/.test(match)) {
              cls = 'key';
          } else {
              cls = 'string';
          }
      } else if (/true|false/.test(match)) {
          cls = 'boolean';
      } else if (/null/.test(match)) {
          cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
  });
}