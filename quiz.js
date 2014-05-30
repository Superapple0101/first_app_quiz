$(function() {
	
	var questionList, question, e, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, i, score; 
	
	//Questions
	q1 = ["What is 1 + 1?", "2", "1", "3", "2", "0", "1.jpg"];
	q2 = ["What is 6 X 4?", "24", "24", "25", "45", "42", "2.png"];
	q3 = ["What is X? 5X + 5 = 25", "4", "20", "4", "5", "25", "3.png"]
	q4 = ["What is the square root of 64", "8", "16", "4", "32", "8", "4.jpg"]
	q5 = ["What is the best question?", "Nothing", "What is this?", "Why is a thing a thing?", "The best question", "Nothing", "5.jpg"]
	q6 = ["Is this a certain apple or a regular apple", "Irregular Apple", "Certain Apple", "Devil Apple", "Irregular Apple", "Regular Apple", "Artificial_Devil_Fruit_Smile.png"]
	q7 = ["What is this and what is it?", "Pi =3.14159265359", "pie = Pi", "pi =3.12", "pie", "Pi =3.14159265359", "pi.png"]
	q8 = ["Why?", "What?", "WHY!?", "What?", "No Reason", "1.222", "8.png"]
	q9 = ["2 + 2 - 2 X 2 / 2 =?", "?", "1", "2", "11", "?", "default.png"]
	q10 = ["Is this the Final Question", "Yes", "YES!", "NO!", "Yes", "No", "default.png"]
	
	questionList = [q1, q2, q3,q4, q5, q6, q7, q8, q9, q10];
	
	e = "HI";
	question = ["24", "25", "45", "42"];
	
	score = 0;
	
	i = 0;
	function displayQuestions(){
		if (i == questionList.length) {
			finish();
		}
		$("#question").html(questionList[i][0]);
		$("#option_1").html(questionList[i][2]);
		$("#option_2").html(questionList[i][3]);
		$("#option_3").html(questionList[i][4]);
		$("#option_4").html(questionList[i][5]);
		$("#img_container").html("<img id='quiz_img' src='img/" + questionList[i][6] + "'>");
		$("#score").html(score);
	}
		
	displayQuestions();
	
	function isCorrect(content) {
		
		if (content == questionList[i][1]){
			alert("Correct");
			i = i + 1;
			score = score + 1;
			displayQuestions();
		} else {
			alert("Incorrect, Try Again");
			score = score - 1;
		}
	}
	
	function finish() {
		alert("Hey You won. Congratulations");
		$("#content").html("<img id='quiz_img' src='img/winning_ticket.png'><h1>YOU WIN</h1>");
	}
	
	$("#option_1").click(function () {isCorrect($("#option_1").text());});
	$("#option_2").click(function () {isCorrect($("#option_2").text());});
	$("#option_3").click(function () {isCorrect($("#option_3").text());});
	$("#option_4").click(function () {isCorrect($("#option_4").text());});

});