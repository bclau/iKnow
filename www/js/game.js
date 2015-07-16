/*
 * Please see the included README.md file for license terms and conditions.
 */

// write code DOWN from here.

function correct(answer) {
    answer.style.backgroundColor= "#82C15B";
    alert("The answer is true, Congratulations!!");
    answer.style.backgroundColor="#26ABE2";
}

function incorrect(answer){
    answer.style.backgroundColor="#FF0080";
    alert("The answer is false! Sorry :(");
    answer.style.backgroundColor="#11A8D6";
}