import { useState, useContext } from 'react';
import PetsContext from '../../context/Pets/PetsContext';
import UsersContext from '../../context/UsersContext';


export default function Home() {

    const ctxPets = useContext(PetsContext)

    const {
        pets,
        getPets,
        createPet
    } = ctxPets

    const ctxUsers = useContext(UsersContext)

    const {
        currentUser,
		verifyingToken
	} = ctxUsers

    const [newPet, setNewPet] = useState({
        name: '',
        description: ''
    })

    const handleChange = (event) => {

        setNewPet({
            ...newPet,
            [event.target.name]: event.target.value
        })

    }

    const handleSubmit = (event) => {

        event.preventDefault()

        createPet(newPet)

    }

    return (
        <>

            <h1>Crear mascota</h1>
            <form onSubmit={(evt) => { handleSubmit(evt) }}>

                <label>Nombre</label>
                <input name='name' value={newPet.name} onChange={ (evt) => { handleChange(evt) } } />

                <label>Descrcipción</label>
                <input name='description' value={newPet.description} onChange={ (evt) => { handleChange(evt) } } />

                <button type="submit">Crear mascota</button>

            </form>

            <h1>Listado de mascotas</h1>

            <button onClick={() => { getPets() }}> Obtener perros </button>
            {
                pets.map((elt) => {
                    return(
                        <div key={elt._id}>
                            <h1>{elt.name}</h1>
                            <p>{elt.description}</p>
                        </div>
                    )
                })
            }

            <hr />

            <p>Verificar autenticación</p>
            <button onClick={() => { verifyingToken() }}>VERIFICAR</button>

            <h2>Tu usuario:</h2>
            <p>{currentUser.name}</p>
            <p>{currentUser.lastname}</p>
            <p>{currentUser.email}</p>

        </>
    )
}
