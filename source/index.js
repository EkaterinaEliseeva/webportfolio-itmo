// тернарный оператор
// let age = 18;
// let restricted = ( age < 18 ) ? 'yes' : ( age == 18 ) ? 'notsure' : 'no';
// console.log( restricted );

// const cc = (x = 0) => () => ++x;
//
//
// console.log(::this.cc());
// console.log(cc());
// console.log(cc());

var url = '3336.kodaktor.ru/funcpsst';
var request = new XMLHttpRequest();
request.open('POST', url);
request.onload = function() {
  console.log(request.response);
};
request.send();


<html>
  <head></head>
  <body>
    <h1>Добавить элементы</h1>
    <div class="input__quantity">
      <label>Введите количество элементов:
        <input type="number" class="quantity">
      </label>
      <button class="add">Add</button>
    </div>
    <div class="input__block" style="margin-top: 20px"></div>
    <button class="go" style="visibility:hidden; margin-top: 20px">Go</button>
    <input type="text" style="visibility:hidden; margin-top: 20px" class="f0">
    <input type="text" style="visibility:hidden; margin-top: 20px" class="f1">
  <script>

    document.querySelector('.add').addEventListener('click', function(evt) 		{
    	evt.preventDefault;
      if (document.querySelector('.quantity').value === '') { alert('Введите кол-во!') }
      else {
        let quantity = document.querySelector('.quantity').value;

        for (let i=0; i<quantity; i++) {
          let input = document.createElement('input');
      		input.type='number';
          input.setAttribute('class','in');
          document.querySelector('.input__block').appendChild(input);
        }

        document.querySelector('.go').style.visibility = 'visible';
        document.querySelector('.f0').style.visibility = 'visible';
        document.querySelector('.f1').style.visibility = 'visible';
      }
    });

  var url = 'https://3336.kodaktor.ru/funcpsst';
  var request = new XMLHttpRequest();
  request.open('POST', url, true);


  request.onload = function() {
    var {g: g} = JSON.parse(this.response);

      var f = g.map(function(gItem) {
        var func = new Function ('...x', gItem);
        return func;
      });


      document.querySelector('.go').addEventListener('click', function(evt) {

    var inputs = Array.from(document.querySelectorAll('.in'));
    inputs = inputs.map(function(item) {
    return +item.value;
    });

    document.querySelector('.f0').value = f[0].apply(null, inputs);
   document.querySelector('.f1').value = f[1].apply(null, inputs);
    });

};


  request.send();


    </script>

  </body>
</html>
