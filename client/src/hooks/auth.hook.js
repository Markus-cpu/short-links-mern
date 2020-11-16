import {useCallback, useEffect, useState} from "react";

const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [ready, setReady] = useState(false)
    const [userId, setUserId] = useState(null)

    // сохраняем все данные о пользователе в браузере
    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)

        // для коррекного передачи данных о пользователе в localStorage
        localStorage.setItem(storageName, JSON.stringify({
            userId: id,
            token: jwtToken,
        }))
    }, [])

    // удаляем все данные о пользователе из браузера
    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])

    // для наблюдения затем, если данные о пользователе в localStorage
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))

        if (data && data.token) {
            login(data.token, data.userId)
        }
        setReady(true)
    }, [login])

    return { login, logout, token, userId, ready }
}