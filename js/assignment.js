/*varriable and id assignment*/
var gallery = document.getElementById("gallery");
/*Fetching Json file(array)*/
fetch("image.json")
.then(function(res){
    res.json().then(function(json){
    /*loops over each item in our json(array)*/
    json.forEach(function(el){
        /*creates new pictue album container*/
        var galleryItem = document.createElement('a');
        /*gives the div a class name */
        galleryItem.setAttribute('class','gallery-item');
        /*brings href attribute to anchor*/
        galleryItem.setAttribute('href',el.url);
        /*opens image in new tab*/
        galleryItem.setAttribute('target', '_blank');
        /*create image element*/
        var image = document.createElement('img');
        /*Attributes*/
        image.setAttribute('src', el.url);
        /*Url of the image*/
        image.setAttribute('alt', el.caption);
        /*Alternative text*/
        image.setAttribute('title', el.caption);

        /*Creating caption element*/
        var caption = document.createElement('caption');

            /*Add text to the caption*/
            caption.innerText = el.caption;

             /*add the image and caption to gallery container*/
            galleryItem.appendChild(image);
            galleryItem.appendChild(caption);

            /*add the gallery item to gallery element*/
            gallery.appendChild(galleryItem);
        
    });
});
 
});
