import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protected({ element }) {
    const naviaget = useNavigate()
    const x = localStorage.getItem("userLogin")
    useEffect(() => {
        !x && naviaget("/login")

    }, [])

    if (!x) {
        return "you are not looged in"
    }

    return element
}
