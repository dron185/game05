export class EventEmitter {

    // хранить подписчиков (колбэки)
    subscribers = {
        // click: []
        // doubleClick: []
        //"changePosition": [render]
    }

    // дать возможность сохранить подписчиков
    //addEventListener(eventName, callback) {}
    subscribe(eventName, callback) {
        if (!this.subscribers[eventName]) {
            this.subscribers[eventName] = []
        }
        this.subscribers[eventName].push(callback);
    }

    // дать возможность вызвать этих подписчиков
    emit(eventName, data = null) {
        this.subscribers[eventName]?.forEach(cb => cb(data))
    }

    // дать возможность отписаться
    unsubscribe(eventName, callback) {
        this.subscribers[eventName] = this.subscribers[eventName].filter(cb => cb !== callback);
    }
}