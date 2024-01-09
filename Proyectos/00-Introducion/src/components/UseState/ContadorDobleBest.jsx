
import  { useState } from 'react'

const initialState = {
    isaias: 0,
    ana: 0,
}

function ContadorDobleBest() {
    const [friends, setFriends] = useState(initialState);

    function handleIncrement(name){
        setFriends({...friends,
             [name]: friends.name + 1})
    }

  return (
    <>
    <div>
        <span>Isaias tiene : <strong>{friends.isaias}</strong></span>
        <button onClick={() =>handleIncrement("isaias")}>
            Aumentamos en +1 amigo
        </button>
    </div>
    <div>
        <span>Ana tiene : <strong>{friends.ana}</strong></span>
        <button onClick={() => handleIncrement("ana")}>
            Aumentamos en +1 amigo
        </button>
    </div>
</>
  )
}

export default ContadorDobleBest