const middleware = {}

middleware['checkuser'] = require('../middleware/checkuser.js')
middleware['checkuser'] = middleware['checkuser'].default || middleware['checkuser']

middleware['states'] = require('../middleware/states.js')
middleware['states'] = middleware['states'].default || middleware['states']

export default middleware
