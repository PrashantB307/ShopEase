import { useContext } from 'react';
import myContext from '../../context/data/myContext'

function Filter() {
    const context = useContext(myContext)
    const { mode, searchkey, setSearchkey } = context

    return (
        <div>
            <div className=' container mx-auto px-4 mt-5 '>
                
                </div>
            </div>
        </div>
    )
}

export default Filter
