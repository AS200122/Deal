import cls from "./deals.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Deals({color,title}) {
    return(
            <div className={cls.quickDeal}>
                <div style={{backgroundColor: color}} className={cls.header}>
                    <p>{title}</p>
                </div>
                <div className={cls.money}>
                    <p>$46</p>
                </div>
                <FontAwesomeIcon style={{fontSize:22,cursor:"pointer"}}  icon={faPlus} />
            </div>
    )
}