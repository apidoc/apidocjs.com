define({ api: [
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "field": "id",
            "optional": false,
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "firstname",
            "optional": false,
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "lastname",
            "optional": false,
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"firstname\": \"John\",\n     \"lastname\": \"Doe\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "   HTTP/1.1 404 Not Found\n   {\n     \"error\": \"UserNotFound\"\n   }\n"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "source/example_basic/example.js"
  }
] });