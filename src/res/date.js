export const DATE = new Date();
export const MONTH = ["Янв", "Фев", "Мар", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Ноя", "Дек"];
export const DAYS = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота','Воскресенье'];
export const DAYS_SHORTLY = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб','Вс','Пн'];
export const isDay = !(DATE.getHours() < 18 || DATE.getHours() > 7);