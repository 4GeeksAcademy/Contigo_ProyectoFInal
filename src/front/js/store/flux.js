const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			ongs: [],
			infoOng: [],
			recursosOng: [],
			recursosCategoria: [],
			detalleRecurso: [],
			
		},
		actions: {
			getAllOng: () => {
				fetch(process.env.BACKEND_URL + `api/ong`)
				.then(response => response.json())
				.then((response)=> {
					setStore({ ongs: response });
				});
			},
			
			get_ong_por_id: (id) => {
				fetch(process.env.BACKEND_URL + `api/ong/${id}`)
					.then(response => response.json())
					.then((response)=> {
						setStore({ infoOng: response });
				});
  			},

			get_recurso_ong: (id) => {
				fetch(process.env.BACKEND_URL + `api/recursos/${id}`)
					.then(response => response.json())
					.then((response)=> {
						setStore({ recursosOng: response });
				});
			},

			get_recurso_categoria: (categoria) => {
				fetch(process.env.BACKEND_URL + `api/recursos/${categoria}`)
					.then(response => response.json())
					.then((response)=> {
						setStore({ recursosCategoria: response });
				});
			},

			get_info_recurso: (id) => {
				fetch(process.env.BACKEND_URL + `api/detallerecurso/${id}`)
					.then(response => response.json())
					.then((response)=> {
						setStore({ detalleRecurso: response });
				});
			}


			}
		}
	};


export default getState;
