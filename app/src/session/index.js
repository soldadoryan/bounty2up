export const sessionSet = dados => {
  localStorage.setItem('user', JSON.stringify(dados));
}

export const sessionGet = dado => {
  const dados = JSON.parse(localStorage.getItem('user'));

  return (dados) ? dados[dado] : '';
}

export const sessionAdd = (title, dado) => {
  let dados = JSON.parse(localStorage.getItem('user'));

  dados[title] = dado;

  localStorage.setItem('user', JSON.stringify(dados));
}

export const isLogged = () => ((localStorage.getItem('user')) ? true : false);

export const isLoggedIMAP = () => {
  const dados = JSON.parse(localStorage.getItem('user'));

  return (dados.token) ? true : false;
}

export const sessionRemove = title => {
  let dados = JSON.parse(localStorage.getItem('user'));

  delete dados[title];

  localStorage.setItem('user', JSON.stringify(dados));
}

export const logout = () => {
  localStorage.clear();
  window.location = '/';
};