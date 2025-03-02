const authUser = (email: string, password: string) => {
    return ((email === "sakshibatra@scada.com" && password === "123456") || (email === "sahilsingh@scada.com" && password === "123456"))
}

export default authUser;