import { useState } from "react"
import { timeProps } from "../../../utils/types"

export const useTimePeriodHook = () => {
    const [timePeriod, setTimePeriod] = useState<timeProps>('1h')
    const [searchValue, setSearchValue] = useState<string>("")

    const handleTimeDropDownChange = (value: string) => {
        let time = value
        const len = time.length - 1
        time = time.substring(0,len) + time.charAt(len).toLowerCase();
        setTimePeriod(time as timeProps)
    }
    const handleSearchFieldChange = (value: string) => {
        setSearchValue(value)
      }

    return {timePeriod, setTimePeriod, searchValue, setSearchValue, handleTimeDropDownChange, handleSearchFieldChange}
}