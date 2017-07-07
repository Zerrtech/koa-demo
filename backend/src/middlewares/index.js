import errorHandler from './10-errorHandler.js'
import responseTime from './20-responseTime.js'
import logger from './30-logger.js'
import staticAssets from './40-staticAssets.js'
import keygrip from './50-keygrip.js'
import bookshelf from './60-bookshelf.js'
import genericResponse from './70-genericResponse.js'

export default (app) => {
    errorHandler(app)
    responseTime(app)
    logger(app)
    bookshelf(app)
    staticAssets(app)
    genericResponse(app)
}