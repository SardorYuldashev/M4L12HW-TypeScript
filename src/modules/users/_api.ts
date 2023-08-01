import express from 'express';
import isLoggedIn from '../../shared/auth/is-loggedin';
import { deleteMe, getMe, patchMe, postLoginUser, postRegisterUser } from './_controllers';

const router = express.Router();

router.post('/users/register', postRegisterUser);
router.post('/users/login', postLoginUser);
router.get('/users/me', isLoggedIn, getMe);
router.patch('/users/me', isLoggedIn, patchMe);
router.delete('/users/me', isLoggedIn, deleteMe);

export default router;