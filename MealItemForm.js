import { Fragment, useState } from "react"
import './MealItem.css';
import Input from "../Ui/Input";
const MealItemForm=props=>{
    return(
        
        <Fragment>
            <form className="form">
                
                <div>
                    <input />
                    <button >Add item</button>
                </div>
                <Input />
            </form>
        </Fragment>
    )
}
export default MealItemForm;