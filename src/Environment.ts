class Environment{
    isProd = () => {
        return process.env.NODE_ENV && process.env.NODE_ENV === "production";
    }
}

export default new Environment();