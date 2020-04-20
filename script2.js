//first we will pull all image links in to array
//ok we will try to put it into function

var images = [	"k1.jpg", "r2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/image7.jpg"];


function up(index) //3
{
	let temp = images[index];
	
	var back_index = index - 1;
	images[index] = images[back_index]; 
	images[back_index] = temp;
	load_images();

}
//this is bit confusing moreover i am using wrong gallery code, but my motive is just to share an idea how images will work in a chain using array

function down(index)
{
	let temp = images[index];
	
	var back_index = index + 1;
	images[index] = images[back_index]; 
	images[back_index] = temp;
	load_images();
}

function load_images()
{
	document.getElementById("imagesviajs").innerHTML = '';
	for (var i = 0; i < images.length; i++) 
	{
		
	    document.getElementById("imagesviajs").innerHTML += `<img src="${ images[i] }" style="width:100%">
	    <div class="controls">
	    	<button name="Up" value="Up" onclick="up(${i})">Up</button>
	    	<button name="Down" value="Down" onclick="down(${i})">Down</button>
	    </div>`; // This code will put image html tag into given Id in body,

		

	}
}


