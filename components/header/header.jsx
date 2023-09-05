import cls from "./header.module.css"
import { useRouter } from "next/router"

export default function Header () {
    const router = useRouter()
    return(
        <header className={cls.header}>
            <h1>HOME</h1>
            <div className={cls.headerRight}>
                <input className={cls.input} type="text" placeholder="Search"/>
                <button className={cls.button} onClick={() => {

                }}>Search</button>
                <button className={cls.button} onClick={() => {
                    
                }}>Create</button>
            </div>
        </header> 
    )
}