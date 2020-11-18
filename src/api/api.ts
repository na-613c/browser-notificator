import eventT from '../models/EventModel'

export const eventsAPI = {
    getData: async () => {
        let timeOut = Math.floor(Math.random() * 1999) + 1000
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(localStorage.getItem('browser_notificator')), timeOut)
        });

        return await promise;
    },
    setData: async (data: eventT[]) => {
        localStorage.setItem('browser_notificator', JSON.stringify(data))
    },
}
