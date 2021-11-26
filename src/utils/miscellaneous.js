const navigateToObjectEnd = (object, pathAsList) => {
  if (pathAsList.length > 0) {
    const nextKey = pathAsList.shift();
    if (nextKey === 0) {
      return navigateToObjectEnd(object[nextKey], pathAsList);
    } else if (object.hasOwnProperty(nextKey)) {
      return navigateToObjectEnd(object[nextKey], pathAsList);
    }
    pathAsList.unshift(nextKey);
    return [object, pathAsList];
  }
  return [object, pathAsList];
}

export { navigateToObjectEnd };