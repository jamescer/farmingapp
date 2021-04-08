const teleportlist = []

class Teleport {
    constructor({ name, coordinates, items, requirements }) {
        if (typeof name === 'string') { //name must be string
            this.name = name;
        } else {
            throw console.log('Error: Teleport name must be string')
        }
        if ((typeof coordinates === 'object') && (coordinates.length === 2)) { //coordinates must be object of length 2
            this.coordinates = coordinates;
        } else {
            throw console.log(`Error: Teleport coordinates must be an object with length of 2`)
        }
        if (typeof items === 'object') { //items should be object of strings (haven't checked contents here)
            this.items = items;
        } else throw console.log(`Error: Teleport items must be array of strings.`)
        if (typeof requirements === 'object') { //should be an array of true false.
            this.requirements = requirements
        }
    }

    requirementsMet() {
        this.requirements.every((e) => {
            return e === true
        });
        return ismet;
    }
}

module.exports = {
    Teleport: Teleport,
    teleportlist: teleportlist
};