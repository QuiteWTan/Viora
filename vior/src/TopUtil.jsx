import { useState } from "react";

const TopRightUtil = () => {
    const [Bell,setBell] = useState(true)
    return(
        <div className="absolute top-2 right-10 flex flex-row items-center justify-center gap-x-6">
            <div className="p-1 flex item-center">
                <box-icon name='cart' type='solid' size="md"></box-icon>
            </div>
            <div className="p-1 flex item-center">
                {Bell? <box-icon name='notification' type='solid' onClick={() => setBell(!Bell)} size="md"></box-icon> : <box-icon name='notification-off' type='solid' onClick={() => setBell(!Bell)} size="md"></box-icon>}
            </div>
            
        </div>
    )
}

export default TopRightUtil;