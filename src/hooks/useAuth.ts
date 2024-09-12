import { Client, Account, Models, ID } from "appwrite";
import { useEffect, useState } from "react";



const useAuth = (appwriteProjectId: string) => {


    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<Models.User<Models.Preferences>>()

    const [account, setAccount] = useState<Account>()

    useEffect(() => {

        const appwriteClient = new Client()
            .setEndpoint('https://milikudu.xyz/v1')
            .setProject(appwriteProjectId);

        const rawAccount = new Account(appwriteClient)
        setAccount(rawAccount)

        const init = async () => {
            try {
                const rawUser = await rawAccount.get()
                setUser(rawUser)
            } catch (e) {
                // console.log(e)
            }

            setLoading(false)
        }

        init()

    }, [])

    const logout = async () => {
        await account?.deleteSessions()
    }

    const loginEmailPassword = async (params: { email: string, password: string }) => {
        await account?.createEmailPasswordSession(params.email, params.password);
    }


    const createAccount = async (params: { email: string, password: string }) => {
        await account?.create(ID.unique(), params.email, params.password);
    }


    return {
        user,
        loading,
        loginEmailPassword,
        createAccount,
        logout
    }

}

export default useAuth