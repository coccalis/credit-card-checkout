function onlyNumbers(ev){
    var ASCIICode = (ev.which) ? ev.which : EventTarget.keyCode
    if(ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}