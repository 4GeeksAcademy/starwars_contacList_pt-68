export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    character: [],
    favoritos: [],
    saludo: "Hola desde Store",
    contacts:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    //////////////////////////
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };


    //////////////////////////////
    // case "add_favorite":

    ///////////////////////////////
    // case "delete_fav":
    ///////////////////////////////

    case 'set_personajes':
      const { personaje } = action.payload
      return {
        ...store, character: personaje
      }
    //////////////////////////////////
    case "change_saludo":
      const { message } = action.payload
      return {
        // ...store, saludo : "saludo desde el dispatch!"
        ...store, saludo: message
      }
    ////////////////////////////////////
    case "add_contact":
      return{
        ...store, contacts: [...store.contacts, action.payload]
      }

    /////////////////////////////////

    default:
      throw Error('Unknown action.');
  }
}
