export function avatarFallback(e, name, colour) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="${colour}"/><text x="50" y="50" text-anchor="middle" dominant-baseline="central" fill="white" font-family="sans-serif" font-size="42" font-weight="700">${name.charAt(0).toUpperCase()}</text></svg>`
  e.target.src = 'data:image/svg+xml;base64,' + btoa(svg)
  e.target.onerror = null
}

export const users = [
  { slug: "ollie",   name: "Ollie",   avatar: "ollie.jpg",   colour: "#e63946" },
  { slug: "joe",     name: "Joe",     avatar: "joe.jpg",     colour: "#457b9d" },
  { slug: "roddy",   name: "Roddy",   avatar: "roddy.jpg",   colour: "#2a9d8f" },
  { slug: "nathan",  name: "Nathan",  avatar: "nathan.jpg",  colour: "#f4a261" },
  { slug: "matty",   name: "Matty",   avatar: "matty.jpg",   colour: "#e9c46a" },
  { slug: "ruaridh", name: "Ruaridh", avatar: "ruaridh.jpg", colour: "#c77dff" },
  { slug: "adam",    name: "Adam",    avatar: "adam.jpg",    colour: "#06d6a0" },
]
