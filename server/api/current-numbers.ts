// server/api/current-numbers.ts
import {EventHandlerRequest, H3Event} from "h3";
import currentWeeknumber from "~/utils/current-weeknumber";

function getCurrentWeekString(): string {
    // @TODO this is not correct, it should be the current week number
    // but that only actually works on late night Saturday and Sunday :P
    return `${new Date().getFullYear()}-W${currentWeeknumber()-1}`;
}

function parseNumbersJson(json: string): any {
    const tempJson = JSON.parse(json)[0];
    const finalJson = {
        numbers: tempJson.results[0],
        jackpot: tempJson.jackpots[0].amount,
    };

    return finalJson;
}

export default defineEventHandler((event: H3Event<EventHandlerRequest>) => {
    const KV = event.context.cloudflare.env.lottonumerot;
    const currentWeekString = getCurrentWeekString();
    return KV.get(currentWeekString).then((results: string) => {
        if (results) {
            return parseNumbersJson(results);
        }
        return $fetch(`https://www.veikkaus.fi/api/draw-results/v1/games/LOTTO/draws/by-week/${currentWeekString}`, {
            "credentials": "include",
            "headers": {
                "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:137.0) Gecko/20100101 Firefox/137.0",
                "Accept": "application/json, text/plain, */*",
                "Accept-Language": "en-US,en;q=0.5",
                "x-pesco3-enabled": "true",
                "X-ESA-API-Key": "ROBOT",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "Priority": "u=0"
            },
            "referrer": "https://www.veikkaus.fi/fi/tulokset",
            "method": "GET",
            "mode": "cors"
        }).then((fetchedResults: any): any => {
            console.log("Results: ", fetchedResults);
            if (!fetchedResults || fetchedResults.length === 0) {
                console.error("No results (yet)");
                return {error: "No results (yet)"};
            }
            const fetchedResultsJson = JSON.stringify(fetchedResults);
            return KV.put(currentWeekString, fetchedResultsJson).then(() => {
                console.log("Saved results to KV")
                return parseNumbersJson(fetchedResultsJson);
            });
        });
    }).catch((error: any) => {
        console.error("Error fetching results: ", error);
        return {error: "Failed to fetch results"};
    });
});