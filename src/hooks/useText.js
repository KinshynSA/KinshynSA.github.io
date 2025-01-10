import {useSelector} from "react-redux";
import translatesUA from "../translates/translatesUA";
import translatesRU from "../translates/translatesRU";
import translatesEN from "../translates/translatesEN";

export default function useText() {
  const lang = useSelector((state) => state.language.lang);

  return function (key) {
    if (lang === "ua") {
      return translatesUA[key] ?? key;
    } else if (lang === "ru") {
      return translatesRU[key] ?? key;
    } else if (lang === "en") {
      return translatesEN[key] ?? key;
    } else {
      return key;
    }
  };
}
