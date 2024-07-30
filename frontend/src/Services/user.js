import axios from "axios";
import { createError, createUrl } from "./utils";

export async function signupUser( name, email, password ) {
    try {
        const url = createUrl('user/register')
        const body = {
            name, email, password
        }
        const response = await axios.post(url, body)
        return response.data
    } catch (ex) {
        return createError(ex)
    }
}

export async function loginUser( email, password ) {
    try {
        const url = createUrl('user/login')
        const body = {
            email, password
        }
        const response = await axios.post(url, body)
        return response.data
    } catch (ex) {
        return createError(ex)
    }
}