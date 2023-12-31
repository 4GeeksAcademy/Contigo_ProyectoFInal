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
      recursoOngUsuario: [], // Add the property to the store
      ver_peticion: [],
      nombreRecurso: [],
    },

    actions: {
      getAllOng: () => {
        fetch(process.env.BACKEND_URL + `api/ong`)
          .then((response) => response.json())
          .then((response) => {
            setStore({ ongs: response });
          });
      },

      get_ong_por_id: (id) => {
        fetch(process.env.BACKEND_URL + `api/ong/${id}`)
          .then((response) => response.json())
          .then((response) => {
            setStore({ infoOng: response });
          });
      },

      get_recurso_ong: (id) => {
        fetch(process.env.BACKEND_URL + `api/recursos/${id}`)
          .then((response) => response.json())
          .then((response) => {
            setStore({ recursosOng: response });
          });
      },

      get_recurso_categoria: (categoria) => {
        fetch(process.env.BACKEND_URL + `api/recursos/${categoria}`)
          .then((response) => response.json())
          .then((response) => {
            setStore({ recursosCategoria: response });
          });
      },

      get_info_recurso: (id) => {
        fetch(process.env.BACKEND_URL + `api/detallerecurso/${id}`)
          .then((response) => response.json())
          .then((response) => {
            setStore({ detalleRecurso: response });
          });
      },

      login: async (email, password) => {
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        };

        try {
          const response = await fetch(
            process.env.BACKEND_URL + "api/login",
            config
          );
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
        localStorage.removeItem("jwt-token");
        setStore({ token: null });
      },

      updateLogin: () => {
        if (localStorage.getItem("jwt-token"))
          setStore({ token: localStorage.getItem("jwt-token") });
      },

      getrecursoOngUsuario: () => {
        fetch(process.env.BACKEND_URL + `api/recursos_ong_usuario`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt-token"),
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((response) => {
            setStore({ recursoOngUsuario: response }); // Update the recursoOngUsuario property in the store
          });
      },

      get_peticiones: () => {
        fetch(process.env.BACKEND_URL + `api/peticiones`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt-token"),
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((response) => {
            setStore({ ver_peticion: response });
          });
      },

      eliminarRecurso: (recursoId) => {
        const actions = getActions()
        fetch(process.env.BACKEND_URL + `api/recursos/${recursoId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (response.ok) {
              actions.getrecursoOngUsuario();
              console.log(`Recurso ${recursoId} eliminado correctamente`);
            } else {
              console.error(`Error al eliminar el recurso con ID ${recursoId}`);
            }
          })
          .catch((error) => console.error("Error:", error));
      },

      eliminarPeticion: (peticionId) => {
        const actions = getActions()
        fetch(process.env.BACKEND_URL + `api/peticion/${peticionId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (response.ok) {
              actions.get_peticiones();
              console.log(`Peticion ${peticionId} eliminado correctamente`);
            } else {
              console.error(`Error al eliminar la petición con ID ${peticionId}`);
            }
          })
          .catch((error) => console.error("Error:", error));
      },
    },
  };
};

export default getState;
