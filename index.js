function getText() {
    let txtArea = document.getElementById('paragraph-input');
    let checkWord = document.getElementById('word-input').value;
    let checkBox = document.getElementById("ignore-case");


    if (checkBox.checked == false) {
        let word = new RegExp(checkWord, "g");
        let text = txtArea.textContent.replace(word, match => `<mark class="highlighted-txt">${match}</mark>`);
        txtArea.innerHTML = text;

        let wordCount = txtArea.textContent.match(word);
        console.log(wordCount);
        if (document.getElementById('word-input').value != "") {
            if(wordCount!=null)
            document.getElementById('words-counter').innerHTML = wordCount.length;
            else{
                document.getElementById('words-counter').innerHTML = 0;   
            }
        } else {
            document.getElementById('words-counter').innerHTML = 0;
        }
    }
    if (checkBox.checked == true) {

        let word = new RegExp(`${checkWord}`, "gi");
        let text = txtArea.textContent.replace(word, match => `<mark class="highlighted-txt">${match}</mark>`);
        txtArea.innerHTML = text;

        let wordCount = txtArea.textContent.match(word);
        console.log(wordCount);
        if (document.getElementById('word-input').value != "") {
            if(wordCount!=null)
            document.getElementById('words-counter').innerHTML = wordCount.length;
            else{
                document.getElementById('words-counter').innerHTML = 0;   
            }
        } else {
            document.getElementById('words-counter').innerHTML = 0;
        }
    }

}
let checkBox = document.getElementById("ignore-case");
function change(){
    let txtArea = document.getElementById('paragraph-input');
    let checkWord = document.getElementById('word-input').value;
    if (checkBox.checked == true) {
        let word = new RegExp(`${checkWord}`, "gi");
        let text = txtArea.textContent.replace(word, match => `<mark class="highlighted-txt">${match}</mark>`);
        txtArea.innerHTML = text;

        let wordCount = txtArea.textContent.match(word);
        console.log(wordCount);
        if (document.getElementById('word-input').value != "") {
            if(wordCount!=null)
            document.getElementById('words-counter').innerHTML = wordCount.length;
            else{
                document.getElementById('words-counter').innerHTML = 0;   
            }
        } else {
            document.getElementById('words-counter').innerHTML = 0;
        }
    } else if (checkBox.checked == false) {
        let word = new RegExp(checkWord, "g");

        let text = txtArea.textContent.replace(word, match => `<mark class="highlighted-txt">${match}</mark>`);
        txtArea.innerHTML = text;

        let wordCount = txtArea.textContent.match(word);
        console.log(wordCount);
        if (document.getElementById('word-input').value != "") {
            if(wordCount!=null)
            document.getElementById('words-counter').innerHTML = wordCount.length;
            else{
                document.getElementById('words-counter').innerHTML = 0;   
            }
        } else {
            document.getElementById('words-counter').innerHTML = 0;
        }
    }
}