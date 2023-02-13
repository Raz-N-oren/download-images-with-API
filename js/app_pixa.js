window.onload = function(){
    doApi("dogs");
    declareEvents();
}

const declareEvents = function(){
    let search_btn = document.querySelector("#search_btn");
    search_btn.addEventListener("click",function(){
        let input_value = document.querySelector("#input_search").value;
        doApi(input_value);

    })
        document.addEventListener("keydown",function(e){
            if(e.key == "Enter"){
                let input_value = document.querySelector("#input_search").value;
                doApi(input_value);
            }
        })
}

const doApi = function(_searchQ){
    document.querySelector(".row").innerHTML = `
    <div class="text-center mt-3 w-100">
    <img src="images/loading.gif" width="200" height="200">
    </div>
    `;
    let url = `https://pixabay.com/api/?key=33422323-56b21437dbc8a9fe7bb6da8c1&q=${_searchQ}&image_type=photo`;
    axios.get(url)
    .then(function(response){
        // console.log(response.data.hits);
        createPics(response.data.hits);
    })
}

const createPics = function(_arr){
    document.querySelector(".row").innerHTML = "";
    _arr.forEach(item => {
        let pic = new Pixa(".row", item);
        pic.render();
    });
}