function getClass(selector) {
    return `${selector.type ? selector.type : selector.name ? selector.name : "prefix"}-${selector.id}`;
}

export default getClass;