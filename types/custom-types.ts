export interface ParsedResults {
    numbers: {
        primary: number[],
        secondary: number[]
        tertiary: number[]
    }
    jackpot: number
}

export interface NumberFetchError {
    error: string
}