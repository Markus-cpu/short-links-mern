import {useCallback, useState} from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const request = useCallback(async(url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            const response = await fetch(url, {method, body, headers})
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так....')
            }
            setLoading(false)
            return data
        } catch (e) {
            //все равно убираем загрузку, потому что она отработала
            setLoading(false)
            setError(e.message)
            throw e //выкидываем ошибку чтобы обработать в компоненте
        }
    }, [])
    const clearError = () => setError(null)
    return { loading, request, error, clearError }
}