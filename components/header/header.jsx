import cls from "./header.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPlus} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { setShow, setAction, setSearch } from "@/store"
import { allUsers, userData } from "@/pages/api/fakeData"

export default function Header () {
    const dispatch = useDispatch()
    const modalShow = useSelector((state) => state.modalShow.show)
    const search = useSelector((state) => state.modalShow.search)
    return(
        <header className={cls.header}>
            <h1>HOME</h1>
            <div className={cls.headerRight}>
                <input className={cls.input} type="text" placeholder="Search" onChange={(e) => {
                    setSearch(e.target.value)
                }}/>
                <button className={cls.button} onClick={() => {
                    setSearch(search)
                    const x = modalShow.filter((item) => {
                        if((item.name).search(search) >= 0) {
                            return item
                        }
                    })
                    console.log(x);
                }}><FontAwesomeIcon style={{fontSize:22}} icon={faMagnifyingGlass} /> </button>
                <button className={cls.button} onClick={() => {
                    if(modalShow === false){
                        dispatch(setShow({show:true}))
                    }else{
                        dispatch(setShow({show:false}))
                    }
                    dispatch(setAction({action:"create"}))
                }}><FontAwesomeIcon style={{fontSize:22}} icon={faPlus} /></button>
            </div>
        </header> 
    )
}