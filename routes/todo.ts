import { Router } from 'express';
import { getTodos, getTodo, postTodo, putTodo, deleteTodo } from '../controllers/todo';

const router = Router();

router.get('/', getTodos)
router.get('/:id', getTodo)
router.post('/', postTodo)
router.put('/:id', putTodo)
router.delete('/:id', deleteTodo)



export default router;