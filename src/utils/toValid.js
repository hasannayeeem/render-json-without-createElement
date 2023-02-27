function toValid(componentName) {
    if(componentName.includes(" ")){
        return componentName.replace(/\s/g, '');
    }else{
        return componentName;
    }
}

export default toValid