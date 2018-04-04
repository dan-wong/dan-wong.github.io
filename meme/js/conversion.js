$(document).ready(function() {
    $("#submitBtn").click(function(){
        if($('#funkyText').is(':checked')) { 
            convertFunkyText(); 
        } else if ($('#smallCaps').is(':checked')) {
            convertSmallCaps();
        } else if ($('#terran').is(':checked')) {
            document.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        } else {
            if ($("#messengerCheckBox").is(":checked")) {
                convertTextForMessenger();
            } else {
                convertText();
            }
        }
    });

    $("#copyBtn").click(function(){
        $("#text").select();
        document.execCommand('copy');

        //Deselect text
        document.getSelection().removeAllRanges();
    }); 
});
        
//Convert to M E M E text without formatting
function convertText() {
    var text = $("#text").val();
    var converted = "";

    for (var i=0;i<text.length;i++) {
        var temp = text.charAt(i);

        if (temp != ' ') {
            converted += ' ' + temp; 
        }
    }

    //Remove first space
    converted = converted.substr(1,converted.length);
    converted = converted.toUpperCase();
    
    $("#text").val(converted);
}

//Convert to M E M E text with messenger formatting
function convertTextForMessenger() {
    var text = $("#text").val();
    var converted = "";
    var word = "";
    var currentLine = "";

    var lineLength = 0;
    var wordLength = 0;

    for (var i=0;i<text.length;i++) {
        var temp = text.charAt(i);
        wordLength++;

        if (temp != ' ') {
            if (word == "") {
                word = temp;
            } else {
               word += ' ' + temp; 
            }
        } else {
            //Check if the new word will push the line length over 16
            if (lineLength + wordLength > 16) {
                converted += '\n' + word;
                lineLength = wordLength;
                wordLength = 0;
            } else {
                converted += ' ' + word;
                lineLength += wordLength;
                wordLength = 0;
            }

            word = "";
        }
    }

    //Add last word
    if (lineLength + wordLength > 16) {
        converted += '\n' + word;
    } else {
        converted += ' ' + word;
    }

    //Remove first space
    converted = converted.substr(1,converted.length);
    converted = converted.toUpperCase();

    $("#text").val(converted);
}

//tHiS CoNvErTs tO FuNkY TeXt
function convertFunkyText() {
    var text = $("#text").val().toLowerCase();
    var converted = "";

    for (var i=0;i<text.length;i++) {
        var temp = text.charAt(i);

        if (i % 2 == 0) {
            temp = temp.toLowerCase();
        } else {
            temp = temp.toUpperCase();
        }

        converted += temp;
    }

    $("#text").val(converted);
}
 
function convertSmallCaps(text) {
    //OMG never again
    var alphabet = {
            "a":"ᴀ",
            "b":"ʙ",
            "c":"ᴄ",
            "d":"ᴅ",
            "e":"ᴇ",
            "f":"ғ",
            "g":"ɢ",
            "h":"ʜ",
            "i":"ɪ",
            "j":"ᴊ",
            "k":"ᴋ",
            "l":"ʟ",
            "m":"ᴍ",
            "n":"ɴ",
            "o":"ᴏ",
            "p":"ᴘ",
            "q":"ǫ",
            "r":"ʀ",
            "s":"s",
            "t":"ᴛ",
            "u":"ᴜ",
            "v":"ᴠ",
            "w":"ᴡ",
            "x":"x",
            "y":"ʏ",
            "z":"ᴢ"};

    var converted="";
    var text = $("#text").val().toLowerCase();

    for (var i=0;i<text.length;i++) {
        var temp = text.charAt(i);

        if (temp == ' ') {
            converted += ' ';
        } else if (alphabet[temp]) {
            converted += alphabet[temp];
        } else {
            converted += temp;
        }
    }

    $("#text").val(converted);
}