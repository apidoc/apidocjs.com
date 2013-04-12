define({ api: [
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": [
        {
          "type": "Number",
          "field": "id",
          "optional": false,
          "description": "Users unique ID."
        }
      ]
    },
    "success": {
      "fields": [
        {
          "type": "String",
          "field": "firstname",
          "optional": false,
          "description": "Firstname of the User."
        },
        {
          "type": "String",
          "field": "lastname",
          "optional": false,
          "description": "Lastname of the User."
        }
      ],
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"firstname\": \"John\",\n     \"lastname\": \"Doe\"\n   }\n"
        }
      ]
    },
    "error": {
      "fields": [
        {
          "field": "UserNotFound",
          "optional": false,
          "description": "The <code>id</code> of the User was not found."
        }
      ],
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