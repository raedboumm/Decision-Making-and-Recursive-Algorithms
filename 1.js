function adviseClothing(temperature, isRaining) {
    if (isRaining) {
        return "It's raining: Wear a raincoat and bring an umbrella.";
    } 
    
    // If it's not raining, check the temperature
    if (temperature < 15) {
        return "It's cold: Wear a heavy coat, scarf, and gloves.";
    } else if (temperature >= 15 && temperature <= 25) {
        return "It's mild: A sweater or light jacket is perfect.";
    } else {
        return "It's warm: T-shirt and shorts are great.";
    }
}

