import { Router } from 'express'

import PostController from '@modules/posts/infra/http/controllers/PostController'

import upload from '@shared/infra/http/middlewares/upload'

const router = Router()

router.get('/', PostController.index)
router.post('/', upload.single('photo'), PostController.store)
router.delete('/:id', PostController.destroy)

export default router
