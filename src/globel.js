export default function createEnvironment() {
    const __dev__ = process.env.REACT_APP_HOST_ENV;
    if(__dev__ === "development") {
        return {
            BASE_URL: process.env.REACT_APP_BASE_URL,
        }
    }

    return {
        BASE_URL: process.env.REACT_APP_BASE_URL,
        HOST_NAME: __dev__
    }
}