define({ api: [
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.3.0",
    "name": "GetUser",
    "group": "User",
    "permission": {
      "name": "admin",
      "title": "Admin access rights needed. ",
      "description": "Optionally you can write here further Informations about the permission.\n\nAn \"apiDefinePermission\"-block can have an \"apiVersion\", so you can attach the block to a specific version.\n"
    },
    "description": "Compare Verison 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "The Users-ID."
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/user/4711\n"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "The Users-ID."
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "registered",
            "optional": false,
            "description": "Registration Date."
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "name",
            "optional": false,
            "description": "Fullname of the User."
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "field": "nicknames",
            "optional": false,
            "description": "List of Users nicknames (Array of Strings)."
          },
          {
            "group": "Success 200",
            "type": "Object",
            "field": "profile",
            "optional": false,
            "description": "Profile data (example for an Object)"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "field": "profile.age",
            "optional": false,
            "description": "Users age."
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "profile.image",
            "optional": false,
            "description": "Avatar-Image."
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "field": "options",
            "optional": false,
            "description": "List of Users options (Array of Objects)."
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "options.name",
            "optional": false,
            "description": "Option Name."
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "options.value",
            "optional": false,
            "description": "Option Value."
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "NoAccessRight",
            "optional": false,
            "description": "Only authenticated Admins can access the data."
          },
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "The <code>id</code> of the User was not found."
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "   HTTP/1.1 401 Not Authenticated\n   {\n     \"error\": \"NoAccessRight\"\n   }\n"
        }
      ]
    },
    "filename": "source/example_full/example.js"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.2.0",
    "name": "GetUser",
    "group": "User",
    "permission": {
      "name": "admin",
      "title": "This title is visible in version 0.1.0 and 0.2.0",
      "description": ""
    },
    "description": "Here you can describe the function.\nMultilines are possible.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "The Users-ID."
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
            "field": "id",
            "optional": false,
            "description": "The Users-ID."
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "name",
            "optional": false,
            "description": "Fullname of the User."
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "The <code>id</code> of the User was not found."
          }
        ]
      }
    },
    "filename": "source/example_full/_apidoc.js"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Read data of a User",
    "version": "0.1.0",
    "name": "GetUser",
    "group": "User",
    "permission": {
      "name": "admin",
      "title": "This title is visible in version 0.1.0 and 0.2.0",
      "description": ""
    },
    "description": "Here you can describe the function.\nMultilines are possible.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "id",
            "optional": false,
            "description": "The Users-ID."
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
            "field": "id",
            "optional": false,
            "description": "The Users-ID."
          },
          {
            "group": "Success 200",
            "type": "Date",
            "field": "name",
            "optional": false,
            "description": "Fullname of the User."
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "UserNotFound",
            "optional": false,
            "description": "The error description text in version 0.1.0."
          }
        ]
      }
    },
    "filename": "source/example_full/_apidoc.js"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a new User",
    "version": "0.3.0",
    "name": "PostUser",
    "group": "User",
    "permission": "none",
    "description": "In this case \"apiErrorStructure\" is defined and used.\nDefine blocks with params that will be used in several functions, so you dont have to rewrite them.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "Name of the User."
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
            "field": "id",
            "optional": false,
            "description": "The new Users-ID."
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "NoAccessRight",
            "optional": false,
            "description": "Only authenticated Admins can access the data."
          },
          {
            "group": "Error 4xx",
            "field": "UserNameTooShort",
            "optional": false,
            "description": "Minimum of 5 characters required."
          }
        ]
      },
      "examples": [
        {
          "title": " Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   {\n     \"error\": \"UserNameTooShort\"\n   }\n"
        }
      ]
    },
    "filename": "source/example_full/example.js"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a User",
    "version": "0.2.0",
    "name": "PostUser",
    "group": "User",
    "permission": "none",
    "description": "In this case \"apiErrorStructure\" is defined and used.\nDefine blocks with params that will be used in several functions, so you dont have to rewrite them.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "Name of the User."
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
            "field": "id",
            "optional": false,
            "description": "The Users-ID."
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "NoAccessRight",
            "optional": false,
            "description": "Only authenticated Admins can access the data."
          },
          {
            "group": "Error 4xx",
            "field": "UserNameTooShort",
            "optional": false,
            "description": "Minimum of 5 characters required."
          }
        ]
      },
      "examples": [
        {
          "title": " Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   {\n     \"error\": \"UserNameTooShort\"\n   }\n"
        }
      ]
    },
    "filename": "source/example_full/_apidoc.js"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Change a new User",
    "version": "0.3.0",
    "name": "PutUser",
    "group": "User",
    "permission": "none",
    "description": "This function has same errors like POST /user, but errors not defined again, they were included with \"apiErrorStructure\"",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "Name of the User."
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "NoAccessRight",
            "optional": false,
            "description": "Only authenticated Admins can access the data."
          },
          {
            "group": "Error 4xx",
            "field": "UserNameTooShort",
            "optional": false,
            "description": "Minimum of 5 characters required."
          }
        ]
      },
      "examples": [
        {
          "title": " Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   {\n     \"error\": \"UserNameTooShort\"\n   }\n"
        }
      ]
    },
    "filename": "source/example_full/example.js"
  },
  {
    "version": "0.3.0",
    "group": "_apidoc.js",
    "type": "",
    "url": "",
    "filename": "source/example_full/_apidoc.js"
  },
  {
    "version": "0.2.0",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "field": "NoAccessRight",
            "optional": false,
            "description": "Only authenticated Admins can access the data."
          },
          {
            "group": "Error 4xx",
            "field": "UserNameTooShort",
            "optional": false,
            "description": "Minimum of 5 characters required."
          }
        ]
      },
      "examples": [
        {
          "title": " Response (example):",
          "content": "   HTTP/1.1 400 Bad Request\n   {\n     \"error\": \"UserNameTooShort\"\n   }\n"
        }
      ]
    },
    "group": "_apidoc.js",
    "type": "",
    "url": "",
    "filename": "source/example_full/_apidoc.js"
  },
  {
    "version": "0.1.0",
    "group": "_apidoc.js",
    "type": "",
    "url": "",
    "filename": "source/example_full/_apidoc.js"
  }
] });