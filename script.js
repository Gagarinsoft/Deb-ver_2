
Array.prototype.lastElement = function() {
    return this[this.length - 1]
}

let guiElements = {
    eventScore: {
        left: document.getElementById('es-l'),
        right: document.getElementById('es-r')
    },
    eventPoints: {
        left: document.getElementById('ep-l'),
        right: document.getElementById('ep-r')
    },
    gamePoints: {
        left: document.getElementById('gp-l'),
        right: document.getElementById('gp-r')
    },
    roundInfoPoints: document.getElementById('r_info_points'),
    roundCount: document.getElementById('r_count')


}
