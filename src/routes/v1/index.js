import express from 'express'
import { HttpStatusCode } from '*/ultilities/constants'
import { boardRoutes } from './board.route'

const router = express.Router()

/**
 * GET V1 STATUS
 */
router.get('/status', (req, res) => res.status(HttpStatusCode.OK).json({ status: 'OK!' }))

/**Board APIs */
router.use('/boards', boardRoutes)

export const apiV1 = router
