define({ api: [
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get User information and Date of Registration.",
    "version": "0.2.0",
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
        },
        {
          "type": "Date",
          "field": "registered",
          "optional": false,
          "description": "Date of Registration."
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
    "filename": "source/example_versioning/example.js"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Get User information",
    "version": "0.1.0",
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
    "filename": "source/example_versioning/_apidoc.js"
  }
] });