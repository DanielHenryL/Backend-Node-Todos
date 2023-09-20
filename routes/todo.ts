import { Router } from 'express';
import { getTodos, getTodo, postTodo, putTodo, deleteTodo } from '../controllers/todo';
import { query, body } from 'express-validator';
import { validarCampos } from '../middleware/validar-campo';
const router = Router();

router.get('/', getTodos)
router.get('/:id', getTodo)
router.post('/',[
    body('description').notEmpty().withMessage('La description es obligatoria'),
    body('description').isLength({min:2}).withMessage('La description debe ser mayor a dos caracteres'),
    validarCampos
], postTodo)
router.put('/:id', putTodo)
router.delete('/:id', deleteTodo)



export default router;