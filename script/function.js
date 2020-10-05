
function countNumbers() {
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    let pass = document.getElementById("pass").value;
    let rep = document.getElementById("reply");
    
    // Verifies whether the user typed something
    if (start.length == 0 || end.length == 0 || pass.length == 0){
        rep.innerHTML = 'Insert a valid number.'; 
    } else {
        // convert a string into a number
        start = Number(start);
        end = Number(end);
        pass = Number(pass);

        if (start < end) {
            // increasing couting
            for (var i = start; i <= end; i += pass) {
                rep.innerHTML += ` ${i} \u{1F449}`;
            }
        } else {
            // decreasing counting
            for (var i = start; i >= end; i -= pass) {
                rep.innerHTML += `${i} \u{1F449}`;
            }
        }
    }
}