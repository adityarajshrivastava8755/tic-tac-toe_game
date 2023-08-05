var lengthofloop = document.querySelectorAll(".box").length;
var count = 0;
var a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, z = 0;

for (var no = 0; no < lengthofloop; no++) {
    document.querySelectorAll(".box")[no].addEventListener("click", function (w) {


        var clickevent = w.target.className;
        if (z === 1)
            clickevent.preventDefault();
        switch (clickevent) {
            case "box a":
                w.preventDefault();
                if (a === 1)
                    stopPropagation();
                else {
                    count = count + 1;
                    if (count % 2 === 0) {
                        document.querySelector(".a").style.backgroundImage = "url(asset/cross.png)";
                        a = 1;
                        document.querySelector(".a").innerHTML="x";

                    }
                    else {
                        document.querySelector(".a").style.backgroundImage = "url(asset/zero.png)";
                        a = 1;
                        document.querySelector(".a").innerHTML="o";
                        
                    }
                    if(count>=5)
                    checkwinner();
                }

                break;
            case "box b":
                w.preventDefault();
                if (b === 1)
                    stopPropagation();
                else {
                    count = count + 1;
                    if (count % 2 === 0) {
                        document.querySelector(".b").style.backgroundImage = "url(asset/cross.png)";
                        b = 1;
                        document.querySelector(".b").innerHTML="x";
                    }
                    else {
                        document.querySelector(".b").style.backgroundImage = "url(asset/zero.png)";
                        b = 1;
                        document.querySelector(".b").innerHTML="o";
                    }
                    if(count>=5)
                    checkwinner();
                }
                break;
            case "box c":
                w.preventDefault();
                if (c === 1)
                    stopPropagation();
                else {
                    count = count + 1;
                    if (count % 2 === 0) {
                        document.querySelector(".c").style.backgroundImage = "url(asset/cross.png)";
                        c = 1;
                        document.querySelector(".c").innerHTML="x";
                    }
                    else {
                        document.querySelector(".c").style.backgroundImage = "url(asset/zero.png)";
                        c = 1;
                        document.querySelector(".c").innerHTML="o";
                    }
                    if(count>=5)
                    checkwinner();
                }
                break;
            case "box d":
                w.preventDefault();
                if (d === 1)
                    stopPropagation();
                else {
                    count = count + 1;
                    if (count % 2 === 0) {
                        document.querySelector(".d").style.backgroundImage = "url(asset/cross.png)";
                        d = 1;
                        document.querySelector(".d").innerHTML="x";
                        
                    }
                    else {
                        document.querySelector(".d").style.backgroundImage = "url(asset/zero.png)";
                        d = 1;
                        document.querySelector(".d").innerHTML="o";
                    }
                    if(count>=5)
                    checkwinner();
                }
                break;
            case "box e":
                w.preventDefault();
                if (e === 1)
                    stopPropagation();
                else {
                    count = count + 1;
                    if (count % 2 === 0) {
                        document.querySelector(".e").style.backgroundImage = "url(asset/cross.png)";
                        e = 1;
                        document.querySelector(".e").innerHTML="x";
                    }
                    else {
                        document.querySelector(".e").style.backgroundImage = "url(asset/zero.png)";
                        e = 1;
                        document.querySelector(".e").innerHTML="o";
                    }
                    if(count>=5)
                    checkwinner();


                }
                break;
            case "box f":
                w.preventDefault();
                if (f === 1)
                    stopPropagation();
                else {
                    count = count + 1;
                    if (count % 2 === 0) {
                        document.querySelector(".f").style.backgroundImage = "url(asset/cross.png)";
                        f = 1;
                        document.querySelector(".f").innerHTML="x";
                    }
                    else {
                        document.querySelector(".f").style.backgroundImage = "url(asset/zero.png)";
                        f = 1;
                        document.querySelector(".f").innerHTML="o";
                    }
                    if(count>=5)
                    checkwinner();
                    
                }
                break;
            case "box g":
                w.preventDefault();
                if (g === 1)
                    stopPropagation();
                else {
                    count = count + 1;

                    if (count % 2 === 0) {
                        document.querySelector(".g").style.backgroundImage = "url(asset/cross.png)";
                        g = 1;
                        document.querySelector(".g").innerHTML="x";
                    }
                    else {
                        document.querySelector(".g").style.backgroundImage = "url(asset/zero.png)";
                        g = 1;
                        document.querySelector(".g").innerHTML="o";
                    }
                    if(count>=5)
                    checkwinner();
                }
                break;
            case "box h":
                w.preventDefault();
                if (h === 1)
                    stopPropagation();
                else {
                    count = count + 1;
                    if (count % 2 === 0) {
                        document.querySelector(".h").style.backgroundImage = "url(asset/cross.png)";
                        h = 1;
                        document.querySelector(".h").innerHTML="x";
                    }
                    else {
                        document.querySelector(".h").style.backgroundImage = "url(asset/zero.png)";
                        h = 1;
                        document.querySelector(".h").innerHTML="o";
                    }
                    if(count>=5)
                    checkwinner();
                }
                break;
            case "box i":
                w.preventDefault();
                if (i === 1)
                    stopPropagation();
                else {
                    count = count + 1;
                    if (count % 2 === 0) {
                        document.querySelector(".i").style.backgroundImage = "url(asset/cross.png)";
                        i = 1;
                        document.querySelector(".i").innerHTML="x";
                    }
                    else {
                        document.querySelector(".i").style.backgroundImage = "url(asset/zero.png)";
                        i = 1;
                        document.querySelector(".i").innerHTML="o";
                    }
                    if(count>=5)
                    checkwinner();
                }
                break;

        }

        function checkwinner() {
            var aa=document.querySelector(".a").innerHTML;
            var bb=document.querySelector(".b").innerHTML;
             var cc=document.querySelector(".c").innerHTML;
             var dd=document.querySelector(".d").innerHTML;
             var ee=document.querySelector(".e").innerHTML;
             var ff=document.querySelector(".f").innerHTML;
             var gg=document.querySelector(".g").innerHTML;
             var hh=document.querySelector(".h").innerHTML;
             var ii=document.querySelector(".i").innerHTML;
             
            if (aa===bb && bb===cc) 
            {
                if(count%2==0)
                document.querySelector(".win").innerHTML = "X is a winner";
                else
                document.querySelector(".win").innerHTML = "O is a winner";
                z = 1;
              

            }
            else if(aa===dd&&dd==gg) 
            {
                if(count%2==0)
                document.querySelector(".win").innerHTML = "X is a winner";
                else
                document.querySelector(".win").innerHTML = "O is a winner";
                z = 1;
            }
            else if (gg===hh&&hh===ii) 
            {
                if(count%2==0)
                document.querySelector(".win").innerHTML = "X is a winner";
                else
                document.querySelector(".win").innerHTML = "O is a winner";
                z = 1;
            }
            else if (cc===ff&&ff===ii) 
            {
                if(count%2==0)
                document.querySelector(".win").innerHTML = "X is a winner";
                else
                document.querySelector(".win").innerHTML = "O is a winner";
                z = 1;
            }
            else if (cc===ee&&ee===gg) 
            {
                if(count%2==0)
                document.querySelector(".win").innerHTML = "X is a winner";
                else
                document.querySelector(".win").innerHTML = "O is a winner";
                z = 1;
            }
            else if (aa===ee&&ee===ii) 
            {
                if(count%2==0)
                document.querySelector(".win").innerHTML = "X is a winner";
                else
                document.querySelector(".win").innerHTML = "O is a winner";
                z = 1;
            }
            else if (bb===ee&&ee===hh) 
            {
                if(count%2==0)
                document.querySelector(".win").innerHTML = "X is a winner";
                else
                document.querySelector(".win").innerHTML = "O is a winner";
                z = 1;
            }
            else if (dd===ee&&ee===ff) 
            {
                if(count%2==0)
                document.querySelector(".win").innerHTML = "X is a winner";
                else
                document.querySelector(".win").innerHTML = "O is a winner";
                z = 1;
            }
            else if(count==9)
            {
                document.querySelector(".win").innerHTML = "TIE";
                z = 1;

            }
          
          
        }


    })
}
document.querySelector(".new-game").addEventListener("click", function () {
    window.location.reload()
})
