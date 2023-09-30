import cls from "./dealsBlock.module.css"
import Deals from "../deals/deals"
import Deal from "../deal/deal"
import { useSelector } from "react-redux"

export default function DealBlock({color,title,statusid}) {
    const data = useSelector((state) => state.modalShow.data)
    return(
        <div className={cls.dealBlock}>
            <Deals
                color={color}
                title={title}
            />
            <div className={cls.deal}>
         {
            data.map(({id,name,desc,user_id,status_id}) => {
                if (status_id === statusid) {
                    return(
                        <Deal
                            name={name}
                            desc={desc}
                            user_id={user_id}
                            status_id={status_id}
                            id={id}
                        />
                    )
                }
        
            })
         }
         </div>
         
        </div>
    )
}