function checkLength(e, minLength) {
    var el, elMsg;
    if (!e) {
        e = window.event;
    }
    
    el = e.target || e.srcElement;
    elMsg = document.getElementById('error');    
    
    if (this.value.length < minLength) {
        var moreChar = minLength - el.value.length;
        elMsg.innerHTML = "You username must be " + moreChar + " characters more.";        
    } else {
        elMsg.innerHTML = '';
    }
}

var elUsername = document.getElementById('username');

if (elUsername.addEventListener) {
    elUsername.addEventListener('blur', function(e) {
        checkLength(e, 5);
    }, false);        
} else {
    elUsername.attachEvent('onblur', function(e) {
        checkLength(e,5);
    });
}