let hash = location.hash;
let page = '';

if (hash == '') {
  page = 'home';
  location.hash = '#home'
} else {
  page = hash.substring(hash.indexOf('#') + 1, hash.length);
}

carregaPagina(page);

window.onhashchange = () => {
  let hash = location.hash;
  let page = '';

  if (hash == '') {
    page = 'home';
    location.hash = '#home'
  } else {
    page = hash.substring(hash.indexOf('#') + 1, hash.length);
  }
  
  carregaPagina(page);
}

$('a').click((event) => {
  event.preventDefault();
  let hash = event.target.href
  hash = hash.substring(hash.indexOf('#') + 1, hash.length);
  location.hash = hash;
});

function registraServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(function (registration) {
        console.log('Registration successful, scope is:', registration.scope);
      })
      .catch(function (error) {
        console.log('Service worker registration failed, error:', error);
      });
  }
}

function carregaPagina(pagina) {
  $.ajax({
    url: `/pages/${pagina}.html`,
    success: function (data) {
      $("#content").html(data);
    },
    error: function (data) {
      console.error(data);
      carregaPaginaErro();
    }
  });
}

function carregaPaginaErro() {
  $.ajax({
    url: `/pages/404.html`,
    success: function (data) {
      $("#content").html(data);
    },
    error: function (data) {
      console.error(data);
    }
  });
}

function isLogged() {
  let user = localStorage.getItem("user");
  if (user != null) {
    return true;
  }
  return false;
}