/*
import axios from "axios"; // importa Axios para requisições HTTP

// Cria instância do Axios com URL base da API
const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api/books', // URL da API
    headers: {
        'Content-Type': 'application/json' // Define JSON como tipo de conteúdo
    }
})

// Exporta funções CRUD usando Axios
export default {
    getBooks(){
        return apiClient.get('/') // GET para listar livros
    },
    addBook(book){
        return apiClient.post('/', book) // POST para adicionar livro
    }, 
    updateBook(id, book){
        return apiClient.put(`/${id}`, book) // PUT patra atualizar livro
    },
    deleteBook(id){
        return apiClient.delete(`/${id}`) // DELETE para excluir livro
    }
}
*/