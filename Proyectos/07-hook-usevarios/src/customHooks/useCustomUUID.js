/**
 * custom hook que me devuelva un UIID aleatorio y que me permita generar mas UUIDs de forma dinamica
 */

import { useState } from "react"




export const useCustomUUID = () => {

    const [uuid, setUuid] = useState(generateUUID())
    function generateUUID() {
       const timeValue = Date.now()
       const randomV1 = Math.random().toString(36).substring(2)
       const randomV2 = Math.random().toString(36).substring(2)

       return `${timeValue}-${randomV1}-${randomV2}`
    }

    return [uuid, () => setUuid(generateUUID)]

}

