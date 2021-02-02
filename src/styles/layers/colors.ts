const defaultColors = {
  ocean: 'hsl(220, 95%, 75%)',
  land: 'hsl(0, 0%, 100%)',
  text: 'hsl(0, 0%, 0%)',
  textHalo: 'hsla(0, 0%, 100%, 0.9)',
  adm0Line: 'hsl(0, 0%, 0%)',
  adm1Line: 'hsl(0, 0%, 67%)',
  adm2Line: 'hsl(0, 0%, 33%)',
  adm3Line: 'hsl(0, 0%, 0%)',
  adm4Line: 'hsl(0, 0%, 0%)',
};

const lightColors = {
  ocean: 'hsl(189, 12%, 88%)',
  land: 'hsl(60, 11%, 98%)',
  text: 'hsl(0, 0%, 20%)',
  textHalo: 'hsla(0, 0%, 100%, 0.5)',
  adm0Line: 'hsl(0, 0%, 20%)',
  adm1Line: 'hsl(0, 0%, 60%)',
  adm2Line: 'hsl(0, 0%, 40%)',
  adm3Line: 'hsl(0, 0%, 20%)',
  adm4Line: 'hsl(0, 0%, 20%)',
};

const darkColors = {
  ocean: 'hsl(180, 2%, 18%)',
  land: 'hsl(30, 1%, 32%)',
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
