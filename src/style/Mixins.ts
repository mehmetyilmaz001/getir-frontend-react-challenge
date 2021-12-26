const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }


export const device = {
    mobile: `(min-width: ${size.mobileS}) and (max-width: ${size.tablet})`,
    tablet: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };


  export const mq = (d: keyof typeof device) =>  {
    const media = `@media ${device[d]}`;
    // console.log("media", media);
    return media;
  };
