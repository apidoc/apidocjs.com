/*
 * Inherit Example
 *
 * This is an inherit example for apiDoc.
 * Define parts of your documentation that shall be used many times.
 *
 * In this case a block named "UserNotFoundError" is defined with "@apiDefine".
 * That block could be used many times with "@apiUse UserNotFoundError".
 *
 * Documentation blocks without @api (like this block) will be ignored.
 */

/**
 * @apiDefine UserNotFoundError
 *
 * @apiError UserNotFound The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

/**
 * @api {get} /user/:id Get User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiUse UserNotFoundError
 */

/**
 * @api {put} /user/ Modify User information
 * @apiName PutUser
 * @apiGroup User
 *
 * @apiParam {Number} id          Users unique ID.
 * @apiParam {String} [firstname] Firstname of the User.
 * @apiParam {String} [lastname]  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiUse UserNotFoundError
 */
