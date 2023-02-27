//XHR READY STATES

// readyState	Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// RESPONSE STATUS

// 200: "OK"
// 403: "Forbidden"
// 404: "Page not found"

// STATUS TEXT

// statusText	Returns the status-text (e.g. "OK" or "Not Found")

let btn = document.getElementById("btn").addEventListener("click", function(){   //Bu eski bir yöntemdir, her seferinde ready state ve status'u kontrol etmeyi gerektirir.
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "example.txt", true);
    // xhr.onreadystatechange = function(){
    //    if(this.status==200 && this.readyState==4) {
    //       console.log(this.responseText)
    //    }

    // }

    xhr.onprogress = function(){    //onprogess ise ready state 3 olduğunda yani progress halinde olduğu anda devreye girer.
        console.log("istek işleniyor...")
    }



    xhr.onload = function() {      // onload onjesi ise ready state yalnızca 4 olduğunda yani tamamlandığında devreye girer ve diğer stateleri es geçmiş oluruz
        if(this.status === 200) {
            console.log(this.responseText)
        }
    }


       
    
   

    xhr.send();

})



