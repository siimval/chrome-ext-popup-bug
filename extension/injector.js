(function () {
    var uniqueId = 'h1-id';

    if (document.getElementById(uniqueId))
        return;

    var h1 = document.createElement('H1');
    var text = document.createTextNode('MY SUPER AWESOME HEADING');
    h1.appendChild(text);

    h1.id = uniqueId;

    document.body.appendChild(h1);
})();