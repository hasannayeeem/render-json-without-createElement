const camelCaseToKebabCase = (camelCaseObj) => {
    return Object.keys(camelCaseObj)
      .map((key) => {
        const kebabCase = key.replace(
          /[A-Z]/,
          (match) => "-" + match.toLowerCase()
        );
        const property = kebabCase;
        const value = camelCaseObj[key];
        return `${property}:${value};`;
      })
      .join("\n");
  };
  
  export default camelCaseToKebabCase;