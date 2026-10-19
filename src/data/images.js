// Remote photography (Unsplash). DEMO: replace with the school's own photos.
// Every image is rendered through <SmartImage>, which shows a branded
// fallback if a URL fails to load, so the layout never breaks.

const unsplash = (id, width = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=75`

export const images = {
  hero: unsplash('1509062522246-3755977927d7', 1600),
  aboutMain: unsplash('1577896851231-70ef18881754', 1000),
  aboutSecondary: unsplash('1503676260728-1c00da094a0b', 700),
  nursery: unsplash('1587654780291-39c9404d746b', 900),
  primary: unsplash('1588072432836-e10032774350', 900),
  secondary: unsplash('1427504494785-3a9ca7044f45', 900),
  admissions: unsplash('1523050854058-8df90110c9f1', 1400),
}
