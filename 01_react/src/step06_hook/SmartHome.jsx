import React, { useState } from 'react'
import Light from './Light'

function SmartHome(props) {

    const [masterOn, setMasterOn] = useState(false);
    const [kitchenOn, setKitchenOn] = useState(false);
    const [bathOn, setBathOn] = useState(false);

    const toggleMaster = () => setMasterOn(!masterOn);
    const toggleKitchen = () => setKitchenOn(!kitchenOn);
    const toggleBath = () => setBathOn(!bathOn);

    return (
        <div>
            <Light room="침실" on={masterOn} toggle={toggleMaster} />
            <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
            <Light room="욕실" on={bathOn} toggle={toggleBath} />
        </div>
    )
}

export default SmartHome