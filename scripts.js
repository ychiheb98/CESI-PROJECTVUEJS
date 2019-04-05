var smallBreak = 800; // Your small screen breakpoint in pixels
var columns = $('.dataTable tr').length;
var rows = $('.dataTable th').length;

$(document).ready(shapeTable());
$(window).resize(function() {
    shapeTable();
});


function shapeTable() {
    if ($(window).width() < smallBreak) {
        for (i=0;i < rows; i++) {
            var maxHeight = $('.dataTable th:nth-child(' + i + ')').outerHeight();
            for (j=0; j < columns; j++) {
                if ($('.dataTable tr:nth-child(' + j + ') td:nth-child(' + i + ')').outerHeight() > maxHeight) {
                    maxHeight = $('.dataTable tr:nth-child(' + j + ') td:nth-child(' + i + ')').outerHeight();
                }
                if ($('.dataTable tr:nth-child(' + j + ') td:nth-child(' + i + ')').prop('scrollHeight') > $('.dataTable tr:nth-child(' + j + ') td:nth-child(' + i + ')').outerHeight()) {
                    maxHeight = $('.dataTable tr:nth-child(' + j + ') td:nth-child(' + i + ')').prop('scrollHeight');
                }
            }
            for (j=0; j < columns; j++) {
                $('.dataTable tr:nth-child(' + j + ') td:nth-child(' + i + ')').css('height',maxHeight);
                $('.dataTable th:nth-child(' + i + ')').css('height',maxHeight);
            }
        }
    } else {
        $('.dataTable td, .dataTable th').removeAttr('style');
    }
}

(function(document) {
	'use strict';

	var BigSearch = (function(Arr) {

		var _input;

		function _onInputEvent(e) {
			_input = e.target;
			var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
			Arr.forEach.call(tables, function(table) {
				Arr.forEach.call(table.tBodies, function(tbody) {
					Arr.forEach.call(tbody.rows, _filter);
				});
			});
		}

		function _filter(row) {
			var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
			row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
		}

		return {
			init: function() {
				var inputs = document.getElementsByClassName('BigSearch');
				Arr.forEach.call(inputs, function(input) {
					input.oninput = _onInputEvent;
				});
			}
		};
	})(Array.prototype);

	document.addEventListener('readystatechange', function() {
		if (document.readyState === 'complete') {
			BigSearch.init();
		}
	});

})(document);
