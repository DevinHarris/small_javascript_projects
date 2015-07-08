//Opens links in new tab.
var links = document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
    links[i].setAttribute('target', '_blank');
}

function getTarget(e) {
    if (!e) {
        e = window.event;
    } 
    return e.target || e.srcElement;
}

function itemDone(e) {
    var target, elParent, elGrandParent;
    target = getTarget(e);
    elParent = target.parentNode;
    elGrandParent = target.parentNode.parentNode;
    
    elGrandParent.removeChild(elParent);
    
    // Prevent going somewhere else
    
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

var el = document.getElementById('sites');

if (el.addEventListener) {
    el.addEventListener('click', function(e) {
        itemDone(e);
    }, false);
} else {
    el.attachEvent('onclick', function(e) {
        itemDone(e);
    });
}