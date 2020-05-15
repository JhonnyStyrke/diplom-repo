const QuestionsDB = 
[
	{
		question: 'Можно ли сделать перегрузку операторов true и false?',
		answers: [
			{ answer: 'Нет', score: 0 },
			{ answer: 'Да', score: 1 }
		]
	},
	{
		question: 'Выполнится ли блок finally, если исключения не было?',
		answers: [
			{ answer: 'Да', score: 1 },
			{ answer: 'Нет', score: 0 },
			{ answer: 'Зависит от кода', score: 0 },
			{ answer: 'Зависит от режима работы', score: 0 }
		]
	},
	{
		question: 'Структура — это …',
		answers: [
			{ answer: 'Значимый тип ', score: 1 },
			{ answer: 'Ссылочный тип', score: 0 }
		]
	},
	{
		question: 'Что делает модификатор partial?',
		answers: [
			{ answer: 'Позволяет разделять сущность на несколько частей', score: 1 },
			{ answer: 'Запрещает наследование', score: 0 },
			{ answer: 'Позволяет использовать неуправляемый код', score: 0 },
			{ answer: 'Ограничивает видимость текущим классом', score: 0 }
		]
	},
	{
		question:
			'Верно ли, что тип string хранит набор символов Unicode?',
		answers: [
			{ answer: 'Да', score: 1 },
			{ answer: 'Нет', score: 0 }		]
	},
	{
		question:
			'C# код компилируется в код …',
		answers: [
			{ answer: 'FCL', score: 0 },
			{ answer: 'CLI', score: 0 },
			{ answer: 'MASM', score: 0 },
			{ answer: 'CIL', score: 1 }
		]
	},
	{
		question:
			'Тип string является значимым или ссылочным типом?',
		answers: [
			{ answer: 'Значимым', score: 0 },
			{ answer: 'Ссылочным', score: 1 }
		]
	},
	{
		question: 'Что делает модификатор sealed?',
		answers: [
			{ answer: 'Запрещает наследование', score: 1 },
			{ answer: 'Разрешает наследование только один раз', score: 0 },
			{ answer: 'Добавляется просто для наглядности, но ничего не изменяет', score: 0 },
			{ answer: 'Ограничивает видимость текущей сборкой', score: 0 }
		]
	},
	{
		question: 'Можно ли наследоваться от нескольких интерфейсов?',
		answers: [
			{ answer: 'Да', score: 1 },
			{ answer: 'Нет', score: 0 }
		]
	},
	{
		question: 'Можно ли сделать перегрузку оператора присваивания?',
		answers: [
			{ answer: 'Да', score: 0 },
			{ answer: 'Нет', score: 1 }
		]
	},
	{
		question:
			'Можно ли наследоваться от нескольких классов?',
		answers: [
			{ answer: 'Да', score: 0 },
			{ answer: 'Нет', score: 1 }
		]
	},
	{
		question: 'Какой способ вызова исключения является корректным?',
		answers: [
			{ answer: 'Exception();', score: 0 },
			{ answer: 'new Exception();', score: 0 },
			{ answer: 'throw new Exception();', score: 1 },
			{ answer: 'call new Exception();', score: 0 }
		]
	},
	{
		question:
			'Какой метод тестирования используется для определения возможности масштабируемости приложения, например, при добавлении новых пользователей?',
		answers: [
			{ answer: 'Интеграционное тестирование', score: 1 },
			{ answer: 'Тестирование производительности', score: 0 },
			{ answer: 'Регрессионное тестирование', score: 0 },
			{ answer: 'Тестирование стабильности', score: 0 }
		]
	}
		
];
