import { generate } from "random-words";
import axios from "axios";

export const translateWords = async (params: LangType) => {
  try {
    const words = generate(8).map((i) => ({
      Text: i,
    }));
    const response = await axios.post(
      `https://microsoft-translator-text.p.rapidapi.com/translate`,
      words,
      {
        params: {
            "to[0]": params,
          "api-version": "3.0",
          profanityAction: "NoAction",
          textType: "plain",
        },
        headers: {
          "x-rapidapi-key":
            "0c692a6d5fmsh89c4d779a043bf0p1c89b1jsndf3ab6587aa0",
          "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
          "Content-Type": "application/json",
        },
      }
    );
   const receive:FetchedDataType[] = response.data;

   const arr:WordType[]=receive.map((i,idx)=>{
    return {
        word:i.translations[0].text,
        meaning:words[idx].Text,
        options:['asd']
    }
   })

   receive[0].translations[0].text
  } catch (error) {
    console.log(error);
    throw new Error("some error");
  }
};
