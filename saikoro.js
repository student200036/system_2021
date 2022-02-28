function roll_the_dice() {

	let saikoro = Math.floor( Math.random() * 6) +1;//ランダムで１～６の数字を作ります
	document.getElementById("saikoro_me").innerHTML = saikoro;//結果をid="kekka"に表示します
    //document.getElementById("sainome").src= saikoro + ".jpg";//画像をid="sainome"に表示します

}