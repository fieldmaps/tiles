const colorLight = {
  water: 'hsl(220, 95%, 75%)',
  wetland: 'hsl(194, 62%, 88%)',
  land: 'hsl(0, 0%, 100%)',
  road: 'hsl(25, 89%, 67%)',
  place: 'hsl(0, 0%, 25%)',
  health: 'hsl(0, 77%, 52%)',
  education: 'hsl(0, 77%, 52%)',
  markets: 'hsl(0, 77%, 52%)',
  pointOutline: 'hsla(0, 0%, 100%, 0.1)',
  text: 'hsl(0, 0%, 0%)',
  textHalo: 'hsla(0, 0%, 100%, 0.9)',
  adm0Line: 'hsl(0, 0%, 0%)',
  adm1Line: 'hsl(0, 0%, 67%)',
  adm2Line: 'hsl(0, 0%, 33%)',
  adm3Line: 'hsl(0, 0%, 0%)',
  adm4Line: 'hsl(0, 0%, 0%)',
};

const colorDark = {
  water: 'hsl(220, 30%, 3%)',
  wetland: 'hsl(220, 15%, 10%)',
  land: 'hsl(0, 0%, 12%)',
  road: 'hsl(25, 50%, 50%)',
  place: 'hsl(0, 0%, 75%)',
  health: 'hsl(0, 77%, 52%)',
  education: 'hsl(0, 77%, 52%)',
  markets: 'hsl(0, 77%, 52%)',
  pointOutline: 'hsla(0, 0%, 0%, 0.1)',
  text: 'hsl(0, 0%, 100%)',
  textHalo: 'hsla(0, 0%, 0%, 0.5)',
  adm0Line: 'hsl(0, 0%, 60%)',
  adm1Line: 'hsl(0, 0%, 40%)',
  adm2Line: 'hsl(0, 0%, 60%)',
  adm3Line: 'hsl(0, 0%, 80%)',
  adm4Line: 'hsl(0, 0%, 80%)',
};

const monoLight = {
  water: 'hsl(189, 12%, 88%)',
  wetland: 'hsl(189, 12%, 94%)',
  land: 'hsl(60, 11%, 98%)',
  road: 'hsl(25, 22%, 94%)',
  place: 'hsl(0, 0%, 25%)',
  health: 'hsl(0, 77%, 52%)',
  education: 'hsl(0, 77%, 52%)',
  markets: 'hsl(0, 77%, 52%)',
  pointOutline: 'hsla(0, 0%, 100%, 0.1)',
  text: 'hsl(0, 0%, 0%)',
  textHalo: 'hsla(0, 0%, 100%, 0.9)',
  adm0Line: 'hsl(0, 0%, 0%)',
  adm1Line: 'hsl(0, 0%, 67%)',
  adm2Line: 'hsl(0, 0%, 33%)',
  adm3Line: 'hsl(0, 0%, 0%)',
  adm4Line: 'hsl(0, 0%, 0%)',
};

const monoDark = {
  water: 'hsl(220, 2%, 3%)',
  wetland: 'hsl(220, 2%, 10%)',
  land: 'hsl(0, 0%, 12%)',
  road: 'hsl(25, 4%, 15%)',
  place: 'hsl(0, 0%, 75%)',
  health: 'hsl(0, 77%, 52%)',
  education: 'hsl(0, 77%, 52%)',
  markets: 'hsl(0, 77%, 52%)',
  pointOutline: 'hsla(0, 0%, 0%, 0.1)',
  text: 'hsl(0, 0%, 100%)',
  textHalo: 'hsla(0, 0%, 0%, 0.5)',
  adm0Line: 'hsl(0, 0%, 80%)',
  adm1Line: 'hsl(0, 0%, 40%)',
  adm2Line: 'hsl(0, 0%, 60%)',
  adm3Line: 'hsl(0, 0%, 80%)',
  adm4Line: 'hsl(0, 0%, 80%)',
};

export default (theme: string) => {
  if (theme === 'color-light') return colorLight;
  if (theme === 'color-dark') return colorDark;
  if (theme === 'mono-light') return monoLight;
  if (theme === 'mono-dark') return monoDark;
  return colorLight;
};
