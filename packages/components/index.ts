import {isEven,isOdd} from "@x-ui/shared"
import XButton from "./Button/index.vue"
import {type App} from "vue"

isEven(10)
isOdd(10)

export default {
    install:(app:App)=>{
        app.component("XButton",XButton)
    }
}