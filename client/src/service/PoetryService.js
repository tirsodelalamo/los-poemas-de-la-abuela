import axios from "axios";

export default class PoetryService {
  constructor() {
    this.service = axios.create({
      // baseURL: "http://localhost:5000/api", //CAMBIAR PARA DEPLOY
      // baseURL: process.env.REACT_APP_API_URL,
      baseURL: "https://lospoemasdelaabuela.herokuapp.com/api",
      withCredentials: true,
    });
  }

  createPoetry = (poetry) => this.service.post("perfil/crear-poesia", poetry);
  getAllPoetry = () => this.service.get("perfil/listado-poesias");
  getOnePoetry = (id) => this.service.get(`/perfil/poema/${id}`);
  deleteOnePoetry = (id) => this.service.delete(`/perfil/poema/${id}/delete`);
  updateOnePoetry = (id, poetry) => this.service.put(`/perfil/${id}/editar-poema`, poetry)
}
