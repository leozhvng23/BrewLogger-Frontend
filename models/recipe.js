class Recipe {
    constructor(id, beanId, name, imageUrl, brewer, brewType, ratio, description, duration, steps) {
        this.id = id;
        this.beanId = beanId;
        this.name = name;
        this.imageUrl = imageUrl;
        this.brewer = brewer;
        this.brewType = brewType;
        this.ratio = ratio;
        this.description = description;
        this.duration = duration;
        this.steps = steps;
    }
}

export default Recipe;
