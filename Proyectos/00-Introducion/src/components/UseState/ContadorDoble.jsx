import  { useState } from 'react'

const initialState = {
    isaias: 0,
    ana: 0,
}
function ContadorDoble() {
    
    const [friends, setFriends] = useState(initialState);

    function handleIncrementIsaias(){
        setFriends({...friends,isaias: friends.isaias + 1})
    }
    /*
    function handleIncrementIsaias(prevFriends){
        setFriends({...prevFriends,isaias: prevFriends+1})
    }
    */
    function handleIncrementAna() {
        setFriends({...friends,ana: friends.ana + 1})
    }
  return (
   <>
        <div>
            <span>Isaias tiene : <strong>{friends.isaias}</strong></span>
            <button onClick={handleIncrementIsaias}>
                Aumentamos en +1 amigo
            </button>
        </div>
        <div>
            <span>Ana tiene : <strong>{friends.ana}</strong></span>
            <button onClick={handleIncrementAna}>
                Aumentamos en +1 amigo
            </button>
        </div>
   </>
  )
}

export default ContadorDoble    