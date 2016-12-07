
  var url = "https://fcm.googleapis.com/fcm/send";
  var method = "POST";
  // You REALLY want async = true.
  // Otherwise, it'll block ALL execution waiting for server response.
  var async = true;
  var request = new XMLHttpRequest();
  // Before we send anything, we first have to say what we will do when the
  // server responds. This seems backwards (say how we'll respond before we send
  // the request? huh?), but that's how Javascript works.
  // This function attached to the XMLHttpRequest "onload" property specifies how
  // the HTTP response will be handled.
  request.onload = function () {
     // Because of javascript's fabulous closure concept, the XMLHttpRequest "request"
     // object declared above is available in this function even though this function
     // executes long after the request is sent and long after this function is
     // instantiated. This fact is CRUCIAL to the workings of XHR in ordinary
     // applications.

     // You can get all kinds of information about the HTTP response.
     var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
     var data = request.responseText; // Returned data, e.g., an HTML document.
     console.log(status);
     console.log(data);
  }
  request.open(method, url, async);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  //request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  request.setRequestHeader("Authorization", "key=AIzaSyAU11fNSeRxK5JONz-JA9OvpIhbRNKL_o4");
  // Or... request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");

  // Actually sends the request to the server.
  function sendNoti(token) {
    var postData = '{ "notification":'
      + '{'
      + '"title": "Phix Alert",'
      + '"body": "An Estimate for your car has arrived",'
      + '"icon": "/firebase-logo.png"'
      + '},'
      + '"to":"eDuqD5qqlwA:APA91bGd6GU-uVfUzFd5na5UYDPvZqvhubBFUWXhrccH2UUbmhHGEotmB_pW2gzttMYwCiJ1uJXRQLwW70isYjZuye5fshAxRAcvQcY-QIKBo9tw3-IZpKoKo-q7g4JEmJcsnTLq9OTp"'
      + '}' ;

    request.send(postData);
  }
