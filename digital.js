
function newtime() {
    var today= new Date();
    var h= today.getHours();
    var m= today.getMinutes();
    var s= today.getSeconds();

    function add_zero(i) {
        if(i < 10) {
            i= "0" +i;
        }
        return i;
    }
    m= add_zero(m);
    s= add_zero(s);

    document.getElementById('clock').innerHTML = h +":" + m + ":" + s;
    // console.log(h);

    setTimeout(newtime, 500);

        if(h<12)
        {
            document.body.style.backgroundImage= 'url(morning.jpg)';
            document.getElementById('heading').innerHTML= "Good Morning!";
        }

        if(h>=12 && h<17) {
            document.body.style.backgroundImage= 'url(afternoon2.jpg)';
            document.getElementById('heading').innerHTML= "Good Afternoon!";

        }
        
        if(h>=17) {
            document.body.style.backgroundImage= 'url(evening.jpg)';
            document.getElementById('heading').innerHTML= "Good Evening!"
            document.getElementById('heading').style.color = 'white'
	        document.getElementById('clock').style.color = 'white'
        }
}
newtime();
