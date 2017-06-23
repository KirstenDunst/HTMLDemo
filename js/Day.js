function changeIframeSRC (id,newSRC) {
	var element = document.getElementById(id);
	element.src = newSRC;
	element.Window.reload();
	element.Window.body.style.backgroundColor = "aliceblue";
}
