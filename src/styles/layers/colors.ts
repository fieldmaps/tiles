const defaultColors = {
  water: 'hsl(220, 95%, 75%)',
  wetland: 'hsl(194, 62%, 88%)',
  land: 'hsl(0, 0%, 100%)',
  road: 'hsl(25, 89%, 67%)',
  text: 'hsl(0, 0%, 0%)',
  textHalo: 'hsla(0, 0%, 100%, 0.9)',
  adm0Line: 'hsl(0, 0%, 0%)',
  adm1Line: 'hsl(0, 0%, 67%)',
  adm2Line: 'hsl(0, 0%, 33%)',
  adm3Line: 'hsl(0, 0%, 0%)',
  adm4Line: 'hsl(0, 0%, 0%)',
};

const lightColors = {
  water: 'hsl(189, 12%, 88%)',
  wetland: 'hsl(189, 12%, 94%)',
  land: 'hsl(60, 11%, 98%)',
  road: 'hsl(25, 22%, 90%)',
  text: 'hsl(0, 0%, 0%)',
  textHalo: 'hsla(0, 0%, 100%, 0.9)',
  adm0Line: 'hsl(0, 0%, 0%)',
  adm1Line: 'hsl(0, 0%, 67%)',
  adm2Line: 'hsl(0, 0%, 33%)',
  adm3Line: 'hsl(0, 0%, 0%)',
  adm4Line: 'hsl(0, 0%, 0%)',
};

const darkColors = {
  water: 'hsl(180, 2%, 18%)',
  wetland: 'hsl(180, 2%, 24%)',
  land: 'hsl(30, 1%, 32%)',
  road: 'hsl(25, 4%, 33%)',
  text: 'hsl(0, 0%, 80%)',
  textHalo: 'hsla(0, 0%, 0%, 0.5)',
  adm0Line: 'hsl(0, 0%, 80%)',
  adm1Line: 'hsl(0, 0%, 40%)',
  adm2Line: 'hsl(0, 0%, 60%)',
  adm3Line: 'hsl(0, 0%, 80%)',
  adm4Line: 'hsl(0, 0%, 80%)',
};

export default (theme: string) => {
  if (theme === 'light') return lightColors;
  if (theme === 'dark') return darkColors;
  return defaultColors;
};
