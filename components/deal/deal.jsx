import cls from "./deal.module.css"
import Image from "next/image"
import { deal } from "@/pages/api/fakeData"

export default function Deal({id,deal,price,data,person,user_id}) {
    
    return(
        <div className={cls.deal}>
            <div className={cls.dealInfo}>
                <p>{deal}</p>
                <p>{price}</p>
                <p>{data}</p>
                <div className={cls.person}>
                    <Image className={cls.personImg} width={20} height={20} src={""}></Image>
                    <p>{person}</p>
                </div>
            </div>
        </div>
    )
}