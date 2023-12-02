import { useContext } from 'react';
import myContext from '../../context/data/myContext'

function Filter() {
    const context = useContext(myContext)
    const { mode, searchkey, setSearchkey } = context

    
}

export default Filter
