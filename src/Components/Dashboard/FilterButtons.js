import React, { useState } from 'react'

export const FilterButtons = () => {
    const [active, setActive] = useState("7 Days")

    const filterData = ["1 Day", "7 Days", "Month", "Year", "All Time"]

    return (
        <div className="btn-group text-dark py-1 px-1">
            {
                filterData.map(filter => (
                    <button className={"btn " + (active === filter ? "active" : "")} onClick={()=> setActive(filter)}>{filter}</button>
                ))
            }
        </div>
    )
}
