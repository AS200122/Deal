import cls from "./deals.module.css"
import { deal } from "@/pages/api/fakeData"

export default function Deals() {
    return(
            <div className={cls.quickDeal}>
                <div className={cls.header}>
                    <p>New (4)</p>
                </div>
                <p className={cls.money}>$46</p>
                <button className={cls.quickButton}>+ Quick Deal</button>
            </div>
    )
}