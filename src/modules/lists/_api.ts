import express from 'express';
import isLoggedIn from '../../shared/auth/is-loggedin';
import { deleteList, getList, getLists, patchList, postList } from './_controllers';

const router = express.Router();

router.post("/lists", isLoggedIn, postList);
router.get("/lists", isLoggedIn, getLists);
router.get("/lists/:id", isLoggedIn, getList);
router.patch("/lists/:id", isLoggedIn, patchList);
router.delete("/lists/:id", isLoggedIn, deleteList);

export default router;