const navigateToObjectEnd = (object, pathAsList) => {
  if (pathAsList.length > 0) {
    const nextKey = pathAsList.shift();
    if (nextKey === 0) {
      if (pathAsList.length === 0) {
        return navigateToObjectEnd(object[nextKey], pathAsList);
      } else {
        const keyAfterNext = pathAsList.shift();
        const indexOfKeyAfterNext = object.map(item => Object.keys(item)[0]).indexOf(keyAfterNext);
        pathAsList.unshift(keyAfterNext);
        if (indexOfKeyAfterNext === -1) {
          pathAsList.unshift(nextKey);
          return [object, pathAsList, true];
        }
        return navigateToObjectEnd(object[indexOfKeyAfterNext], pathAsList);
      }
    } else if (object.hasOwnProperty(nextKey)) {
      return navigateToObjectEnd(object[nextKey], pathAsList);
    }
    pathAsList.unshift(nextKey);
    return [object, pathAsList];
  }
  return [object, pathAsList];
}

export { navigateToObjectEnd };