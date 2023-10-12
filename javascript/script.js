$(document).ready( function () {
    let nameindex = 0;
    let numberindex = 0;
    let textareaindex = 0;
    let Countryindex = 0;
    let fileindex = 0;
    let radioindex = 0;
    let checkboxindex = 0;

    // append name input
    $("#textbox").click(function(){
        nameindex++
        $('#textbox-input').append('<input class="input-name" type="text" id= "name' + nameindex + '" placeholder="please enter your Name"></input>');
    });

    // append number input
    $("#number").click(function(){
        numberindex++
        $('#number-input').append('<input class="input-number" type="number" id="enternumber' + numberindex + '" placeholder="please enter number"></input>');
    });

    // append textarea input
    $("#textarea").click(function(){
        textareaindex++
        $('#textarea-input').append('<textarea class="input-textarea" id="comment' + textareaindex + '" rows="4" cols="40" placeholder="Describe yourself here..."></textarea>');
    });

    // append select manu
    $("#select").click(function(){
        Countryindex++
        $('#select-input').append('<select class="form-select input-select" id="country' + Countryindex + '"><option value="">Select a Country</option><option value="Bharat">Bharat</option><option value="USA">USA</option><option value="Japan">Japan</option></select>');
    });

    // append file input
    $("#file").click(function(){
        fileindex++
        $('#file-input').append('<label class="fw-bold input-file" for="myfile' + fileindex + '">Select a file:&nbsp;</label> <input type="file" id="myfile' + fileindex + '" name="myfile">');
    });

    // append radio button
    $( "#radio" ).click(function(){
        radioindex++
        $('#radio-input').append('<h6>Gender: </h6> <input class="form-check-input input-radio" type="radio" name="Gender' + radioindex + '" id="male' + radioindex + '" value="male"> <label class="form-check-label" for="male' + radioindex + '">Male</label> <input class="form-check-input" type="radio" name="Gender' + radioindex + '" id="female' + radioindex + '" value="female"> <label class="form-check-label" for="female' + radioindex + '">Female</label>');
    }); 

    // append checkbox
    $("#checkbox").click(function(){
        checkboxindex++
        $('#checkbox-input').append('<h6>Hobbies: </h6> <input class="form-check-input input-checkbox" type="checkbox" name="hobbies' + checkboxindex + '" value="cricket" id="cricket' + checkboxindex + '" > <label class="form-check-label" for="cricket' + checkboxindex + '" required>cricket</label> <input class="form-check-input" type="checkbox" name="hobbies' + checkboxindex + '" value="football" id="football' + checkboxindex + '" > <label class="form-check-label" for="football' + checkboxindex + '" required>football</label> <input class="form-check-input" type="checkbox" name="hobbies' + checkboxindex + '" value="dance" id="dance' + checkboxindex + '" > <label class="form-check-label" for="dance' + checkboxindex + '" required>dance</label> <br>');
    });

    let b = [];
    // for print JSON
    $("#save").click(function(){
        $("#format").empty()
        let array = [];

        // for find maximum input field
        let inputlength = [];
        inputlength.push($(".input-name").length,$(".input-number").length, $(".input-textarea").length, $(".input-select").length, $(".input-file").length, $(".input-radio").length, $(".input-checkbox").length)
        let max = inputlength[0];
        for (let j = 0; j < inputlength.length; j++) {
            if (max <= inputlength[j]){
                max = inputlength[j];
            }
        }

        // for get values from input 
        for (let i = 1; i<=max;i++){
            let name = $("#name" + i).val();
            let number = $("#enternumber" + i).val();
            let comment = $("#comment" + i).val();
            let country = $("#country" + i ).val();
            let myfile = $("#myfile" + i).val();
            let gender = $('input[name="Gender' + i + '"]:checked').val();
            let hobbies = $('input[name="hobbies' + i + '"]:checked').map(function(){ return this.value; }).get()
            // for hobbies value
            if ($(".input-checkbox").length == 0 ){
                hobbies = undefined
            } else if ($(".input-checkbox").length >= i && $(".input-checkbox").length <= max  ) {
                hobbies 
            } else {
                hobbies = undefined
            }
            // for gender value
            if ($(".input-radio").length == 0){
                gender = undefined
            } else if ($(".input-radio").length >= i && $(".input-radio").length <= max && gender == undefined ) {
                gender = ""
            }
            let obj = {};

            obj.name = name;
            obj.number = number;
            obj.comment = comment;
            obj.country = country;
            obj.file = myfile;
            obj.gender = gender;
            obj.hobbies = hobbies;
            
            array.push(obj)

        }
        b.push(array)

        // converting values to JSON format 
        let jsonformat = JSON.stringify(b, null, 1);
        $("#format").append(jsonformat)
    });
});