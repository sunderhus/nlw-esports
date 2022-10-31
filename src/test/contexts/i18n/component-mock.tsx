import { useI18n } from "@/contexts/i18n";
import { FC } from "react";

type Props = {changeToLanguage: 'en-US'|'pt-BR'}

const ComponentMock:FC<Props> = ({changeToLanguage})=>{
    const {changeLanguage,languageCode,translate} = useI18n()
    return(
        <>
            <p>{languageCode}</p>
            <p>{translate('MSG02',1)}</p>
            <p>{translate('MSG02',2)}</p>
           
            <button onClick={()=>changeLanguage(changeToLanguage)} />
        </>
    )
}

export default ComponentMock