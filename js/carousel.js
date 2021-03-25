//Image container
var images = document.getElementById('carousel-images');
//Image caption
var caption = document.getElementById('carouselCaption');
//previous button
var prev = document.getElementById('carouselPrev');
//next button
var next = document.getElementById('carouselNext');
//fetch josn galley//
fetch("carousel.json")
//make something happen with the response//
.then(function(res){
    //Make "then" into json representation// 
    res.json().then(function(json){
        //loop over each object in json(array)//
        json.forEach(function(el, i){
            //create image element//
            var image = document.createElement('img');

            //set our attributes//
            image.setAttribute('src', el.url);
            //the url of my image//
            image.setAttribute('alt', el.caption);
            //Alternative text//
            image.setAttribute('title', el.caption);

            //Add image to our carouselImages element//
            images.appendChild(image);
        });

        //all images loaded into carousel, set up carousel//
        //Pass json file(array)//
        setupCarousel(json);
    });
});
    //function to create carousel//
function setupCarousel(json){
        //use variables to keep onto of things//
        
        //Number of children in carouselImages//
    var imageCount = images.childElementCount;

        //image in view//
    var currentImage = 1;

        //width of images//
    var imageWidth = 500;

        //Event listeners on buttons//
        //previous button//
    prev.addEventListener('click', function(e){
        e.preventDefault();

            //if image in view is not the first image//
        if(currentImage != 1){
                //decrement the image refernce//
            --currentImage;
                //move previous image into view using margin property//
            images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
        }
            //update caption//  
            caption.innerText = json[currentImage - 1].caption;
        });
        //next button//
        next.addEventListener('click', function(e){
            e.preventDefault();

            //if image shown is not last image//
            if(currentImage != imageCount){
                //increment current image reference//
                ++currentImage;

                //move next picture into view using the margin left property//
                images.style.left = imageWidth -(currentImage * imageWidth) +'px';
            }

                //updater our caption//
            caption.innerText = json[currentImage -1].caption;
    });
            //update our caption//
            caption.innerText = json[currentImage -1].caption;

        
}

            

    




