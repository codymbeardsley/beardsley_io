function navigationService() {
	var self = this;
	self.pages = [
		{title: "Summary", id: "01", url:"/app/templates/summary.html"},
		{title: "Background", id: "02", url:"/app/templates/background.html"},
		{title: "Portfolio", id: "03", url:"/app/templates/portfolio.html"},
		{title: "Communication", id: "04", url:"/app/templates/communication.html"},
	];
	self.currentPage = self.pages[0];
};
app.service("NavigationService", [navigationService]);