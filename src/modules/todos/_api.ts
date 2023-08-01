import express from 'express';
import isLoggedIn from '../../shared/auth/is-loggedin';
import { deleteTodo, getTodo, getTodos, patchTodo, postTodo } from './_controllers';

const router = express.Router();

router.post("/todos", isLoggedIn, postTodo);
router.get("/todos", isLoggedIn, getTodos);
router.get("/todos/:id", isLoggedIn, getTodo);
router.patch("/todos/:id", isLoggedIn, patchTodo);
router.delete("/todos/:id", isLoggedIn, deleteTodo);

export default router;