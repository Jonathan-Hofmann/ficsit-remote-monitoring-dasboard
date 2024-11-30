import axios from "axios"

interface Subscription {
    [command:string]: {
        [widgetId:string]: Function
    }
}


let subscriptions:Subscription = {}
let mainLoop:NodeJS.Timeout | undefined

export class SubManager {
    
    private ip = "localhost"
    private port = "8080"
    private protocol = "http"

    private INTERVAL_MS = 1000;


    constructor(){
        console.log("STARTING SUBMANAGER")
        console.log("Starting main loop...")
        if(!mainLoop){
            mainLoop = setInterval(async () => {

                for (let i = 0; i < Object.keys(subscriptions).length; i++) {
                    const command = Object.keys(subscriptions)[i];
                    const callbacks = subscriptions[command];

                    const resp = await axios.get(this.protocol + "://" + this.ip + ":" + this.port + "/" + command)

                    if (resp.status === 200) {
                        for (let i = 0; i < Object.keys(callbacks).length; i++) {
                            const widgetKey = Object.keys(callbacks)[i];
                            const cb = callbacks[widgetKey];

                            cb(resp.data)
                        }
                    }
                }
                // console.log("Done loading " + Object.keys(subscriptions).length + " subscriptions.")
                // console.log(subscriptions);

            }, this.INTERVAL_MS);
        }
       
        // this.main();
    }

    subscribe = (command:string, callback:Function, widgetId:string) => {
        if(subscriptions[command]){
            subscriptions[command][widgetId] = callback
        } else {
            subscriptions[command] = {
                [widgetId]: callback
            }
        }

        console.log(subscriptions);
    }

    unsubscribe = (command:string, widgetId:string) => {
        if(subscriptions[command]){
            delete subscriptions[command][widgetId]
        }
    }

    destroy = () => {
        console.log("Destroying SubManager...");
        subscriptions = {};
        console.log("Test")
        console.log(mainLoop);
        clearInterval(mainLoop);
        mainLoop = undefined
    }
}
