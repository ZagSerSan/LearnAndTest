$('li[id!="one"]').hide().delay(500).fadeIn(1400); // Точка с запятой указывает на конец цепочки - код может располагаться на отдельных строках
$('li:first-child').addClass('next');
$('li.priority').addClass('highlight');