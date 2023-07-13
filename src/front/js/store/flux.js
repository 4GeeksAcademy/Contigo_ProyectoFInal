const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			ongs: [],
			
		},
		actions: {
			getAllOng: () => {
				fetch(process.env.BACKEND_URL + `api/ong`)
				.then(response => response.json())
				.then((response)=> {
					console.log(response);
					setStore({ ongs: response });
				});
			},
			
		}
	};
};

export default getState;
