const key= "8db273d1d76ed0aa3e275141bc085e7c";
const baseURL = "https://api.themoviedb.org/3/movie/popular?api_key=" +key+ "&language=en-US&page=1";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=" +key+"&query=";
const container = document.querySelector(".container");
const spinner = document.querySelector(".spinner");
const alerts = document.querySelector(".alert");
const movieContainer = document.querySelector('#movie-container');
const form = document.getElementById("form");
const search = document.getElementById("search");
//picture response



const response= fetch(baseURL).then((data)=>{
	return data.json()
})
response.then((data)=>{
	//play with data
	for(let i=0; i<data.results.length;i++){
		//console.log (data.results[i])	
		 let picture = "https://image.tmdb.org/t/p/w1280"+data.results[i].poster_path;
		 console.log (picture);
		movieContainer.innerHTML += `
		 <div class=" col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
	        <div class="card shadow entire-body mb-2">
	  		<div id="card-pic"class="card image" style="height:300px; background: url('${picture}') no-repeat; background-size:cover;">
	  			
	  		</div>
	  			<div class="card-body " style="max-height:140px !important;" >
	  				<p id="card-title"class="title" style="text-align: center !important;"> <b>${data.results[i].original_title}</b></p>
	    			<hr>
	    			<p id="card-vote"class="text-center text-success rating"><b>${data.results[i].vote_average}</b></p>
	    			<p class="text-center rating rating-small">Rating</p>
	    			<hr>
	  			</div>
	  			
  		  </div>
  		</div>
		`;
		container.classList.remove('d-none');
		spinner.classList.add('d-none');
		alerts.classList.add('d-none');
	}
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    movieContainer.innerHTML = '';
     
    const searchTerm = search.value;

    if (searchTerm) {
        response(SEARCHAPI + searchTerm);
        search.value = "";
    }
});

