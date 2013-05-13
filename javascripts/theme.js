Event.observe(document, 'dom:loaded', function() {
	['Пользователь', 'Функция', 'Задача', 'Баг', 'Веха'].each(function(tracker) {
		$$('table.list td.tracker:contains(' + tracker + ')').each(function(item) {
		  $(item).update('').up().addClassName('tracker-' + tracker);
		});
	});

});

