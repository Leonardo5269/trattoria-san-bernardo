interface TimetableType {
  days: string;
  hours: string | undefined;
}
interface InfosType {
  phone: string;
  site: {
    url: string;
    text: string;
  };
  timetable: {
    open: TimetableType;
    close: TimetableType;
  };
}
interface SocialsType {
  facebook: string;
  instagram: string;
  googleMaps: string;
}

const infos: InfosType = {
  phone: '02 4965 0597',
  site: {
    text: 'Via Roma 1, Morimondo (MI)',
    url: 'https://maps.app.goo.gl/YhTNFzBWgMUWe7VP6'
  },
  timetable: {
    open: {
      days: 'Mercoledì - Domenica',
      hours: '12 - 15 / 19 - 22'
    },
    close: {
      days: 'Lunedì e Martedì',
      hours: undefined,
    },
  }
}
const socials: SocialsType = {
  facebook: 'https://www.facebook.com/trattoriasanbernardomorimondo',
  instagram: 'https://www.instagram.com/trattoria_sanbernardo/',
  googleMaps: 'https://maps.app.goo.gl/739YTWacVtBLhD6d9'
}

export { infos, socials };