export function formatBrewTime(brew_time){  
    const brewTime = brew_time.split(":");
	const hr = brewTime[1] === "00" ? "" : brewTime[1] + "h";
	const min = brewTime[2] === "00" ? "" : brewTime[2] + "m";
    return `${hr} ${min}`;
}