var sidenavInsts;
var modalInsts;
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    sidenavInsts = M.Sidenav.init(elems,{edge:'right'});
    elems = document.querySelectorAll('.modal');
    modalInsts = M.Modal.init(elems);
});