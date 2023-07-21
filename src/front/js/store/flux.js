const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			ongs: [],
			infoOng: [],
			recursosOng: [],
			recursosCategoria: [],
			detalleRecurso: [],
			nombreOng: [],
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
			},

			login: async ( email, password ) => { 
				const config = {
					method: 'POST',
					headers: {
					  'Content-Type': 'application/json'
					},
					body: JSON.stringify({ email, password })
				  }
				  
				  try {const response = await fetch(process.env.BACKEND_URL + "api/login", config)
					

					const data = await response.json();

					if (response.status === 200) {
						const token = data.token;
						localStorage.setItem("jwt-token", token);
						setStore({ token: token });

					  } else {
						alert(data.message);
					  }
					} catch (error) {
						console.error(error);
					}
				},

			
				logout: () => {
					const token = sessionStorage.removeItem("jwt-token");
					setStore({ token: null })
				}


			}

			
			}
		
	};


export default getState;
