export function useToggleClass(el, cls) {
  if (!el || !cls) {
    return
  }
  let classString = el.className
  const nameIndex = classString.indexOf(cls)
  if (nameIndex === -1) {
    classString += '' + cls
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + cls.length)
  }
  el.className = classString
}