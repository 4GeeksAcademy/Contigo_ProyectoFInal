const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			recursos: [],
			ong: [],
			all_ong: [],
		},
		actions: {
			getRecursos: (categoria) => {
				fetch(`url${categoria}`)
				.then(response => response.json())
				.then((response)=> {
					console.log(response);
					setStore({ recursos: response });
				});
			},
			
		}
	};
};

export default getState;
