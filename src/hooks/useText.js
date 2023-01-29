import { useSelector } from "react-redux";
import translatesUA from "../translates/translatesUA";
import translatesRU from "../translates/translatesRU";


export default function useText(){
    const lang = useSelector(state => state.language.lang);

    return function(key){
        if(lang === 'ua'){
            return translatesUA[key] ? translatesUA[key] : key;
        } else if(lang === 'ru'){
            return translatesRU[key] ? translatesRU[key] : key;
        } else {
            return key;
        }
    }
}