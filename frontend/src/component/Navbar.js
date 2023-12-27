import React, { useState } from 'react'

const Navbar = (props) => {
    const [search, setsearch]= useState('')
    const onChange=(e)=>{
        e.preventDefault()
        setsearch(e.target.value)
    }
    props.sandsata(search)
    
    return (
        <>
            <div className="top-header py-4">
                <h1>~movies~</h1>
                <h3>~ lists out popular movies from themoviedb api !!</h3>
            </div>
            <nav className="navbar navbar-light bg-dark">-
            <input type="search" placeholder='search here!' onChange={onChange} value={search} />
            -
            </nav>
        </>
    )
}

export default Navbar