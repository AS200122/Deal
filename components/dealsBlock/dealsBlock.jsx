import cls from "./dealsBlock.module.css"
import Deals from "../deals/deals"
import { deal } from "@/pages/api/fakeData"
import { useState } from "react"
import Deal from "../deal/deal"
import { allUsers } from "@/pages/api/fakeData"

export default function DealBlock() {
    const [deals, setDeals] = useState(deal)
    const [dealsInfo, setDealsInfo] = useState(allUsers)
    return(
        <div className={cls.dealBlock}>
             {
         deals.map(({id,name,price},index) => {
            return(
               <Deals
                  key={index}
                  id={id}
                  name={name}
                  price={price}
               />
            )
         })  

         }
         {
            dealsInfo.map(({id,deal,price,data,person,user_id}) => {
                return(
                    <Deal
                        id={id}
                        deal={deal}
                        price={price}
                        data={data}
                        person={person}
                        user_id={user_id}
                    />
                )
            })
         }
         
        </div>
    )
}