export default function (): number {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const pastDaysOfYear = (now.getTime() - startOfYear.getTime()) / 86400000;

    // Calculate the week number
    return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
}