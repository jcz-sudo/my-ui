import {isEven,isOdd} from "@x-ui/shared"
import XButton from "./Button/index.tsx"
import {type App} from "vue"

isEven(10)
isOdd(10)

export default {
    install:(app:App)=>{
        console.log(XButton)
        app.component("XButton",XButton)
    }
}