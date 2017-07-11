// Tu solución

  console.time("presentación");

//console.log
  console.group("grupo console.log");
  console.time("presentacion");
  console.log('%c Juan ', 'background: #80ba27; color: #00FFF; font-size:54px;');
  console.timeEnd("presentacion");
  console.groupEnd();


//console.info
  console.group("grupo console.info");
  console.time("presentacion");
  console.info('%c Juan ', 'background: #3EBDFF; color: #FFF; font-size:25px;');
  console.timeEnd("presentacion");
  console.groupEnd();


//console.warn
  console.group("grupo console.warn");
  console.time("presentacion");
  console.warn('%c Juan ', 'background: #FFF06A; color: #FFF; font-size:25px;');
  console.timeEnd("presentacion");
  console.groupEnd();

//console.error
  console.group("grupo console.error");
  console.time("presentacion");
  console.error('%c Juan ', 'background: #FF1000; color: #FFF; font-size:25px;');
  console.timeEnd("presentacion");
  console.groupEnd();


  console.timeEnd("presentación");