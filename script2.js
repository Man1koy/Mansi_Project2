
var hobs = ["k1.jpg", "r2.jpg", "d1.jpg", "banglore.jpg", "chennai.jpg", "Dahanu.jpg","Derjeling.jpg","France.jpg","Ganga Aarti.jpg","goa.jpg","Goldentemp.jpg","harihareshwar.jpg","hongkong.jpg","Juhu beach.jpg","kashivishwanath.jpg","Korea.jpg","Kerala.jpg","lonavala.jpg","M1.jpg","Malvan.jpg","Mumbai.jpg","Pandharpur.jpg","Pelling.jpg","PortLouisMauritius.jpg","Raigad.jpg","shaniwar wada.jpg","shimla.jpg","Taiwan.jpg","taj.jpeg","Vaishnavdevi.jpg","wagahborder.jpg"];

<!--we have declared an array of images here named as hobs-->

function up(index)                                               <!--  This is a function that we have written to perform the shift of image to 1 position up-->
{
	let variabtemp = hobs[index];               <!--We declared and initialized a variable named variabtemp and assigned the array element at the index position to be stored inside the variabletemp.-->
	
	var backbutton = index - 1;                  <!--stored the value of the index after decrementing it by 1 and stored in variable named backbutton-->
	hobs[index] = hobs[backbutton];         <!--stored the index value of the image in the array of images which is again stored in the hobs[backbutton]-->
	hobs[backbutton] = variabtemp;         <!--The value stored in hobs[backbutton] is stored in the variabletemp variable-->
	hobbie();                                             <!--The function hobbie() is called.-->

}

function down(index)                                             <!--This is a function that we have written to perform the shift of image to 1 position down-->
{
	let variabtemp = hobs[index];               <!--stored the index value of an image from the array of images named hobs into a variable named variabtemp-->
	
	var backbutton = index + 1;                 <!--In a variable named backbutton we stored the index value of an image by incrementing the index value of the image-->
	hobs[index] = hobs[backbutton];          <!--In hobs[index] we stored the value that we got in hobs[backbutton]-->
	hobs[backbutton] = variabtemp;          <!--Then we stored the value stored in hobs[backbutton] into the variable variabletemp-->
	hobbie();                                              <!--The function hobbie() is called. -->
}


function left(index)
{
                let variabtemp = hobs[index];               <!--stored the index value of an image from the array of images named hobs into a variable named variabtemp-->
	
	var backbutton = index[0];                 <!--In a variable named backbutton we stored the index value of an image by incrementing the index value of the image-->
	hobs[index] = hobs[backbutton];          <!--In hobs[index] we stored the value that we got in hobs[backbutton]-->
	hobs[backbutton] = variabtemp;          <!--Then we stored the value stored in hobs[backbutton] into the variable variabletemp-->
	hobbie();   

}


function right(index)
{
                let variabtemp = hobs[index];               <!--stored the index value of an image from the array of images named hobs into a variable named variabtemp-->
	
	var backbutton = index[30];                 <!--In a variable named backbutton we stored the index value of an image by incrementing the index value of the image-->
	hobs[index] = hobs[backbutton];          <!--In hobs[index] we stored the value that we got in hobs[backbutton]-->
	hobs[backbutton] = variabtemp;          <!--Then we stored the value stored in hobs[backbutton] into the variable variabletemp-->
	hobbie();   

}

function hobbie()                                                                                                <!--We wrote a function hobbie to perform the operation-->
{
	document.getElementById("hobjs").innerHTML = '';                         <!--hobjs is the name given to the column here we are getting the element from the column.-->
	for (var i = 0; i < hobs.length; i++)                                                    <!--We have written a for loop to take all the elements in the array as many elements are present in the array -->
	{
		
	    document.getElementById("hobjs").innerHTML += `<img src="${ hobs[i] }" style="width:100%">           <!--  here we are getting elements of the column with name hobjs and take elemets from their given path to display them.-->
	    <div class="controls">                                                                                                                                 <!--here we have used a division tag for writing the buttons-->
	    	<button name="Up" value="Up" onclick="up(${i})">Up</button>                                                    <!--This is a button to shift an image 1 position upward-->
	    	<button name="Down" value="Down" onclick="down(${i})">Down</button>                                 <!--This is a button to shift an image 1 position downward-->
	                <button name="Left" value="Left" onclick="left(${i})">Left</button>
                               <button name="Right" value="Right" onclick="right(${i})">Right</button>
                    </div>`; 

		

	}
}


