import axios from "axios";

export const signUpApi = (signUpData) => {
        const request = axios.post(`${NEXT_PUBLIC_BASE_API}/auth/signup/`, signUpData)
            .then(res=> res)
            .catch(err => err.response)
        return request
}

export const emailAuthApi =( data ) => {
    const EMAIL = {
        "email" : data
    }
    const request = axios.post(`${NEXT_PUBLIC_BASE_API}/auth/signup/email`, EMAIL)
        .then(res => res.data)
        .catch(err => err.response)
    return request
}

export const overlapApi = (email) => {
    const request = axios.get(`${NEXT_PUBLIC_BASE_API}/auth/signup/email/duplicate?data=${email}`)
        .then(res => res)
        .catch(err => err.response)
    return request;
}

export const nickNameOverlap = (nick) => {
    const request = axios.get(`${NEXT_PUBLIC_BASE_API}/auth/signup/nickname/duplicate?data=${nick}`)
    return request;
}
