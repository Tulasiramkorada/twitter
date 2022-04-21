const middleware = {}

middleware['toute-guard'] = require('..\\middleware\\toute-guard.js')
middleware['toute-guard'] = middleware['toute-guard'].default || middleware['toute-guard']

export default middleware
