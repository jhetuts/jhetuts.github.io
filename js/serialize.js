(function(){
    const extractData = ( form ) =>{
        const obj = {};
        const elements = form.querySelectorAll('input, textarea');
        for(let key in elements){
            let name = elements[key].name;
            let value = elements[key].value;
            if(name) obj[name] = value;
        }
        return JSON.stringify(obj);
    }


    // document.addEventListener('DOMContentLoaded', () =>{
        
    // });

    document.addEventListener( "DOMContentLoaded", function() {
		var form = document.getElementById( "contact-form" );
		// var output = document.getElementById( "output" );
		form.addEventListener( "submit", function(e) {
            e.preventDefault()
            const data = extractData(this);
            console.log(data);

		});
	});

})();