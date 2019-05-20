import 'abortcontroller-polyfill'

const AbortController = window.AbortController

export default doFetch = (method, url) => {
    const abortController = new AbortController()

    const promise = new Promise(async (resolve, reject) => {
        try {
            const res = await fetch(url, {
                method,
                signal: abortController.signal,
            })

            resolve(await res.json())
        } catch (error) {
            if (error.name == 'AbortError') return

            reject(error)
        }
    })
    promise.abort = () => abortController.abort()

    return promise
}

export const get = (url) => {
    return doFetch('GET', url)
}
