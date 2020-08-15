export const DATE = new Date();
export const isDay = !(DATE.getHours() < 18 || DATE.getHours() > 7);