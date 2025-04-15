import {EventHandlerRequest, H3Event} from "h3";

export default defineEventHandler((event: H3Event<EventHandlerRequest>) => {
    //const KV = event.context.cloudflare.env.lottonumerot;
    return {
        hello: 'world'
    }
})