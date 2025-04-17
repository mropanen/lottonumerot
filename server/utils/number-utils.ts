import {ParsedResults} from "~/types/custom-types";

export function parseNumbersJson(json: string): ParsedResults {
    const tempJson = JSON.parse(json)[0];
    // Remove the "drawType" property
    delete tempJson.results[0].drawType;

    return {
        numbers: tempJson.results[0],
        jackpot: tempJson.jackpots[0].amount,
    };
}