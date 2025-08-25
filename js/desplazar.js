function desplazaPagina(event, id) {
	event.preventDefault();
	const section = document.getElementById(id);
	if (section) {
		section.scrollIntoView({ behavior: "smooth" });
	}
	hideMenu()
}
