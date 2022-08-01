const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-/]))?/;

export const capitalizeFirstLetter = (text: string) => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

export const getPrettifiedKeys = (obj:Record<string, any>) => {
  if (!obj) return [];
  return Object.keys(obj).map((key) => capitalizeFirstLetter(key.replaceAll('_', '')));
};

export const isDate = (value: string) => value.length > 5 && (new Date(value).toString() !== 'Invalid Date') && !Number.isNaN(new Date(value));

export const isUrl = (value:string) => urlPattern.test(value);
