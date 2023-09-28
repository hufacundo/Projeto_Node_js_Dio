import { Router } from 'express'
import { usersController } from './controllers/usersController.js'

const routes = Router()


routes.get('/users', usersController.listarUsuario)

routes.post('/users', usersController.criarUsuario)

export { routes }

//STATUS CODE:
//200 - Quando se tem sucesso;
//201 - Quando consegue se criar um dado;
//404 - Quando não se encontra a página;

//GET - Ler os dados
//POST - Criar os dados
//PUT/Patch - editar os dados
//DELETE - deletar os dados

