Библиотека компонентов для базовых элементов формы.

Элементы типа select, radio, multiselect требуют некоторых рутинных действий
при верстке и использовании ангуляра. Эта рутина может показаться утомительной,
к тому же снижается читаемость кода. Необходимо где-то хранить опции селектов 
и радиокнопок при этом получая данные с сервера для их наполнения. 
Кроме того обмен данными с сервером требует разбора ответа и внесение изменений
в данные формы, подсветку ошибок, 
если таковые есть при операции submit.
Задачей данной библиотеки является унификация верстки базовых элементов и обмена
данными с сервером.
При необходимости применения разных дополнительных элементов ее можно легко 
расширить этими элементами локально в проекте сохранив унификацию обмена данными
с сервером.

Для использования понадобятся включить в импорт в вашем модуле
FormsModule, ReactiveFormsModule из @angular/forms и собственно 
NgxFormControlsModule из ngx-form-controls

Фактически базовые элементы формы представляют собою следующие типы с 
подвидами отображения:
- текст (отображение: однострочный, многострочный), 
- чекбокс (отображение: единственный чекбокс)
- селектор с единственным выбором (отображение: select, radio), 
- селектор с множественным выбором (отображение: multiselect, multicheckbox).
Для каждого типа сделан FormControl элемент, а для каждого подвида сделан
компонент, отвечающий за верстку данного типа.
Т.о. у нас есть следующие FormControl-ы (cм. publis_api.ts):
- NgxFormControlText
- NgxFormControlCheckbox
- NgxFormControlSelect
- NgxFormControlMultiSelect
Можно реализовывать свои элементы, для использования совместно с даннй библиотекой. 
Для этого нужно, чтобы элементы реализовывали  NgxFormControlInterface интерфейс.
Например в другом проекте мы так наполняем данные для грида или файл-аплоада

Для верстки используются следующие компоненты:
- text - NgxFormControlTextComponent для верстки из NgxFormControlText
- textarea NgxFormControlTextAreaComponent для верстки из NgxFormControlText
- checkbox NgxFormControlCheckboxComponent для верстки из NgxFormControlText
- select NgxFormControlSelectComponent для верстки из NgxFormControlSelect
- radio NgxFormControlRadioComponent для верстки из NgxFormControlSelect
- multicheckbox NgxFormControlMultiCheckboxComponent для верстки из NgxFormControlMultiSelect

Для верски ошибок используется NgxFormControlErrorMessageComponent.

Во все компоненты FormContol-ы передаются в качестве параметра formElement

Демонстрация находится в каталоге apps/demo
Для запуска используйте команду ng serve -o

Для инициализации формы ожидаются данные в формате:
<pre>
{
  _fields: {
    text: {
      _value: 'textValue',
      _error: 'TestError',
    },
    select: {
      _options: [
        { _value: '1', _label: '11'},
        { _value: '2', _label: '22'},
      ],
      _value: ['1']
    },
    multiCheckbox: {
      _options: [
        { _value: '1', _label: '11'},
        { _value: '2', _label: '22'},
        { _value: '3', _label: '33'},
        { _value: '4', _label: '44'},
      ],
      _value: ['2', '3']
    },
    radio:  {
      _options: [
        { _value: '1', _label: '11'},
        { _value: '2', _label: '22'},
        { _value: '3', _label: '33'},
        { _value: '4', _label: '44'},
      ],
      _value: '2'
    },
    checkbox: {
      _value: true
    },
    textarea: {
      _value: 'textArea test value22'
    },
    grp: {
      _fields: {
        grpText: {
          _value: 'grpTextValue',
          _mode: 'view'
        },
        grpSelect: {
          _value: '3',
          _options: [
            { _value: '1', _label: '11'},
            { _value: '2', _label: '22'},
            { _value: '3', _label: '333'},
          ],
        }
      }
    }
  }
}
</pre>
Ключи начинающиеся с подчеркивания - служебные.
Имена элементов формы находятся в блоке _fields
Ключи в нем - имя элемента, значение - блок инициализирующих данных, который может 
содержать 
- _value - значение элемента формы
- _default - начальное значение 
- _options - массив пар ключ-значение для типа селектор и мультиселектор
- _error - строка ошибки, в случае ошибки при валидации элемента на серверной стороне
Если элемент представляет собой fieldset, то имеем соответсвенно вложенную
аналогичную структуру. В качестве примера приведен блок 'grp'

Для наполнения формы данными используется следующий вызов метода:
<pre>
NpxControlDataSetter.setControlsData(this.form, this.formData);
</pre>
где первым параметром передается корневой контрол (обычно FormGroup),
а вторым, соответствующая ей иерархия данных.




